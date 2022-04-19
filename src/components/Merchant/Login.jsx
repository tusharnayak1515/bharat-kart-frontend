import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators } from "../../redux";
import { Button } from "../../Styles/Button/Button";
import { LoginDiv, LoginFormDiv } from "../../Styles/Merchant/Login";
import {
    Alternative,
  Input,
  RegisterHead,
} from "../../Styles/Merchant/Register";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const merchant = useSelector(state=> state.merchantReducer.merchant);
  const isLoading = useSelector(state=> state.merchantReducer.isLoading);
  const [merchantDetails, setMerchantDetails] = useState({email: "",password: ""});

  const onValueChange = (e) => {
    setMerchantDetails({ ...merchantDetails, [e.target.name]: e.target.value });
  };

  const onLogin = () => {
    dispatch(actionCreators.merchantLogin(merchantDetails));
    setMerchantDetails({email: "", password: ""});
    if(!isLoading) {
      navigate("/merchant-dashboard", { replace: true });
    }
  };

  const onRegisterClick = ()=> {
    navigate('/merchant-register', { replace: true });
  }

  useEffect(()=> {
    if(merchant) {
      navigate('/merchant-dashboard', { replace: true });
    }
  },[merchant,navigate]);

  return (
    <LoginDiv>
      <LoginFormDiv>
        <RegisterHead>LOGIN</RegisterHead>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={merchantDetails.email}
          onChange={onValueChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={merchantDetails.password}
          onChange={onValueChange}
        />
        <Button
          bg="rgb(1,153,131)"
          color="white"
          border="0.2rem solid palegreen"
          br="0.3rem"
          padding="0.5rem 6.3rem"
          mt="0.5rem"
          onClick={onLogin}
        >
          LOGIN
        </Button>
        <Alternative onClick={onRegisterClick}>New to BharatKart? Register</Alternative>
      </LoginFormDiv>
    </LoginDiv>
  );
};

export default Login;
