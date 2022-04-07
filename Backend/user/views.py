import json
from django.contrib import auth
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

#from Backend.core.utils import loginDecorator
from core.utils import loginDecorator
from user.models import User
from .serializers import ChkSerializer, UserSerializer
import json

class Register(APIView):
  def post(self, request):
    data = json.loads(request.body.decode('utf-8'))
    user = User.objects.create_user(
      email = data["email"],
      password = data['password']
    )
    token = Token.objects.create(user=user)
    return Response({"Token": token.key})

class SuperUser(APIView):
  def post(self, request):
    data = json.loads(request.body.decode('utf-8'))
    user = User.objects.create_superuser(
      email = data["email"],
      password = data['password']
    )
    token = Token.objects.create(user=user)
    return Response({"Token": token.key})

class Login(APIView):
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
  def get(self, request, usernumber):
    print(usernumber)
    target = User.objects.get(user_id=usernumber)
    return Response(UserSerializer(target).data)

class Userchk(APIView):
  @loginDecorator
  def get(self, request):
    return Response(ChkSerializer(User.objects.all(), many=True).data)
