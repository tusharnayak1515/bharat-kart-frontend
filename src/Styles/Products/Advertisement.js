import styled from 'styled-components';

export const AdvertisementDiv = styled.div`
    height: 70vh;
    width: 100%;
    margin: auto;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: white;
`;

export const Slider = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    white-space: nowrap;
    transition: transform 1.5s;
    transform: ${props=> (props.transform ? props.transform : "0")};
`;

export const AdImageDiv = styled.div`
    height: 100%;
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;

export const AdImage = styled.img`
    height: 100%;
    min-width: 100%;
    margin: 0 100rem;
`;

export const LeftIconDiv = styled.div`
    position: absolute;
    top: 45%;
    left: 0;
    padding: 3rem 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    border: none;
    border-radius: 0.3rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    cursor: pointer;
    background-color: white;
`;

export const RightIconDiv = styled.div`
    position: absolute;
    top: 45%;
    right: 0;
    padding: 3rem 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    border: none;
    border-radius: 0.3rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    cursor: pointer;
    background-color: white;
`;