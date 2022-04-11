import React from 'react';
import reactDom from "react-dom";
import { BackDrop, LeftDiv, LeftDivContent, LeftDivHeader, LeftDivImage, Modal, RightDiv } from '../../Styles/User/Register';
import bannerImage from '../../images/banner2.png';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const Login = ({isRegister,isLogin,setIsLogin,setIsRegister}) => {
  const iconStyles = {
    position: "absolute",
    top: "15vh",
    left: "72.5vw",
    color: "white",
    fontSize: "2.5rem",
    cursor: "pointer"
  }

  return reactDom.createPortal(
    <>
        <BackDrop />
        <Modal>
          <LeftDiv align="baseline">
            <LeftDivHeader>Login</LeftDivHeader>
            <LeftDivContent ml="1.7rem">Get access to your Orders, Wishlist and Recommendations</LeftDivContent>
            <LeftDivImage ml="1.3rem" src={bannerImage} />
          </LeftDiv>
          <RightDiv>
          <Form isRegister={isRegister} isLogin={isLogin} setIsLogin={setIsLogin} setIsRegister={setIsRegister} />
          </RightDiv>
        </Modal>
        <FontAwesomeIcon 
          icon={faXmark} 
          style={iconStyles} 
          onClick={()=> {
            setIsLogin(false);
            setIsRegister(false);
          }} />
    </>,
    document.getElementById("modal")
  );
};

export default Login