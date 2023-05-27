import React, { useState } from 'react';
import "./Layout.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Layout = ({ title, img, overview }) => {
  const [trailer, setTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
      fs: 0,
    }
  };

  const handleClick = (movie) => {
    setTrailer(!trailer);
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      const movieTitle = movie?.title || "";
      movieTrailer(movieTitle, { tmdbId: movie?.id })
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  const base_url = "https://image.tmdb.org/t/p/original";
  
  return (
    <div className='layout'>
      <div className="square">
        <div className="box">
          <div className='poster' role='img' aria-label='Poster' style={{backgroundImage: `url(${base_url}${img})`}}></div>
          <div className="details">
            <div className="heads">
              <h2>{title}</h2>
              <button onClick={() => handleClick({title})}>{trailer ? "Close" : "Check Out"}</button>
            </div>
            <p>{overview}</p>
          </div>
        </div>
      </div>
      {trailer && trailerUrl && (
        <div>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Layout;
