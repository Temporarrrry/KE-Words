import json
from os import stat
from rest_framework.views import APIView
from rest_framework.response import Response

#from Backend.core.utils import loginDecorator
from core.utils import loginDecorator
from bookmark.models import Bookmark
from .serializers import BookmarkSerializer
import json

class AddBookmark(APIView):
  def post(self, request):
    data = json.loads(request.body.decode('utf-8'))
    bookmark = Bookmark.objects.create_word(
      word_id = data["word_id"],
      user_id = data["user_id"]
    )
    return Response(status=200)

class GetAllBookmark(APIView):
  @loginDecorator
  def get(self, request):
    user = request.user
    target = Bookmark.objects.filter(user_id = user.id)
    return Response(BookmarkSerializer(target, many = True).data)

# 북마크 삭제