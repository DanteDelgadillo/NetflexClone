import React, { useState, useEffect } from 'react'
import axios from "../axios"
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Base_url = " https://image.tmdb.org/t/p/original/"


function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        console.log("thisone", movie)
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"))
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            {/* container */}
            <div className="row__posters">
                {/* posters */}
                {movies.map(movie => (
                    <img onClick={() => handleClick(movie)} key={movie.id} className="row__poster" src={`${Base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

        </div>
    )
}

export default Row
