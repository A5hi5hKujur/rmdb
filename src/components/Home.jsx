import React, {useState, useEffect, useRef} from 'react';

// config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

// Components
import Banner from './Banner';
import Grid from './Grid';
// Hook
import {useHomeFetch} from '../hooks/useHomeFetch'; 
// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const {state, loading, error, setSearchTerm, setPage} = useHomeFetch();
    const [text, setText] = useState('');
    const initial = useRef(true);

    // Effect of searchbar text changing
    useEffect(() => {
        if(initial.current)
        {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(text);
        }, 500);

        return () => clearTimeout(timer);
    },[setSearchTerm, text]);

    console.log(state);
    return (
        <>
            {
                // load banner data.
                (state.results.length)?
                <Banner 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}    
                    title={state.results[0].original_title}
                    text={state.results[0].overview} 
                />
                : null
            }   
            <div className="searchbar">
                <div className="container">
                    <input 
                        type="text"
                        placeholder="Type Movie Name" 
                        value={text}
                        onChange={e => setText(e.currentTarget.value)}
                    />
                </div>
            </div>
            <Grid movies={state.results}></Grid>
            {!loading && state.page < state.total_pages &&
                <div className='load-btn'>
                    <button onClick={e => setPage(state.page + 1)}>Load More</button>
                </div>}
        </>
    ); 
};

export default Home;