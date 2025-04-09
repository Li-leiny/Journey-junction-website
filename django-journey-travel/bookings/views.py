from django.shortcuts import render
import json
import logging
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core.exceptions import ValidationError
from django.middleware.csrf import get_token
from .models import Booking

logger = logging.getLogger(__name__)


def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'csrfToken': token})

@csrf_exempt  # Remove this in production when implementing proper CSRF protection
def submit_booking(request):
    if request.method == 'POST':
        try:
            # Debug logging
            logger.debug(f"Request Headers: {request.headers}")
            logger.debug(f"Request Body: {request.body}")

            # Parse JSON data
            try:
                data = json.loads(request.body)
            except json.JSONDecodeError:
                return JsonResponse(
                    {"status": "error", "message": "Invalid JSON format"},
                    status=400
                )

            # Create and validate booking
            booking = Booking(
                user_id=data.get('user_id', 1),  # Default to 1 if not provided
                first_name=data.get('first_name', '').strip(),
                middle_name=data.get('middle_name', '').strip(),
                surname=data.get('surname', '').strip(),
                nationality=data.get('nationality', '').strip(),
                passport_number=data.get('passport', '').strip(),
                phone_number=data.get('phone', '').strip(),
                check_in_date=data.get('check_in'),
                check_out_date=data.get('check_out'),
                traveling_from=data.get('location', '').strip(),
                hotel=data.get('hotel', '').strip(),
                number_of_rooms=int(data.get('rooms', 1)),
                transportation_mode=data.get('transportation', '').strip(),
                flight_class=data.get('flight_class', '').strip(),
                adults = int(data.get('adults') or 0) ,
                students = int(data.get('students') or 0),  # Use 0 if 'students' is None or an empty string
                seniors = int(data.get('seniors') or 0),    # Use 0 if 'seniors' is None or an empty string
                youths = int(data.get('youths') or 0),      # Use 0 if 'youths' is None or an empty string
                children = int(data.get('children') or 0),  # Use 0 if 'children' is None or an empty string
                toddlers = int(data.get('toddlers') or 0),  # Use 0 if 'toddlers' is None or an empty string
                infants = int(data.get('infants') or 0),    # Use 0 if 'infants' is None or an empty string
                special_requests=data.get('special_requests', '').strip(),
                emergency_contact=data.get('emergency_contact', '').strip(),
                payment_method=data.get('payment_method', '').strip(),
                visa_number=data.get('visa_number', '').strip(),
                visa_expiry=data.get('visa_expiry', '').strip(),
                visa_cvv=data.get('visa_cvv', '').strip(),
                paypal_email=data.get('paypal_email', '').strip(),
                crypto_wallet=data.get('crypto_wallet', '').strip(),
                creditcard_number=data.get('creditcard_number', '').strip(),
                creditcard_expiry=data.get('creditcard_expiry', '').strip(),
                creditcard_cvv=data.get('creditcard_cvv', '').strip(),
                wise_email=data.get('wise_email', '').strip(),
                mpesa_phone=data.get('mpesa_phone', '').strip(),
                total_cost=float(data.get('total_cost', 0.00))
            )

            # Validate and save
            booking.full_clean()
            booking.save()

            return JsonResponse({
                "status": "success",
                "message": "Booking created successfully!",
                "booking_id": booking.id  # Return the ID for reference
            }, status=201)

        except ValidationError as e:
            logger.error(f"Validation error: {e.message_dict}")
            return JsonResponse({
                "status": "error",
                "errors": e.message_dict,
                "message": "Validation failed"
            }, status=400)
            
        except Exception as e:
            logger.error(f"Error processing booking: {str(e)}", exc_info=True)
            return JsonResponse({
                "status": "error",
                "message": "An unexpected error occurred"
            }, status=500)
            
    return JsonResponse({
        "status": "error",
        "message": "Only POST requests are allowed"
    }, status=405)
