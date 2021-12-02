import { useState, useEffect } from "react";
import API from '../API';

export const useMovieFetch = (movie_id) => {
    // state which stores movie data.
    const [movie, setMovie] = useState();
    const [credits, setCredits] = useState();

    // function defination to fetch movie data
    const fetchMovie = async (movie_id) => {
        try{
            const fetched_movie = await API.fetchMovie(movie_id);
            const fetched_credits = await API.fetchCredits(movie_id);
            setMovie(fetched_movie);
            setCredits(fetched_credits);
        }
        catch(error)
        {
            console.log(error);
        }
    };

    // load page with movie data function call
    useEffect(() => {
        fetchMovie(movie_id);
    }, []);

    // return movie data fetched from api to the UI
    return {movie, credits};
};