from rest_framework import serializers, viewsets, mixins, exceptions
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Circle, Event
from timeless.users.views import UserSerializer


class CircleSerializer(serializers.ModelSerializer):
    members = UserSerializer(many=True)

    class Meta:
        model = Circle
        fields = ["name", "image_url", "members", "admin"]


class EventSerializer(serializers.ModelSerializer):
    author = UserSerializer()

    class Meta:
        model = Event
        fields = ["created_at", "author", "text", "circle", "image_url"]


class CreateEventSerializer(serializers.Serializer):
    text = serializers.CharField(max_length=342)
    image_url = serializers.URLField(max_length=200, allow_null=True, required=False)


class CircleViewset(viewsets.ReadOnlyModelViewSet):

    queryset = Circle.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = CircleSerializer

    @action(detail=True, methods=["GET"])
    def get_circle_events(self, request, pk=None):
        events = Event.objects.raw(
            'SELECT * FROM "circles_event" WHERE "circles_event"."circle_id" = 1 GROUP BY "circles_event"."author_id"'
        )
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=["POST"])
    def create_post(self, request, pk=None):
        circle = self.get_object()
        user = request.user
        present_member = circle.members.get(pk=user.id)
        if not present_member:
            raise exceptions.ValidationError("Not in circle!")
        serializer = CreateEventSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        event = Event.objects.create(
            author=user,
            circle=circle,
            text=serializer.data["text"],
            image_url=serializer.data["image_url"],
        )
        serializer = EventSerializer(event)
        return Response(serializer.data)


class EventViewset(
    mixins.RetrieveModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet
):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    @action(detail=False, methods=["GET"])
    def get_last_event(self, request):
        event = self.get_queryset().order_by("created_at").last()
        serializer = self.get_serializer(event)
        return Response(serializer.data)

