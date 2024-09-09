from django.shortcuts import render

# Create your views here.

def show_main(request):
    context = {
        'app' : 'Chicken-Daddy',
        'name': 'Christian Raphael Heryanto',
        'class': 'PBP D'
    }

    return render(request, "main.html", context)