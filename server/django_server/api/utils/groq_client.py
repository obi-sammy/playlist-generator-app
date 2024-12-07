import os
from groq import Client

groq_api_key = os.getenv('GROQ_API_KEY')

client = Client(api_key=groq_api_key)

def generate_playlist_from_groq(genre):
    try:
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": f"""
                    Generate a list of exactly 5 {genre} songs in valid JSON format. 
                    The response should explicitly follow this structure, it should be a single valid JSON array starting with `[` and ending with `]` and have no additional text
                    [
                    {{"title": "Song Title 1", "artist": "Artist Name 1"}},
                    {{"title": "Song Title 2", "artist": "Artist Name 2"}}
                    ]
                    """,
                }
            ],
            model="llama3-8b-8192",
        )
        playlist = chat_completion.choices[0].message.content
        return {"playlist": playlist}
    except Exception as e:
        return {"error": str(e)}
