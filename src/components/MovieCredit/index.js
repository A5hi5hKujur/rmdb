import React from 'react';
import { useEffect, useState } from 'react';
import CastList from './MovieCredit.styles';
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../../config';

const MovieCredit = ({cast}) => {
    let main_cast = cast.filter(actor => (actor.order < 4));
    console.log(main_cast);
    const [showAll, setShowAll] = useState(false);
    return (
        <CastList>
            <div className="container">
            {
                showAll ? 
                cast.map(actor => (
                    <div className="card" key={actor.cast_id}>
                        <img src={`${IMAGE_BASE_URL}w500${actor.profile_path}`} alt="profile" height="60px" width="60px"/>
                        <div className="name">
                            <h3>{actor.name}</h3>
                            <p>As {actor.character}</p>
                        </div>
                    </div>
                ))
                :
                main_cast.map(actor => (
                    <div className="card" key={actor.cast_id}>
                        <img src={`${IMAGE_BASE_URL}w500${actor.profile_path}`} alt="profile" height="60px" width="60px"/>
                        <div className="name">
                            <h3>{actor.name}</h3>
                            <p>As {actor.character}</p>
                        </div>
                    </div>
                ))
            }
            </div>
            <button onClick={e => setShowAll(!showAll)}>{showAll ? "Show Less" : "Show All"}</button>
        </CastList>
    ); 
};

export default MovieCredit;