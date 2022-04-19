import styled from 'styled-components';

export const CategoryDiv = styled.div`
    min-height: 12vh;
    /* margin-bottom: 1rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-bottom: 0.1rem solid rgb(226, 226, 226);
    background-color: white;
`;

export const Category = styled.h4`
    font-weight: normal;
    margin-right: 1.5rem;
    font-family: 'Inconsolata', monospace;
    cursor: pointer;
`;