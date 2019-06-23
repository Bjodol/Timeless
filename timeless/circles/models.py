from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Circle(models.Model):
    name = models.CharField(max_length=200)
    image_url = models.URLField(max_length=200, null=True, blank=True)
    admin = models.ForeignKey(
        User, on_delete=models.PROTECT, related_name="admin", null=True
    )
    members = models.ManyToManyField(User, related_name="circles", blank=True)


class Action(models.Model):
    text = models.CharField(max_length=200)
    circle = models.ForeignKey(Circle, on_delete=models.CASCADE, related_name="actions")


class Event(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="events")
    image_url = models.URLField(max_length=200, null=True, blank=True)
    text = models.CharField(max_length=342)
    circle = models.ForeignKey(Circle, on_delete=models.CASCADE, related_name="events")
