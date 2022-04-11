import styled from "styled-components";

export const Button = styled.button.attrs()`
    width: ${props => (props.width ? props.width : "normal")};
    padding: ${props => (props.padding ? props.padding : " 0.25rem 2rem")};
    color: ${props => (props.color ? props.color : "black")};
    font-size: ${props => (props.fs ? props.fs : "1.25rem")};
    font-weight: ${props => (props.fw ? props.fw : "normal")};
    border: ${props => (props.border ? props.border : "none")};
    border-radius: ${props => (props.br ? props.br : "0.1rem")};
    background-color: ${props => (props.bg ? props.bg : "#2874f0")};
    width: ${props => (props.width ? props.width : "auto")};
    margin-top: ${props => (props.mt ? props.mt : "0")};
    margin-right: ${props => (props.mr ? props.mr : "0")};
    box-shadow: ${props => (props.bs ? props.bs : "none")};
    cursor: pointer;
`; 