import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
import './App.css'

const PlaylistApp = () => {
  const [genre, setGenre] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleGeneratePlaylist = async () => {
    if (genre === '') {
      setErrorMessage("Please select a genre");
      return;
    }

    setErrorMessage('');
    setStatus('Pending');
    setPlaylist([]);
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/playlist',{
        params: {
          genre: genre
        },
        headers: { 
          "Content-Type": "application/json" 
        }
      });

      const parsedData =
      typeof response.data.playlist === 'string'
        ? JSON.parse(response.data.playlist)
        : response.data.playlist;

      if (Array.isArray(parsedData)) {
        setPlaylist(parsedData);
        setStatus('Success');
      } else {
        console.error("Invalid playlist data", parsedData);
        setErrorMessage("Received invalid data format.");
        setStatus('');
      }
    } catch (err) {
      if (err.response) {
        setErrorMessage('An error occurred while fetching the playlist.');
      } else if (err.request) {
        setErrorMessage('Network error, please try again later.');
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
      setStatus('');
    };
  }; 

  return (
    <div className='playlist-generator-page-container'>
      <header>
        <nav>
          <p>playlist-generator</p>
        </nav>
      </header>

      <main>
        <section className='playlist-generator-text-section'>
          <span className='text-section-welcome'>Welcome to</span>
          <h1 className='text-section-header'>Playlist Generator</h1>
          <span className='text-section-span'>AI-generated playlist on your favorite genre</span>
        </section>

        <section className='playlist-generator-form-section'>
          {errorMessage && <div className='error-message-container'>{errorMessage}</div>}

          <div className='playlist-generator-form-container'>
            <div className='playlist-generator-form'>
              <label htmlFor="dropdown">Pick a genre</label>
              <select id='dropdown' value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="" disabled>Select Genre</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
                <option value="Country">Country</option>
                <option value="Blues">Blues</option>
                <option value="Afrobeats">Afrobeats</option>
                <option value="Hip-hop">Hip-hop</option>
                <option value="Rnb">R&B</option>
              </select>
            </div>

            <button
              onClick={handleGeneratePlaylist}
              aria-live="polite"
              aria-label={status === "Pending" ? "Generating..." : "Generate Playlist"}
              className='playlist-generate-button'
            >
              <div className="spinner-container">
                {status === "Pending" && <span className="spinner" aria-hidden="true" />}
              </div>
              {status === "Pending" ? "Generating" : "Generate Playlist"}
            </button>
          </div>
        </section>

        {status === 'Success' && 
          <section className='playlist-container'>
            <button 
              className="back-button" 
              onClick={() => {
                setStatus('');
                setPlaylist([]);
                setGenre('');
              }}
            >
              <FaArrowLeft className='back-button-icon'/>
              Back
            </button>

            <h1 className="playlist-header">Take a screenshot and share with your friends</h1>

            <div className="playlist-display">
              {playlist.map((item, index) => (
                <div key={index} className="song-item">
                  <div >
                    <p className="song-number">{index + 1}.</p>
                  </div>

                  <div className="song-details">
                    <h3 className="song-title">{item.title}</h3>
                    <span className="song-artist">{item.artist}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="warning-message">
              Clicking the back button will erase the current playlist.
            </p>
          </section>
        }
      </main>
    </div>
  );
};

export default PlaylistApp;
