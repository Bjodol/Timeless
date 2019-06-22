from django.contrib import admin

# Register your models here.
from .models import Circle, Event, Action

admin.site.register(Circle)
admin.site.register(Event)
admin.site.register(Action)
