from datetime import datetime
from django.contrib import sitemaps
from django.urls import reverse
from main.models import *

class StaticViewSitemap(sitemaps.Sitemap):
    priority = 0.5
    changefreq = 'monthly'

    def items(self):
        return ['home','projects','portfolio']

    def location(self, item):
        return reverse(item)