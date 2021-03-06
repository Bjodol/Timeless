"""timeless URL Configuration

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
from django.contrib import admin
from django.urls import path, include
from .users.views import UserViewset
from timeless.circles.views import CircleViewset, EventViewset
from rest_framework.authtoken import views

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"users", UserViewset)
router.register(r"circles", CircleViewset)
router.register(r"events", EventViewset)
urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("api-token-auth/", views.obtain_auth_token),
]
