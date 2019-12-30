"""portfolio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

import main.views as mainView
from django.conf.urls import url
from django.views.generic import TemplateView
from django.views.static import serve
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from portfolio.settings import *
from django.contrib.sitemaps.views import sitemap
from django.contrib.sitemaps import views
from .sitemap import *

sitemaps = {
    'static': StaticViewSitemap,
}

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',mainView.home,name="home"),
    path('projects',mainView.projects,name="projects"),
    path('submitForm',mainView.submitForm,name="submitForm"),
    path('portfolio-profile',mainView.portfolio,name="portfolio"),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps }, name='django.contrib.sitemaps.views.sitemap'),
    url(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT, 'show_indexes': settings.DEBUG}),
    path('robots.txt', TemplateView.as_view(template_name="./robots.txt", content_type='text/plain')),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = mainView.error_404
handler500 = mainView.error_500