from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def show_main(request):
    context = {
        'npm' : '2306152323',
        'name': 'Christian Raphael Heryanto',
        'class': 'PBP D'
    }

    return render(request, "main.html", context)