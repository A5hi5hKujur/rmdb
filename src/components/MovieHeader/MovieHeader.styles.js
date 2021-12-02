import styled from "styled-components";
import STAR_ICON from '../../images/star.png';
const Banner = styled.div`
    height : 70vh;
    width : 100%;
    background : linear-gradient(
        to bottom left, rgba(0,0,0,0)
        0%, rgba(0,0,0,0.8)
        10%
    ), url('${props => (props.banner)}'), var(--darkGrey);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    .container{
        max-width: var(--maxWidth);
        margin: 0 auto;
        display: flex;
        padding : 50px 0;

        .poster
        {
            width : 250px;
            height : 370px;
            margin : 0px 120px 0px 0px;
            border-radius: 10px;
            background-image: url('${props => (props.poster)}');
            background-position: center;
            background-size: 100% 100%;
        }
        p{
            max-width : 500px;
            font-size: 1.3rem;
            margin-top : 30px;
        }
        h1{
            font-size : 2.5rem;
            font-weight: 900;
        }

        .rating-genre-container{
            display : flex;
            flex-wrap: wrap;
            ul{
                display : flex;
                li{
                    list-style: none;
                }
            }

            .genre{
                color : white;
                max-width: 300px;
                margin-right : 10px;
                li{
                    padding : 5px 12px;
                    background: rgba(255,255,255,0.4);
                    border-radius: 50px;
                    margin : 0px 5px;
                    font-size : 12px;
                }

            }

            .rating
            {
                margin-left : 10px;
                align-items: center;
                li{
                    height : 15px;
                    width : 15px;
                    margin : 0px 3px;
                    background-image: url('${STAR_ICON}');
                    background-position: center;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                }
            }
        }
    }
`;

export {Banner};