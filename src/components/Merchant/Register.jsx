import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators } from "../../redux";
import { Button } from "../../Styles/Button/Button";
import {
    Alternative,
  Input,
  RegisterDiv,
  RegisterFormDiv,
  RegisterHead,
} from "../../Styles/Merchant/Register";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const merchant = useSelector(state=> state.merchantReducer.merchant);
  const isLoading = useSelector(state=> state.merchantReducer.isLoading);
  const [merchantDetails, setMerchantDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    aadhaar: "",
    pincode: "",
    address: "",
  });

  const onValueChange = (e) => {
    setMerchantDetails({ ...merchantDetails, [e.target.name]: e.target.value });
  };

  const onRegister = () => {
    dispatch(actionCreators.merchantRegister(merchantDetails));
    if(!isLoading) {
      navigate("/merchant-dashboard", { replace: true });
    }
  };

  const onLoginClick = ()=> {
      navigate('/merchant-login', { replace: true });
  }

  useEffect(()=> {
    if(merchant) {
      navigate('/merchant-dashboard', { replace: true });
    }
  },[merchant,navigate]);

  return (
    <RegisterDiv>
      <RegisterFormDiv>
        <RegisterHead>REGISTER</RegisterHead>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={merchantDetails.name}
          onChange={onValueChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={merchantDetails.email}
          onChange={onValueChange}
        />
        <Input
          type="text"
          name="phone"
          placeholder="Enter your phone"
          value={merchantDetails.phone}
          onChange={onValueChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={merchantDetails.password}
          onChange={onValueChange}
        />
        <Input
          type="text"
          name="aadhaar"
          placeholder="Enter your aadhaar"
          value={merchantDetails.aadhaar}
          onChange={onValueChange}
        />
        <Input
          type="text"
          name="pincode"
          placeholder="Enter your pincode"
          value={merchantDetails.pincode}
          onChange={onValueChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={merchantDetails.address}
          onChange={onValueChange}
        />
        <Button
          bg="rgb(1,153,131)"
          color="white"
          border="0.2rem solid palegreen"
          br="0.3rem"
          padding="0.5rem 5.2rem"
          mt="0.5rem"
          onClick={onRegister}
        >
          REGISTER
        </Button>
        <Alternative onClick={onLoginClick}>Existing Merchant? Login</Alternative>
      </RegisterFormDiv>
    </RegisterDiv>
  );
};

export default Register;
