import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      {movie === null ? (
        console.log("wait")
      ) : (
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner_content">
            <h1 className="banner_title">
              {movie.title || movie.name || movie.original_name}
            </h1>
            <div className="banner_buttons">
              <button className="banner_button">Play</button>
              <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">{movie.overview}</h1>
          </div>
          <div className="banner_fadebottom" />
        </header>
      )}
    </div>
  );
}

export default Banner;
