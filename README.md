# Obi Samuel

Technical Assessment

# Playlist Generator App

The Playlist Generator App is a web application that allows users to generate AI-curated playlists based on their favorite genres. The app features an intuitive interface for selecting music genres and displays personalized song recommendations.

## Features

- **Dynamic Playlist Generation:** Users can select from multiple genres, and the app generates a unique playlist.
- **User Feedback:** Informative UI elements to guide users, including warnings about losing the playlist after navigating away.
- **Interactive Design:** Fully responsive with a modern aesthetic.

## Technologies Used

- **Front-end:** React.js, CSS
- **Back-end:** Django REST Framework
- **Text Generation API:** Groq
- **Deployment:** Gitlab

## Installation

1. Clone the repository:  
   ```
   git clone https://gridirontest.com/bootcamp-cohort-4/obi-samuel.git
   ```
   
2.  **Navigate to the client Directory:**

    ```
    cd client
    cd playlist-generator
    ```

3.  Install front-end dependencies:

    ```
    npm install
    ```

4.  Set up the backend:

    -   Navigate to the backend directory open a new terminal instance:

        ```
        cd server
        cd django_server
        ```

    -   Create a virtual environment: 
        - On Mac:
         ```
          python3 -m venv env
          source env/bin/activate
         ```

         - On Windows:
          ```
          python -m venv env
          source env\Scripts\activate
          ```
    Please note going forward that `python3` is used on Mac while `python` is used on Windows.      

    -   Install dependencies:

        ```
        pip install -r requirements.txt
        ```

    -   Apply migrations:

        ```
        python manage.py migrate
        ```

    -   Start the server:

        ```
        python manage.py runserver
        ```
5. Environment Variables: Create a `.env` file in the `django_server` directory, use the `.env.example` file as guide. Make sure the `.env` file is in the same level as the `manage.py` file

6.  Start the front-end development server:

    ```
    npm run dev
    ```

7.  Access the app at `http://localhost:5173`.

Project Structure
-----------------

-   **Frontend:** Contains React components and CSS files in the `src` directory.
-   **Backend:** Django REST Framework setup in the `backend` directory with REST APIs for genre-based playlist generation.
   

Usage
-----

1.  Launch the application using the above installation instructions.
2.  Select a music genre from the dropdown menu.
3.  Generate your playlist and explore recommended tracks.
4.  Use the back button to navigate back, clearing the playlist.

## Areas of Improvement

- [ ] Implement user authentication for personalized playlists.
- [ ] Change the dropdown to a form where users can specify niche genres.
- [ ] Add persistent storage for playlist saving and sharing.

## Support

If you encounter issues or need assistance with the Playlist Generator App, please feel free to open an issue on this repository. To ensure your concerns are addressed quickly, tag the issue as `need-help` or `under-discussion` to facilitate visibility.

## Contributing

Contributions are welcome! To ensure a smooth collaboration process, please follow the [Installation](#installation) guide to get started.