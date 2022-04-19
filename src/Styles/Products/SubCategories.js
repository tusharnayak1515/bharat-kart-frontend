import styled from 'styled-components';

export const SubCategoryDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    padding: 1rem;
    border-bottom: 0.1rem solid rgb(239, 239, 239);
    background-color: white;
`;

export const FlexContainer = styled.div`
    margin-bottom: 0.5rem;
    padding: 0.3rem;
    height: 10rem;
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 3rem;
    /* background-color: greenyellow; */
`;

export const SubImage = styled.img`
    height: 85%;
    width: 85%;
    border: none;
    border-radius: 50%;
    cursor: pointer;
`;

export const SubCategory = styled.h3`
    font-weight: normal;
    cursor: pointer;
`;