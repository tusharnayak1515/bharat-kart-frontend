import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DashboardContainer,
  DashboardDiv,
  Details,
  Header,
  MerchantHead,
  MyProductsHead,
  MyProductsHeadDiv,
  Stats,
} from "../../Styles/Merchant/Dashboard";
import MyProducts from "./MyProducts";
// import LoadingSpinner from "../../UI/LoadingSpinner";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const merchant = useSelector(
    (state) => state.merchantReducer.merchant,
    shallowEqual
  );
  const { profile } = useSelector(state => state.merchantReducer,shallowEqual);
  // const isLoading = useSelector(
  //   (state) => state.merchantReducer.isLoading,
  //   shallowEqual
  // );
  const [show, setShow] = useState(false);

  const outOfStockProducts = profile.profile.products && profile.profile.products.filter((product) => product.quantity === 0);

  let iconStyles = {
    fontSize: "2rem",
    cursor: "pointer"
  }

  const onAdd = () => {
    navigate('/add-product', { replace: true });
};

  useEffect(() => {
    if(!merchant) {
      navigate('/', { replace: true });
    }
    dispatch(actionCreators.merchantProfile());
  }, [dispatch,merchant,navigate]);

  // if(isLoading) {
  //   return <LoadingSpinner />
  // }

  return (
    <DashboardDiv>
      <MerchantHead>
        Welcome to your Dashboard {profile.profile.name}!
      </MerchantHead>
      <DashboardContainer>
        <Details>
          <Header>Sales</Header>
          <Stats>{profile.soldproducts.length}</Stats>
        </Details>

        <Details>
          <Header>Earned Money</Header>
          <Stats>{profile.profile.earnedmoney}</Stats>
        </Details>

        <Details>
          <Header>Products in stock</Header>
          <Stats>{profile.profile.products.length}</Stats>
        </Details>

        <Details>
          <Header>Products out of stock</Header>
          <Stats>{outOfStockProducts.length}</Stats>
        </Details>
      </DashboardContainer>
      <MyProductsHeadDiv>
        <MyProductsHead onClick={() => setShow((show) => !show)}>My Products</MyProductsHead>
        <FontAwesomeIcon icon={faPlus} style={iconStyles} onClick={onAdd} />
      </MyProductsHeadDiv>
      {show && <MyProducts />}
    </DashboardDiv>
  );
};

export default Dashboard;
