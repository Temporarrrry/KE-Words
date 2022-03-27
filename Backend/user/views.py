import json
from django.contrib import auth
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from Backend.core.utils import loginDecorator
from . import User
from .serializers import UserSerializer
import json

class Register(APIView):
  def post(self, request):
    data = json.loads(request.body.decode('utf-8'))
    user = User.create_user(
      email = data["email"],
      password = data['password']
    )
    token = Token.objects.create(user=user)
    return Response({"Token": token.key})

class Login(APIView):
  @loginDecorator
  def post(self, request):
    data = json.loads(request.body)
    user = auth.authenticate(username=data["email"], password=data["password"])
    if (user is not None):
      token = Token.objects.get(user=user)
      if (token is None):
        token = Token.objects.create(user=user)
      return Response({"Token": token.key})
    else:
      return Response(status=401)

class Logout(APIView):
  @loginDecorator
  def get(self, request):
    user = request.user
    token = Token.objects.get(user=user)
    token.delete()
    return Response({"Logout"})

class ChangePassword(APIView):
  @loginDecorator
  def post(self, request):
    data = json.loads(request.body)
    newPassword = data["newPassword"]
    user = request.user
    user.set_password(newPassword)
    user.save()
    
    #Change Token
    token = Token.objects.get(user=user)
    token.delete()
    token = Token.objects.create(user=user)
    return Response({"Token": token.key})

class GetUser(APIView):
  def get(self, usernumber):
    target = User.objects.get(usernumber=usernumber)
    return Response(UserSerializer(target).data)

