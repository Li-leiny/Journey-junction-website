from django.db import models

# Create your models here.
from django.db import models
from users.models import CustomUser

class Payment(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    payment_method = models.CharField(max_length=50, choices=[
        ('mpesa', 'M-Pesa'),
        ('paypal', 'PayPal'),
        ('wise', 'Wise'),
        ('visa', 'Visa'),
    ])
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_id = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.payment_method}"