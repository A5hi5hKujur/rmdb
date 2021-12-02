import React from "react";
import {Banner} from "./MovieHeader.styles";


const MovieHeader = ({title, overview, banner, genres, vote_average, poster}) => {
    const rating = parseInt(vote_average * 0.5);
    let stars = [];
    for(let i = 0; i<rating; i++)
        stars.push(<li key={i}></li>);
    return(
        <Banner 
            banner = {banner}
            poster = {poster}
        >
            <div className="container">
                <div className="poster"></div>
                <div className="content">
                    <h1>{title}</h1>
                    <div className="rating-genre-container">
                        <ul className="genre">
                        {
                            genres.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                            ))
                        }
                        </ul>
                        <ul className="rating">
                        {stars}
                        </ul>
                    </div>
                    <p>{overview}</p>
                </div>

            </div>
        </Banner>
    )
};

export default MovieHeader;
