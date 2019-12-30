from django.db import models
from django.utils import timezone

# Create your models here.
class Testimonial(models.Model):
    name = models.CharField(blank=True,null=True,max_length=200,default='Anonymous')
    image = models.CharField(blank=True,null=True,max_length=500,default='https://res.cloudinary.com/raghavdhingra/image/upload/v1574788770/img_k2mozj.png')
    created_on = models.DateTimeField(blank=True, null=True,default=timezone.now)
    show = models.BooleanField(blank=True,null=True,default=True)
    user_desc = models.CharField(blank=True,null=True,max_length=200,default='Customer')
    testimonial = models.TextField(blank=True,null=True,default='')

    def publish(self):
        self.created_on = timezone.now()
        self.save()

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(blank=True,null=True,max_length=200,default='Anonymous')
    website = models.CharField(blank=True,null=True,max_length=500,default='')
    link = models.CharField(blank=True,null=True,max_length=500,default='')
    created_on = models.DateTimeField(blank=True, null=True,default=timezone.now)
    show = models.BooleanField(blank=True,null=True,default=True)
    image = models.CharField(blank=True,null=True,max_length=500,default='https://res.cloudinary.com/raghavdhingra/image/upload/v1574935065/pc_bg9yoh.jpg')

    def publish(self):
        self.created_on = timezone.now()
        self.save()

    def __str__(self):
        return self.name