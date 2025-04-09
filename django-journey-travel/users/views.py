

import json
import logging
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
#from .password_reset import send_password_reset_email
from django.middleware.csrf import get_token
from django.contrib.auth import authenticate, login
from django.core.mail import send_mail
from django.urls import reverse
from django.conf import settings
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.template.loader import render_to_string 
from django.core.mail import EmailMessage 



# Get the User model once at the top
User = get_user_model()

# Set up the logger
logger = logging.getLogger(__name__)
User = get_user_model()

def get_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})

@csrf_exempt  # Temporarily disable CSRF for testing
def signup(request):
    if request.method != 'POST':
        logger.warning('Invalid signup method: %s', request.method)
        return JsonResponse({'success': False, 'error': 'Method not allowed'}, status=405)

    try:
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        phone_number = data.get('phone_number')

        logger.debug("Signup attempt for email: %s", email)

        if not email or not password:
            logger.warning('Missing signup credentials')
            return JsonResponse({'success': False, 'error': 'Email and password required'}, status=400)

        if User.objects.filter(email=email).exists():
            logger.warning('Signup attempted with existing email: %s', email)
            return JsonResponse({'success': False, 'error': 'Email already exists'}, status=409)

        user = User.objects.create_user(username=username, email=email, password=password, phone_number=phone_number)
        login(request, user)
        logger.info('New user created and logged in: %s', email)
        return JsonResponse({
            'success': True, 
            'redirect': '/indices.html',
            'user': {'email': user.email}
        })

    except json.JSONDecodeError:
        logger.error('Invalid JSON in signup request')
        return JsonResponse({'success': False, 'error': 'Invalid request format'}, status=400)
    except Exception as e:
        logger.error('Signup error: %s', str(e))
        return JsonResponse({'success': False, 'error': 'Internal server error'}, status=500)

# users/views.py (add this to your existing views)
@csrf_exempt
def login_view(request):
    if request.method != 'POST':
        logger.warning('Login attempt with non-POST method')
        return JsonResponse({'error': 'Only POST method is allowed'}, status=405)

    try:
        data = json.loads(request.body)
        email = data.get('email', '').lower().strip()  # Normalize email
        password = data.get('password', '').strip()

        if not email or not password:
            logger.warning('Login attempt with missing credentials')
            return JsonResponse({'error': 'Email and password are required'}, status=400)

        # Debugging: Check if user exists first
        try:
            user = User.objects.get(email=email)
            logger.debug(f"User found: {user.email}")
        except User.DoesNotExist:
            logger.warning(f'No user found with email: {email}')
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

        # Debugging: Verify password manually
        if not user.check_password(password):
            logger.warning(f'Password mismatch for user: {email}')
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

        # Authenticate properly
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            logger.info(f'User {email} logged in successfully')
            return JsonResponse({
                'success': True,
                'message': 'Login successful',
                'redirect': '/indices.html',  # Add redirect URL
                'user': {
                    'email': user.email,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'phone_number': user.phone_number
                }
            })
        else:
            logger.warning(f'Authentication failed for email: {email}')
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

    except json.JSONDecodeError:
        logger.error('Invalid JSON data received in login request')
        return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    except Exception as e:
        logger.error(f'Unexpected error during login: {str(e)}')
        return JsonResponse({'error': 'Internal server error'}, status=500)

@csrf_exempt

def password_reset_request(request):
    logger.info("Password reset request received")
    
    if request.method != 'POST':
        logger.warning('Invalid password reset method: %s', request.method)
        return JsonResponse({
            'success': False, 
            'error': 'Method not allowed'
        }, status=405)

    try:
        logger.debug("Request body: %s", request.body)
        data = json.loads(request.body)
        email = data.get('email', '').lower().strip()
        
        if not email:
            logger.warning('Password reset attempt with no email')
            return JsonResponse({
                'success': False, 
                'error': 'Email is required'
            }, status=400)

        logger.info("Processing password reset for email: %s", email)

        try:
            user = User.objects.get(email__iexact=email)
            logger.debug("User found: %s", user.email)
        except User.DoesNotExist:
            logger.warning('Password reset attempt for non-existent email: %s', email)
            # Return success to prevent email enumeration
            return JsonResponse({
                'success': True, 
                'message': 'If the email exists, a reset link has been sent'
            })

        # Generate reset token and URL
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        reset_url = request.build_absolute_uri(
            reverse('password_reset_confirm', kwargs={'uidb64': uid, 'token': token})
        )
        
        logger.debug("Generated reset URL: %s", reset_url)

        # Load HTML email template
        email_subject = "Password Reset Request"
        email_body = render_to_string('users/password_reset_email.html', {'reset_url': reset_url, 'user': user})

        # Send email
        try:
             # Send HTML email
            email_message = EmailMessage(
            subject=email_subject,
            body=email_body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[user.email]
        )
            email_message.content_subtype = "html"  # Set the email content type to HTML
            email_message.send()
            
            logger.info("Password reset email sent to %s", user.email)
            return JsonResponse({
                'success': True,
                'message': 'Password reset email sent'
            })
        except Exception as e:
            logger.error('Failed to send reset email to %s: %s', user.email, str(e))
            return JsonResponse({
                'success': False,
                'error': 'Failed to send reset email'
            }, status=500)

    except json.JSONDecodeError:
        logger.error('Invalid JSON in password reset request')
        return JsonResponse({
            'success': False,
            'error': 'Invalid request format'
        }, status=400)
    except Exception as e:
        logger.error('Unexpected error in password reset: %s', str(e), exc_info=True)
        return JsonResponse({
            'success': False,
            'error': 'Internal server error'
        }, status=500)
@csrf_exempt
def password_reset_confirm(request, uidb64, token):
    logger.info("Password reset confirmation received for uidb64: %s", uidb64)
    
    if request.method != 'POST':
        logger.warning('Invalid method for password reset confirmation')
        return JsonResponse({
            'success': False, 
            'error': 'Method not allowed'
        }, status=405)

    try:
        logger.debug("Attempting to decode uid: %s", uidb64)
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
        
        logger.debug("Checking token for user: %s", user.email)
        if not default_token_generator.check_token(user, token):
            logger.warning('Invalid token for user: %s', user.email)
            return JsonResponse({
                'success': False, 
                'error': 'Invalid or expired reset link'
            }, status=400)

        data = json.loads(request.body)
        new_password = data.get('new_password')
        
        if not new_password or len(new_password) < 8:
            logger.warning('Invalid password provided for reset')
            return JsonResponse({
                'success': False,
                'error': 'Password must be at least 8 characters'
            }, status=400)

        logger.info("Resetting password for user: %s", user.email)
        user.set_password(new_password)
        user.save()
        
        logger.info("Password successfully reset for user: %s", user.email)
        return JsonResponse({
            'success': True,
            'message': 'Password reset successful'
        })

    except (TypeError, ValueError, OverflowError, User.DoesNotExist) as e:
        logger.warning('Invalid reset link: %s', str(e))
        return JsonResponse({
            'success': False,
            'error': 'Invalid reset link'
        }, status=400)
    except Exception as e:
        logger.error('Error in password reset confirmation: %s', str(e), exc_info=True)
        return JsonResponse({
            'success': False,
            'error': 'Internal server error'
        }, status=500)