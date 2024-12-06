from django.urls import path
from .views import get_playlist


urlpatterns = [
    path('playlist/', get_playlist, name='get_playlist ')
]