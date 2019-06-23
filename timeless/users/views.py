from rest_framework import serializers, viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Profile, User


class UserSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ["first_name", "last_name", "email", "id", "image_url"]

    def get_image_url(self, user):
        return Profile.objects.get(pk=user.id).image_url


class UserViewset(viewsets.ModelViewSet):

    queryset = User.objects.all()
    # permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer
