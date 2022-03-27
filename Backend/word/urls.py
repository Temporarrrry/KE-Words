from django.urls import path
from. import views

urlpatterns = [
    path('apply/', views.Register.as_view()),
]
