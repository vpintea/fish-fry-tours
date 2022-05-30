from rest_framework import serializers

from boats.models import Boat


class BoatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Boat
        fields = ['id', 'name', 'status']

    def create(self, validated_data):
        return Boat.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance
