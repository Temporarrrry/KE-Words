from django.urls import path
from. import views

urlpatterns = [
    path('addBookmark', views.AddBookmark.as_view()),
    path('getBookmark', views.GetAllBookmark.as_view()),
]
