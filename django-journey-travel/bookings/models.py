from django.db import models
from django.contrib.auth import get_user_model
from django.utils.timezone import now  # Use Django's timezone for time handling

User = get_user_model()

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookings')
    first_name = models.CharField(max_length=100, default='unknown')
    middle_name = models.CharField(max_length=100, blank=True, null=True)
    surname = models.CharField(max_length=100, default='unknown')
    nationality = models.CharField(max_length=100, default='unknown')
    passport_number = models.CharField(max_length=100, default='unknown')
    phone_code = models.CharField(max_length=10, default='unknown')
    phone_number = models.CharField(max_length=20,default='unknown')
    check_in_date = models.DateField(default='2025-01-01')
    check_out_date = models.DateField(default='2025-01-01')
    traveling_from = models.CharField(max_length=100, default='unknown')
    hotel = models.CharField(max_length=100,default='Not Provided')
    number_of_rooms = models.PositiveIntegerField(default=0)
    transportation_mode = models.CharField(max_length=50, default='Not Provided')
    flight_class = models.CharField(max_length=50, blank=True, null=True)
    adults = models.PositiveIntegerField(default=0, blank=True, null=True)
    students = models.PositiveIntegerField(default=0, blank=True, null=True)
    seniors = models.PositiveIntegerField(default=0, blank=True, null=True)
    youths = models.PositiveIntegerField(default=0, blank=True, null=True)
    children = models.PositiveIntegerField(default=0, blank=True, null=True)
    toddlers = models.PositiveIntegerField(default=0, blank=True, null=True)
    infants = models.PositiveIntegerField(default=0, blank=True, null=True)
    special_requests = models.TextField(blank=True, null=True)
    emergency_contact = models.CharField(max_length=100, default='Not Provided', null=True,blank=True)  # Added default value
    payment_method = models.CharField(max_length=50, default='not provided', null=True,blank=True)
    visa_number = models.CharField(max_length=100, blank=True, null=True)
    visa_expiry = models.CharField(max_length=10, blank=True, null=True)
    visa_cvv = models.CharField(max_length=5, blank=True, null=True)
    paypal_email = models.EmailField(blank=True, null=True)
    crypto_wallet = models.CharField(max_length=100, blank=True, null=True)
    creditcard_number = models.CharField(max_length=100, blank=True, null=True)
    creditcard_expiry = models.CharField(max_length=10, blank=True, null=True)
    creditcard_cvv = models.CharField(max_length=5, blank=True, null=True)
    wise_email = models.EmailField(blank=True, null=True)
    mpesa_phone = models.CharField(max_length=20, blank=True, null=True)
    total_cost = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    created_at = models.DateTimeField(default=now)  # Updated to use Django's timezone module

    def __str__(self):
        return f"Booking by {self.first_name} {self.surname} for {self.hotel}"
