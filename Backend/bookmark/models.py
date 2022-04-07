from django.db import models

class BookmarkManager(models.Manager):
  def create_bookmark(self, word_id, user_id):
    bookmark = self.model(
      word_id = word_id,
      user_id = user_id
    )
    bookmark.save()
    return bookmark

class Bookmark(models.Model):
  bookmark_id = models.AutoField("고유번호", primary_key=True)
  word_id = models.IntegerField("단어 교유번호", default=0)
  user_id = models.IntegerField("유저 고유번호", default=0)

  objects = BookmarkManager()

  def __str__(self):
    return self.word
  
  def has_perm(self, perm, obj=None):
    return True
  
  def has_module_perms(self, app_label):
    return True
