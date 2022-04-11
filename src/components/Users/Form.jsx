import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux";
import { Button } from "../../Styles/Button/Button";
import { LoginDiv } from "../../Styles/Form/Login";
import { RegisterDiv } from "../../Styles/Form/Register";

const Form = ({ isLogin, isRegister, setIsLogin, setIsRegister }) => {
  const dispatch = useDispatch();
  const [rvalues, setRvalues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    pincode: "", 
    address: "",
  });

  const [lvalues, setLvalues] = useState({
    email: "",
    password: "",
  });

  const onRchangeHandler = (e) => {
    e.preventDefault();
    setRvalues({ ...rvalues, [e.target.name]: e.target.value });
  };

  const onLchangeHandler = (e) => {
    e.preventDefault();
    setLvalues({ ...lvalues, [e.target.name]: e.target.value });
  };

  const inputStyles = {
    width: "100%",
    marginTop: "1rem",
    fontSize: "1.2rem",
    outline: "none",
    border: "none",
    borderBottom: "0.005rem solid rgb(226, 226, 226)",
    padding: "0.5rem 0",
  };

  const onRegisterHandler = (e)=> {
    e.preventDefault();
    setIsRegister(false);
    setIsLogin(false);
    dispatch(actionCreators.userRegister(rvalues));
  }
  
  const onLoginHandler = (e)=> {
    e.preventDefault();
    setIsRegister(false);
    setIsLogin(false);
    dispatch(actionCreators.userLogin(lvalues));
  }

  return (
    <>
      {isRegister ? (
        <RegisterDiv>
          <input
            type="text"
            name="name"
            value={rvalues.name}
            onChange={onRchangeHandler}
            placeholder="Enter your name"
            style={inputStyles}
          />
          <input
            type="email"
            name="email"
            value={rvalues.email}
            onChange={onRchangeHandler}
            placeholder="Enter your email"
            style={inputStyles}
          />
          <input
            type="text"
            name="phone"
            value={rvalues.phone}
            onChange={onRchangeHandler}
            placeholder="Enter your phone number"
            style={inputStyles}
          />
          <input
            type="text"
            name="password"
            value={rvalues.password}
            onChange={onRchangeHandler}
            placeholder="Enter password"
            style={inputStyles}
          />
          <input
            type="text"
            name="pincode"
            value={rvalues.pincode}
            onChange={onRchangeHandler}
            placeholder="Enter your pincode"
            style={inputStyles}
          />
          <input
            type="text"
            name="address"
            value={rvalues.address}
            onChange={onRchangeHandler}
            placeholder="Enter your address"
            style={inputStyles}
          />
          <Button
            bg="#fb641b"
            color="white"
            width="100%"
            padding="1rem 2rem"
            mt="1rem"
            br="0.2rem"
            onClick={onRegisterHandler}
          >
            Register
          </Button>
          <Button
            bg="white"
            color="#2874f0"
            width="100%"
            padding="1rem 2rem"
            mt="1rem"
            br="0.2rem"
            bs="0.05rem 0.05rem 0.2rem 0.2rem rgb(226, 226, 226)"
            onClick={() => {
              setIsRegister(false);
              setIsLogin(true);
            }}
          >
            Existing User? Login
          </Button>
        </RegisterDiv>
      ) : isLogin && (
        <LoginDiv>
          <input
            type="email"
            name="email"
            value={lvalues.email}
            onChange={onLchangeHandler}
            placeholder="Enter your email"
            style={inputStyles}
          />
          <input
            type="text"
            name="password"
            value={lvalues.password}
            onChange={onLchangeHandler}
            placeholder="Enter password"
            style={inputStyles}
          />
          <Button
            bg="#fb641b"
            color="white"
            width="100%"
            padding="1rem 2rem"
            mt="1rem"
            br="0.2rem"
            onClick={onLoginHandler}
          >
            Login
          </Button>
          <Button
            bg="white"
            color="#2874f0"
            width="100%"
            padding="1rem 2rem"
            mt="1rem"
            br="0.2rem"
            bs="0.05rem 0.05rem 0.2rem 0.2rem rgb(226, 226, 226)"
            onClick={() => {
              setIsRegister(true);
              setIsLogin(false);
            }}
          >
            New to BharatKart? Register
          </Button>
        </LoginDiv>
      )}
    </>
  );
};

export default Form;
