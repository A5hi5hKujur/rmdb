import { useState, useEffect } from "react";
import API from '../API';

const initialState = {
    page : 0,
    results : [],
    total_pages : 0,
    total_results : 0
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [page, setPage] = useState(1);
    // when api fetches movies correctly
    const [state, setState] = useState(initialState);
    // when is in the midst of fetching
    const [loading, setLoading] = useState(false);
    // when some error occurs while fetching the movies from api
    const [error, setError] = useState(false);


    const fetchMovies = async (page, searchTerm = "") => {
        try
        {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);
            setState(prev => ({
                ...movies, 
                results :
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        }
        catch(error)
        {
            setError(true);
        }
        setLoading(false);
    };

    //Initial and search render.
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    // load more effect
    useEffect(() => {
        fetchMovies(page, searchTerm);
    }, [page, searchTerm]);

    return {state, loading, error, setSearchTerm, setPage};
};