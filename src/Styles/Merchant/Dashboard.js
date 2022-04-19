import styled from 'styled-components';

export const DashboardDiv = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    /* background-color: rgb(1,153,131); */
    background-color: white;
`;

export const DashboardContainer = styled.div`
    min-height: 25vh;
    width: 100%;
    margin-top: 2rem;
    padding: 2rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* background-color: white; */
    /* background-color: #2874f0; */
    /* background-color: orange; */
`;

export const MerchantHead = styled.h1`
    margin-top: 3rem;
    font-family: 'Montserrat', sans-serif;
`;

export const Details = styled.div`
    margin: 0 1rem;
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 0.5rem;
    background-color: #2874f0;
`;

export const Header = styled.h1`
    color: white;
    margin-bottom: 0.7rem;
`;

export const Stats = styled.h2`
    font-weight: normal;
    color: white;
`;

export const MyProductsHeadDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MyProductsHead = styled.h1`
    margin: 1rem 0;
    margin-right: 0.5rem;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
`;