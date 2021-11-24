import styled from 'styled-components';

export const Wrapper = styled.div`
    width : 100%;
    height : 400px;
    background : linear-gradient(
        to bottom, rgba(0,0,0,0)
        30%, rgba(0,0,0,0.65)
        100%
    ), url('${props => (props.image)}'), var(--darkGrey);
    background-repeat : no-repeat;
    background-size : cover;
    display : flex;
    flex-flow : column-reverse;

    @media screen and (max-width : 500px)
    {
        height : 300px;
    }
`;
export const Content = styled.div`
    max-width : var(--maxWidth);
    margin : 20px auto;
    padding : 0px 30px;

    @media screen and (max-width : 1000px)
    {
        h1, p{
            max-width : 500px;
        }
    }
`;