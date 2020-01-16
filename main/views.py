from django.shortcuts import render, redirect
from django.http import HttpResponse,JsonResponse
import json
from .models import *
from django.core.mail import send_mail

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
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")
        html_format = " Name: {} \n Subject: {} \n Email: {} \n Message: {}".format(name,subject,email,message)
        try:
            send_mail(
                str(subject),
                str(html_format),
                'hideano123@gmail.com',
                ['raghav.dhingra15@gmail.com'],
                fail_silently=False,
            )
            return redirect("/portfolio-profile")

        except Exception as e:
            print(e)
            return redirect("/portfolio-profile")

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