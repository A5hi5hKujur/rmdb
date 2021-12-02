import styled from 'styled-components'

const CastList = styled.div`
    width : 100%;
    background : #212121;
    min-height : 300px;
    position : absolute;
        .container{
            max-width: var(--maxWidth);
            margin : -50px auto 0px auto;
            display : grid;
            grid-template-columns : repeat(auto-fill, minmax(300px, 1fr));
            grid-gap : 1rem;

            .card{
                background : #404040;
                padding : 20px;
                border-radius: 10px;
                display : flex;
                align-items: center;
                img{
                    border-radius: 100%;
                }
                .name{
                    margin-left : 20px;

                    h3{
                        margin : 0px 0px;
                        color : white;
                        font-size: 1.5rem;
                    }
                    p{
                        margin : 0px;
                        color : #aaa;
                    }
                }
            }
        }

        button{
            height : 30px;
            width : var(--maxWidth);
            display: block;
            margin: 20px auto;
            border : none;
        }

`;

export default CastList;