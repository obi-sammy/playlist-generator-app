# Playlist Generator App

The Playlist Generator App is a web application that allows users to generate AI-curated playlists based on their favorite genres. The app features an intuitive interface for selecting music genres and displays personalized song recommendations.

## Features

- **Dynamic Playlist Generation:** Users can select from multiple genres, and the app generates a unique playlist.
- **User Feedback:** Informative UI elements to guide users, including warnings about losing the playlist after navigating away.
- **Interactive Design:** Fully responsive with a modern aesthetic.

## Screenshots

### 1. Genre Selection
![Genre Selection](https://github.com/user-attachments/assets/e613adce-3453-4e2c-b975-efd0196f3818)

### 2. Generating State
![Generating State](https://github.com/user-attachments/assets/0ebdef50-229c-49eb-81ba-0a03798674f0)

### 3. Generated Playlist
![Generated Playlist](https://github.com/user-attachments/assets/0b1a6d36-02d0-4f49-96c7-5cf72689bc27)

## Technologies Used

- **Front-end:** React.js, CSS
- **Back-end:** Django REST Framework
- **Text Generation API:** Groq
- **Deployment:** Gitlab

Project Structure
-----------------

```
playlist-generator-app/
   ├── client/
   │   ├── playlist-generator-react-app/
   │   │   ├── src/
   │   │   │   ├── assets/
   │   │   │   ├── App.css
   │   │   │   ├── App.jsx
   │   │   │   ├── index.css
   │   │   │   └── main.jsx
   │   │   ├── public/
   │   │   ├── index.html
   │   │   ├── .gitignore
   │   │   ├── eslint.config.js
   │   │   ├── package-lock.json
   │   │   ├── package.json
   │   │   └── vite.config.js
   ├── server/
   │   ├── django_server/
   │   │   ├── api/
   │   │   │   ├── migrations/
   │   │   │   ├── utils/
   │   │   │   │   ├── groq_client.py
   │   │   │   ├── asgi.py
   │   │   │   ├── admin.py
   │   │   │   ├── apps.py
   │   │   │   └── models.py
   │   │   │   ├── tests.py
   │   │   │   ├── urls.py
   │   │   │   └── views.py
   │   │   ├── django_server/
   │   │   │   ├── __init__.py
   │   │   │   ├── asgi.py
   │   │   │   ├── settings.py
   │   │   │   ├── urls.py
   │   │   │   └── wsgi.py
   │   ├── .gitignore
   │   ├── .env.example
   │   ├── manage.py
   └── README.md 
```

Notes for Users
---------------

-   **Data Loss Warning:** Clicking the "Back" button clears the current playlist and resets the app. Ensure you save your playlist before proceeding.
-   **Cross-Platform Compatibility:** The app is optimized for desktop and mobile devices.

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

## Postman Documentation

To explore the API endpoints for the Playlist Generator App, visit the detailed [Postman Documentation](https://documenter.getpostman.com/view/21537862/2sAYBbf9ef). 

The documentation includes:
- **Endpoint Descriptions:** Detailed information about each endpoint, including request methods, parameters, and response structures.

## Usage

### Local Usage

1. Follow the installation instructions to set up the application locally.
2. Select a music genre from the dropdown menu on the interface.
3. Click "Generate Playlist" to create a curated list of songs based on your chosen genre.
4. Use the "Back" button to clear the playlist and select a new genre.

### Hosted Usage

1. The front-end of the application is hosted and accessible [playlist-generator-app link](https://playlist-generator-njjvpdik7-obi-sammys-projects.vercel.app/).  
2. Unfortunately, the server is not yet hosted, meaning requests to generate playlists are not functional from the hosted site at this time.    
Note: The web-based option is currently under development and will be available soon.

## Areas of Improvement

- [ ] Implement user authentication for personalized playlists.
- [ ] Change the dropdown to a form where users can specify niche genres.
- [ ] Add persistent storage for playlist saving and sharing.
- [ ] Restrict access to the server by adding the address of the urls that should have access to the server in the corsheader function.
- [ ] Host the server

## Support

If you encounter issues or need assistance with the Playlist Generator App, please feel free to open an issue on this repository. To ensure your concerns are addressed quickly, tag the issue as `need-help` or `under-discussion` to facilitate visibility.

## Contributing

Contributions are welcome! To ensure a smooth collaboration process, please follow the [Installation](#installation) guide to get started.
