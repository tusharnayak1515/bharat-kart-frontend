import React from 'react';
import reactDom from "react-dom";
import { BackDrop, LeftDiv, LeftDivContent, LeftDivHeader, LeftDivImage, Modal, RightDiv } from '../../Styles/User/Register';
import bannerImage from '../../images/banner2.png';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const Register = ({isLogin,isRegister,setIsLogin,setIsRegister}) => {
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
          <LeftDiv>
            <LeftDivHeader>Looks like you're new here!</LeftDivHeader>
            <LeftDivContent>Sign up with your email <br/>and mobile number to get started!</LeftDivContent>
            <LeftDivImage src={bannerImage} />
          </LeftDiv>
          <RightDiv>
            <Form isLogin={isLogin} isRegister={isRegister} setIsLogin={setIsLogin} setIsRegister={setIsRegister} />
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

export default Register;