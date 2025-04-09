# users/urls.py
from django.urls import path
from django.contrib.auth import views as auth_views
from .views import (
    signup, 
    get_csrf_token, 
    password_reset_request, 
    password_reset_confirm,
    login_view  # Add the imported login view
)

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('login/', login_view, name='login'),  # Changed to your custom view
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('password_reset/', password_reset_request, name='password_reset'),
    path('password_reset_confirm/<uidb64>/<token>/', 
         password_reset_confirm, 
         name='password_reset_confirm'),
    path('get-csrf-token/', get_csrf_token, name='get_csrf_token'),
]