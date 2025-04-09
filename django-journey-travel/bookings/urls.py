from django.urls import path
from .views import submit_booking
from . import views

urlpatterns = [
       
       path('get-csrf-token/', views.get_csrf_token, name='get_csrf'),
    path('submit/', submit_booking, name='submit_booking'),
]