import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white : #fff;
        --lightGrey : #eee;
        --medGrey : #353535;
        --darkGrey : #1c1c1c;
        --fontSuperBig : 2.5rem;
        --fontBig : 1.5rem;
        --fontMed : 1.2rem;
        --fontSmall : 1rem;
    }


    *{
        box-sizing : border-box;
        font-family : 'Abel', sans-serif;
    }

    body{
        margin : 0;
        padding : 0;
        background : #f4f5ff;

        h1{
            font-size : 2rem;
            font-weight : 600;
            color : var(--white);
        }

        h3{
            font-size : 1.1rem;
            font-weight : 600;
        }

        p{
            font-size : 1rem;
            color : var(--white);
        }
    }

    .searchbar
    {
        width : 100%;
        padding 20px;
        background : #333;

            .container
            {
                max-width : var(--maxWidth);
                margin : 0px auto;
                display : flex;

                input
                {
                    height : 30px;
                    width : 85%;
                    padding : 0px 10px;
                }
                button 
                {
                    height : 30px;
                    width : 15%;
                }
            }
    }
`;