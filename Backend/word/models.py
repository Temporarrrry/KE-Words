from django.db import models

class Word(models.Model):
  id = models.AutoField("고유번호", primary_key=True)
  word = models.CharField("단어", default="", max_length=50)
  korean_mean = models.CharField("한국어 뜻", default="", max_length=255)
  english_mean = models.CharField("영어 뜻", default="", max_length=255)
  is_korean = models.BooleanField("단어 종류", default=False)

  def __str__(self):
    return self.word
  
  def has_perm(self, perm, obj=None):
    return True
  
  def has_module_perms(self, app_label):
    return True

class WordManager(models.Manager):
  def create__word(self, word, korean_mean, english_mean, is_korean):
    word = self.model(
      word = word,
      korean_mean = korean_mean,
      english_mean = english_mean,
      is_korean = is_korean
    )
    word.save()
    return word
