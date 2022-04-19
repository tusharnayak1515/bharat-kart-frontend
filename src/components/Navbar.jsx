import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LinksContainer, Linksli } from "../Styles/Navbar/Links";
import { Logo, LogoHead } from "../Styles/Navbar/Logo";
import { NavbarContainer } from "../Styles/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { MenuDiv } from "../Styles/Navbar/Menu";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Button } from "../Styles/Button/Button";
import Register from "./Users/Register";
import Login from "./Users/Login";
import { actionCreators } from "../redux";

const linkStyle = {
  color: "white",
  fontSize: "1.3rem",
  padding: "0.2rem",
};

const menuLinkStyle = {
  color: "black",
  fontSize: "1.3rem",
  padding: "0.2rem",
  margin: "1rem auto",
  cursor: "pointer",
};

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, profile } = useSelector(
    (state) => state.userReducer,
    shallowEqual
  );
  const merchant = useSelector((state) => state.merchantReducer.merchant);
  const merchantProfile = useSelector((state) => state.merchantReducer.profile);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const isClickedHandler = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  const logoutHandler = () => {
    if (user) {
      dispatch(actionCreators.userLogout());
    }
    if (merchant) {
      dispatch(actionCreators.merchantLogout());
    }
  };

  const onMerchantClick = () => {
    navigate("/merchant-register", { replace: true });
  };

  const uptriangle = {
    position: "absolute",
    top: "4.3vh",
    right:
      !user && !isLoggedIn
        ? "36.7%"
        : !merchant && !isLoggedIn
        ? "36.7%"
        : user
        ? "34.5%"
        : merchant && "36%",
    width: "1rem",
    height: "2rem",
    borderLeft: "0.8rem solid transparent",
    borderRight: "0.8rem solid transparent",
    borderBottom: "1.2rem solid white",
    zIndex: 10,
    // backgroundColor: "yellow"
  };

  useEffect(() => {
    if (user || merchant) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    return () => {
      dispatch(actionCreators.resetError());
    };
  }, [user, merchant, dispatch]);

  return (
    <NavbarContainer>
      <Logo>
        <Link to="/">
          <LogoHead>BharatKart</LogoHead>
        </Link>
        <FontAwesomeIcon icon={faCartShopping} color="white" cursor="pointer" />
      </Logo>
      <div>
        <LinksContainer>
          {(user || merchant) && (
            <>
              <Linksli onMouseEnter={() => setIsClicked(true)}>
                <Link to="" style={linkStyle} onClick={isClickedHandler}>
                  {user
                    ? profile.profile.name.split(" ")[0]
                    : merchant
                    ? merchantProfile.profile.name.split(" ")[0]
                    : null}
                </Link>
                {!isClicked ? (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    color="white"
                    style={{ cursor: "pointer" }}
                    onClick={isClickedHandler}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    color="white"
                    style={{ cursor: "pointer" }}
                    onClick={isClickedHandler}
                  />
                )}
              </Linksli>
              {isClicked && (
                <>
                  <div style={uptriangle}></div>
                  <MenuDiv
                    transform={user ? `translateX(-25%)` : merchant && `translateX(-37%)`}
                    onMouseLeave={() => setIsClicked(false)}
                  >
                    <Link to="/user-profile" style={menuLinkStyle}>
                      My Profile
                    </Link>
                    {user && (
                      <Link to="/orders" style={menuLinkStyle}>
                        My Orders
                      </Link>
                    )}
                    <Link to="" style={menuLinkStyle} onClick={logoutHandler}>
                      Logout
                    </Link>
                  </MenuDiv>
                </>
              )}
              {user && (
                <Linksli>
                  <FontAwesomeIcon icon={faCartShopping} color="white" />
                  <Link to="/cart" style={linkStyle}>
                    Cart
                  </Link>
                </Linksli>
              )}
              {merchant && (
                <Linksli>
                  <Link to="/merchant-dashboard" style={linkStyle}>
                    Dashboard
                  </Link>
                </Linksli>
              )}
            </>
          )}
          {!user && !merchant && (
            <>
              <Button
                bg="white"
                color="#2874f0"
                mr="1rem"
                onMouseEnter={() => setShow(true)}
              >
                Login
              </Button>
              <Button
                bg="white"
                color="#2874f0"
                padding="0.25rem 1rem"
                onClick={onMerchantClick}
              >
                Sell with us
              </Button>
            </>
          )}
          {show && (
            <>
              <div style={uptriangle}></div>
              <MenuDiv
                transform="translateX(-39%)"
                onMouseLeave={() => setShow(false)}
              >
                <h3
                  style={menuLinkStyle}
                  onClick={() => {
                    setIsLogin(true);
                    setShow(false);
                  }}
                >
                  Login
                </h3>
                <h3
                  style={menuLinkStyle}
                  onClick={() => {
                    setIsRegister(true);
                    setShow(false);
                  }}
                >
                  Register
                </h3>
              </MenuDiv>
            </>
          )}
          {isLogin && (
            <Login
              isLogin={isLogin}
              isRegister={isRegister}
              setIsLogin={setIsLogin}
              setIsRegister={setIsRegister}
            />
          )}
          {isRegister && (
            <Register
              isLogin={isLogin}
              isRegister={isRegister}
              setIsLogin={setIsLogin}
              setIsRegister={setIsRegister}
            />
          )}
        </LinksContainer>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
