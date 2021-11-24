import React from 'react';
import {Wrapper, Content} from './Banner.styles';

const Banner = ({image, title, text}) => {
    return (
        <Wrapper image={image} className="banner">
            <Content>
                <h1>{title}</h1>
                <p>{text}</p>
            </Content>
        </Wrapper>
    );
};

export default Banner;