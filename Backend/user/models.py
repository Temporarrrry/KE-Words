from django.db import models
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)

class UserManger(BaseUserManager):
  def create_user(self, email, password):
    if (not email):
      return "Must Have Email"
    user = self.model(
      email = self.normalize_email(email),
    )
    user.set_password(password)
    user.save()
    return user
  
  def create_superuser(self, email, password):
    user = self.create_user(email, password)
    user.is_admin = True
    user.save(using=self.db)
    return user


class User(AbstractBaseUser):
  user_id = models.AutoField("고유번호", primary_key=True)
  email = models.CharField("이메일", max_length=255, unique=True, default="")
  is_admin = models.BooleanField("관리자", default=False)

  objects = UserManger()

  USERNAME_FIELD = "email"
  REQUIRED_FIELD = ["email"]

  def __str__(self):
    return self.email
  
  def has_perm(self, perm, obj=None):
    return True
  
  def has_module_perms(self, app_label):
    return True
  
  @property
  def is_staff(self):
    return self.is_admin
