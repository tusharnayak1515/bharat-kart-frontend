import styled from 'styled-components';

export const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100%;
    background-color: black;
    opacity: 0.6;
`;

export const Modal = styled.div`
    position: absolute;
    top: 15vh;
    left: 28vw;
    width: 44%;
    height: 71.5vh;
    display: flex;
    border: none;
    border-radius: 0.3rem;
    background-color: white;
    z-index: 1000;
`;

export const LeftDiv = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.align ? props.align : "center")};
    background-color: #2874f0;
`;

export const LeftDivHeader = styled.h1`
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-left: 1.7rem;
    color: white;
    `;

export const LeftDivContent = styled.p`
    width: 80%;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    margin-left: ${props => (props.ml ? props.ml : "0")};
    color: rgb(235, 235, 235);
    `;

export const LeftDivImage = styled.img`
    margin-top: 8rem;
    margin-left: ${props => (props.ml ? props.ml : "0")};
    height: 30%;
    width: 80%;
`;

export const RightDiv = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`;