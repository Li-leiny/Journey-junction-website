from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Payment
from django.views.decorators.csrf import csrf_exempt
import json

# List all payments for a user
def payment_list(request):
    if request.user.is_authenticated:
        payments = Payment.objects.filter(user=request.user)
        data = [{'payment_method': p.payment_method, 'amount': str(p.amount), 'transaction_id': p.transaction_id, 'timestamp': p.timestamp} for p in payments]
        return JsonResponse({'payments': data})
    else:
        return JsonResponse({'error': 'User not authenticated'}, status=401)

# Create a new payment
@csrf_exempt
def payment_create(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if request.user.is_authenticated:
            Payment.objects.create(
                user=request.user,
                payment_method=data['payment_method'],
                amount=data['amount'],
                transaction_id=data['transaction_id']
            )
            return JsonResponse({'message': 'Payment created successfully!'})
        else:
            return JsonResponse({'error': 'User not authenticated'}, status=401)

# View payment details
def payment_detail(request, pk):
    if request.user.is_authenticated:
        payment = get_object_or_404(Payment, pk=pk, user=request.user)
        data = {
            'payment_method': payment.payment_method,
            'amount': str(payment.amount),
            'transaction_id': payment.transaction_id,
            'timestamp': payment.timestamp
        }
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'User not authenticated'}, status=401)
