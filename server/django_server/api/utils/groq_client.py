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
                    "content": f"Generate a list of 5 {genre} songs in JSON format with only the title and artist  in an object, without any additional text, '\', '\n' or code block.",
                }
            ],
            model="llama3-8b-8192",
        )
        playlist = chat_completion.choices[0].message.content
        return {"playlist": playlist}
    except Exception as e:
        return {"error": str(e)}
