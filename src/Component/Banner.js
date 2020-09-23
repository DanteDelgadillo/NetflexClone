import React, { useState, useEffect } from 'react'
import axios from "../axios";
import requests from '../request';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOrignals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request

        }

        fetchData()
    }, [])




    const truncate = (n) => {
        if (movie.overview === undefined) {

        } else {
            return (movie.overview.length > n) ? movie.overview.substr(0, n - 1) + '...' : movie.overview;
        }
    }




    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
              'https://image.tmdb.org/t/p/original/${movie.backdrop_path}'
            )`,
                backgroundPosition: "center center"

            }}
        >
            <div className="banner__contents">
                {/* title */}
                <h1 className="banner__title">
                    {movie.title || movie.name || movie.orignal_name}
                </h1>
                {/* div > 2 buttons */}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                {/* description */}
                <h1 className="banner__description">
                    {truncate(200)}
                </h1>
            </div>
            <div className="banner__fadeBottom" />
        </header>
    )
}

export default Banner
