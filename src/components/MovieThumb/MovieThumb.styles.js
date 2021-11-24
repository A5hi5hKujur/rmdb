import styled from 'styled-components';

export const Wrapper = styled.div`
    background : white;
    min-height : 350px;
    padding : 10px;
    border-radius : 20px;
`;

export const Poster = styled.div`
    width : 100%;
    height : 250px;
    background-image : url(${props => (props.poster)});
    background-size : 100% 100%;
    border-radius : 10px;
`;

export const Content = styled.div`
    padding : 20px 0px 10px 0px;


        .rating
        {
            display : flex;
            align-items : center;
            padding : 2px 5px;
            border : 2px solid #ffcd1b;
            border-radius : 5px;
            background : #fffae8;
            width : 53px;
        }
        img{
            margin-right : 5px;
        }
        span{
            font-size : 14px;
            font-weight : bold;
        }
        p{
            color : #333;
            font-weight : bold;
            font-size : 1em;
        }
`;
