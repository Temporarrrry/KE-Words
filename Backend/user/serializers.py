from dataclasses import field
from rest_framework import serializers

from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email',)

class ChkSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'