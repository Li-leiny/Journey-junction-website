from django.shortcuts import render

# Create your views here.
# core/views.py

from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Django Journey Travel Home Page!")
