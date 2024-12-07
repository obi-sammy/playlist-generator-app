from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework import status
from .utils.groq_client import generate_playlist_from_groq


@api_view(['GET'])
def get_playlist(request):
    user_input = request.GET.get('genre')
    if user_input:
        try:
            playlist = generate_playlist_from_groq(user_input)
            if playlist and len(playlist) > 0:
                return JsonResponse(playlist, status=status.HTTP_200_OK)
            else:
                return JsonResponse({'error': 'No playlist found for the given genre'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return JsonResponse({'error': 'An error occurred while generating the playlist'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    return JsonResponse({'error': 'Genre not provided'}, status=status.HTTP_400_BAD_REQUEST)

