import styled from "styled-components";

export const MenuDiv = styled.div`
    position: absolute;
    top: 10vh;
    transform: ${props=> (props.transform ? props.transform : "0")};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 12rem;
    box-shadow: 0.2rem 0.2rem 1rem 0.05rem rgb(172, 172, 172);
    background-color: white;
`;