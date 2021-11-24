import React from 'react';
import {Wrapper, Poster, Content} from './MovieThumb.styles';
import STAR_ICON from '../../images/star.png';
import {POSTER_SIZE, IMAGE_BASE_URL} from '../../config';

const MovieThumb = (props) => {
    return(
        <Wrapper id={props.id}>
            <Poster poster = {`${IMAGE_BASE_URL}${POSTER_SIZE}${props.poster_path}`}></Poster>
            <Content>
                <div className="rating">
                    <img src={STAR_ICON} alt="star" height="13px" width="13px"/>
                    <span>{props.vote_average}</span>
                </div>
                <p>{props.title}</p>
            </Content>
        </Wrapper>
    );
};

export default MovieThumb;