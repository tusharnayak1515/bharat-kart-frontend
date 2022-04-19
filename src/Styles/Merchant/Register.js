import styled from 'styled-components';

export const RegisterDiv = styled.div`
    min-height: 92vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: white; */
    background-color: rgb(1,153,131);
`;

export const RegisterFormDiv = styled.div`
    min-height: 50vh;
    width: 30%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0.005rem 0.005rem 0.2rem 0.2rem palegreen;
    /* background-color: rgb(1,153,131); */
    background-color: white;
`;

export const RegisterHead = styled.h1`
    margin: 0.3rem 0;
    font-family: 'Montserrat', sans-serif;
`;

export const Input = styled.input`
    outline: none;
    font-size: 1.2rem;
    margin: 0.5rem auto;
    padding: 0.3rem 1rem;
    border: 0.2rem solid palegreen;
    border-radius: 0.3rem;
`;

export const Alternative = styled.h2`
    font-weight: normal;
    color: red;
    margin-top: 1rem;
    cursor: pointer;
`; 