from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework import status
from .utils.groq_client import generate_playlist_from_groq


@api_view(['GET'])
def get_playlist(request):
    user_input = request.GET.get('genre')
    if user_input:
        playlist = generate_playlist_from_groq(user_input)

        print(JsonResponse(playlist))

        return JsonResponse(playlist, status=status.HTTP_200_OK)
    return JsonResponse(status=status.HTTP_400_BAD_REQUEST)