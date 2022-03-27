import json
from rest_framework.views import APIView
from rest_framework.response import Response

from . import Word
from .serializers import WordSerializer
import json

class Apply(APIView):
  def post(self, request):
    data = json.loads(request.body.decode('utf-8'))
    word = Word.create_word(
      word = data["word"],
      korean_mean = data["korean_mean"],
      english_mean = data["english_mean"],
      is_korean = data["is_korean"]
    )
    return word

class GetWord(APIView):
  def get(self, request):
    target = Word.objects.all()
    return Response(WordSerializer(target, many=True).data)
