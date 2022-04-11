import styled from 'styled-components';

export const ProfileDiv = styled.div`
    min-height: 90vh;
    padding: 2rem;
    display: flex;
    justify-content: center;
    /* background-color: red; */
`;

export const LeftDiv = styled.div`
    width: 23%;
    display: flex;
    padding: 0 1rem;
    flex-direction: column;
    align-items: center;
    /* background-color: blueviolet; */
`;

export const DetailsDiv = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    border: none;
    border-radius: 0.2rem;
    background-color: white;
`;

export const Name = styled.h4`
    font-size: 1.3rem;
    font-weight: lighter;
`;

export const RightDiv = styled.div`
    height: 28rem;
    min-width: 65%;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: none;
    border-radius: 0.2rem;
    background-color: white;
`;

export const PIDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: yellow; */
`;

export const InputDiv = styled.div`
    margin: 1.7rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
`;

export const Input = styled.input`
    font-size: 1.25rem;
    margin-right: 1rem;
    padding: 0.5rem;
    border: 0.1rem solid rgb(226, 226, 226);
    border-radius: 0.3rem;
`;