from django.shortcuts import render, redirect
from django.http import HttpResponse,JsonResponse
from .models import *

# Create your views here.
def home(request):
    context = {
        "title": "Raghav Dhingra | Full Stack Web Developer | Portfolio.OS",
    }
    return render(request,'settings.html',context)

def portfolio(request):
    context = {
        "title": "Raghav Dhingra | Portfolio Profile | Portfolio.OS",
        "testimonials":Testimonial.objects.all(),
    }
    return render(request,'portfolio.html',context)

def submitForm(request):
    return redirect('/')

def projects(request):
    context = {
        "title": "Raghav Dhingra | Projects | Portfolio.OS",
        "testimonials":Testimonial.objects.all(),
        "projects": Project.objects.all(),
    }
    return render(request,'projects.html',context)

def error_404(request,exception):
    context = {}
    try:
        return render(request,'error404.html',context)
    except Exception as e:
        return HttpResponse(str(e) + "<Br>" + str(exception))

def error_500(request):
    context = {}
    try:
        return render(request,'error500.html',context)
    except Exception as e:
        return HttpResponse(str(e))