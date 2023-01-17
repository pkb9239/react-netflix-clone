import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import "./Row.css";

function Row({ isLargeRow, title, fetchUrl, id }) {
    const [moives, setMovies] = useState([]);

    useEffect(() => {
        fetchMovieData();
    }, []);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl); 
        setMovies(request.data.results);    
        return request;
    }
  return (
    <section className='row'>
        <h2>{title}</h2>
        <div className='slider'>
            <div className='slider__arrow-left'>
                <span className='arrow'>{"<"}</span>
            </div>
        <div id={id} className="row__posters">
            {moives.map(movie => (
                <img 
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                />
            ))}
        </div>
        <div className='slider__arrow-right'>
                <span className='arrow'>{">"}</span>
        </div>
        </div>
    </section>
  )
}

export default Row