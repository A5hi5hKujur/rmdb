import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width : var(--maxWidth);
    margin: 0px auto;
    padding : 20px;
    display : grid;
    grid-template-columns : repeat(auto-fill, minmax(200px, 1fr));
    grid-gap : 2rem;
`;