from rest_framework import viewsets

from boats.models import Boat
from boats.serializers import BoatSerializer


class BoatViewSet(viewsets.ModelViewSet):
    queryset = Boat.objects.all()
    serializer_class = BoatSerializer