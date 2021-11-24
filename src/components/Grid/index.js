import React from 'react';
import {Wrapper} from './Grid.styles';
import MovieThumb from '../MovieThumb';

const Grid = ({movies}) => {
    console.log("INSIDE GRID");
    return(
            <Wrapper className="grid">
            {
                movies.map(movie => (
                    <MovieThumb
                        key = {movie.id} 
                        clickable
                        poster_path = {movie.poster_path}
                        title = {movie.title}
                        vote_average = {movie.vote_average}
                        id = {movie.id}
                    />
                ))
            }
            </Wrapper>
    );
};

export default Grid;