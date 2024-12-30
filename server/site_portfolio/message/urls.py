from django.urls import path
from .views import create_message, get_message

urlpatterns = [
    path('get/', get_message, name='message-list'),
    path('create/', create_message, name='create-message')
]
