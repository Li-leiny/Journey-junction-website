from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.payment_list, name='payment_list'),  # List all payments
    path('create/', views.payment_create, name='payment_create'),  # Create a new payment
    path('<int:pk>/', views.payment_detail, name='payment_detail'),  # View payment details
]
