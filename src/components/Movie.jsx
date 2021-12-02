import React, {useState, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import MovieHeader from './MovieHeader/';
import MovieCredit from './MovieCredit/';
// config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = () => {
    const {id} = useParams();
    const {movie, credits} = useMovieFetch(id);
    console.log(movie);
    console.log(credits);

    return (
        <>
        {   movie && 
            <MovieHeader
                title={movie.title}
                overview = {movie.overview}
                banner = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
                genres = {movie.genres}
                vote_average = {movie.vote_average}
                poster = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`}
            />
        }

        {
            credits && 
            <MovieCredit
                cast={credits.cast}
            />
        }
        </>
    );
};

export default Movie;