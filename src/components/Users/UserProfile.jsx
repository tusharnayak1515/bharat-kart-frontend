import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { actionCreators } from "../../redux";
import {
  LeftDiv,
  Name,
  DetailsDiv,
  Input,
  InputDiv,
  PIDiv,
  ProfileDiv,
  RightDiv,
} from "../../Styles/User/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Styles/Button/Button";
import LoadingSpinner from "../../UI/LoadingSpinner";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, profile } = useSelector((state) => state.userReducer,shallowEqual);
  const isLoading = useSelector(state => state.userReducer.isLoading,shallowEqual);
  const Fname = (profile && profile.profile.name.split(" ")[0]) ? profile.profile.name.split(" ")[0] : "";
  const Mname = (profile && profile.profile.name.split(" ")[1]) ? profile.profile.name.split(" ")[1] : "";
  const Lname = (profile && profile.profile.name.split(" ")[2]) ? profile.profile.name.split(" ")[2] : "";
  const [nameEdit, setNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [phoneEdit, setPhoneEdit] = useState(false);
  const [userDetails, setUserDetails] = useState({
    fname: Fname,
    mname: Mname,
    lname: Lname,
    email: profile ? profile.profile.email : "",
    phone: profile ? profile.profile.phone : "",
  });

  const valueChangeHandler = (e) => {
    e.preventDefault();
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const LinkStyles = {
    color: "black",
  };

  const onEditHandler = (e)=> {
      e.preventDefault();
      dispatch(actionCreators.editUser({
          name: `${userDetails.fname} ${userDetails.mname} ${userDetails.lname}`,
          email: userDetails.email,
          phone: userDetails.phone,
          pincode: profile.profile.location.pincode,
          address: profile.profile.location.address
      }));
      setNameEdit(false);
      setEmailEdit(false);
      setPhoneEdit(false);
  }

  const logoutHandler = () => {
    dispatch(actionCreators.userLogout());
  };

//   const onDeleteHandler = (e)=> {
//       e.preventDefault();
//       dispatch()
//   }

  useEffect(() => {
    if(!user) {
        navigate('/', { replace: true });
    }
    else {
        dispatch(actionCreators.userProfile());
    }
  }, [user, dispatch, navigate]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ProfileDiv>
      <LeftDiv>
        <DetailsDiv>
          <Name>
            Hello,
            <br />
            <b>{profile.profile.name}</b>
          </Name>
        </DetailsDiv>

        <DetailsDiv>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <FontAwesomeIcon
              icon={faBagShopping}
              color="#2874f0"
              fontSize="1.5rem"
              style={{ marginRight: "1rem" }}
            />
            <Link to="/orders" style={LinkStyles}>
              <h2>My Orders</h2>
            </Link>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faPowerOff}
              color="#2874f0"
              fontSize="1.5rem"
              style={{ marginRight: "1rem" }}
            />
            <Link to="/" style={LinkStyles} onClick={logoutHandler}>
              <h2>Logout</h2>
            </Link>
          </div>
        </DetailsDiv>
      </LeftDiv>
      <RightDiv>
        <PIDiv>
          <h2>Personal Information</h2>
          {!nameEdit ? (
            <h3
              style={{
                color: "#2874f0",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
              onClick={() => setNameEdit(true)}
            >
              Edit
            </h3>
          ) : (
            <h3
              style={{
                color: "#2874f0",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
              onClick={() => setNameEdit(false)}
            >
              Cancel
            </h3>
          )}
        </PIDiv>

        <InputDiv>
          <Input
            type="text"
            name="fname"
            value={userDetails.fname}
            onChange={valueChangeHandler}
            disabled={!nameEdit}
          />
          <Input
            type="text"
            name="mname"
            value={userDetails.mname}
            onChange={valueChangeHandler}
            disabled={!nameEdit}
          />
          <Input
            type="text"
            name="lname"
            value={userDetails.lname}
            onChange={valueChangeHandler}
            disabled={!nameEdit}
          />
          {nameEdit && <Button onClick={onEditHandler} bg="#2874f0" color="white" padding="0.6rem 2rem" br="0.3rem" fw="bold">SAVE</Button>}
        </InputDiv>

        <PIDiv>
          <h2>Email Address</h2>
          {!emailEdit ? (
            <h3
              style={{
                color: "#2874f0",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
              onClick={() => setEmailEdit(true)}
            >
              Edit
            </h3>
          ) : (
            <h3
              style={{
                color: "#2874f0",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
              onClick={() => setEmailEdit(false)}
            >
              Cancel
            </h3>
          )}
        </PIDiv>

        <InputDiv>
          <Input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={valueChangeHandler}
            disabled={!emailEdit}
          />
          {emailEdit && <Button onClick={onEditHandler} bg="#2874f0" color="white" padding="0.6rem 2rem" br="0.3rem" fw="bold">SAVE</Button>}
        </InputDiv>

        <PIDiv>
          <h2>Phone Number</h2>
          {!phoneEdit ? (
            <h3
              style={{
                color: "#2874f0",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
              onClick={() => setPhoneEdit(true)}
            >
              Edit
            </h3>
          ) : (
            <h3
              style={{
                color: "#2874f0",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
              onClick={() => setPhoneEdit(false)}
            >
              Cancel
            </h3>
          )}
        </PIDiv>

        <InputDiv>
          <Input
            type="text"
            name="phone"
            value={userDetails.phone}
            onChange={valueChangeHandler}
            disabled={!phoneEdit}
          />
          {phoneEdit && <Button onClick={onEditHandler} bg="#2874f0" color="white" padding="0.6rem 2rem" br="0.3rem" fw="bold">SAVE</Button>}
        </InputDiv>

        <PIDiv>
          <h2 style={{ color: "red", cursor: "pointer" }}>Delete Account</h2>
        </PIDiv>
      </RightDiv>
    </ProfileDiv>
  );
};

export default UserProfile;
