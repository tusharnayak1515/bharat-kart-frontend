import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators } from "../../redux";
import { NoOrders, OrderedItems, OrdersDiv, ItemImage, ProductDetails } from "../../Styles/User/Orders";
// import LoadingSpinner from "../../UI/LoadingSpinner";

const Orders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.userReducer.profile,shallowEqual);
  // const isLoading = useSelector(state => state.userReducer.isLoading,shallowEqual);

  const onProductClick = (id)=> {
    dispatch(actionCreators.getProductDetails(id));
    navigate(`/product/${id}`, { replace: true })
  }

  const orderedProducts = [...profile.orders].reverse();

  useEffect(() => {
    dispatch(actionCreators.userProfile());
    return ()=> {
      dispatch(actionCreators.resetError())
    }
  }, [profile.orders.length,dispatch]);

  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <OrdersDiv>
      {orderedProducts && orderedProducts.length === 0 ? (
        <NoOrders>You have no orders to display!</NoOrders>
      ) : (
        orderedProducts.map((order) => {
          return (
            <OrderedItems key={orderedProducts.indexOf(order)} onClick={()=> onProductClick(order._id)}>
              <ItemImage src={order.image} alt={order.name} />
              <ProductDetails>
                <h3>{order.name}</h3>
                <h3>Seller: {order.merchant.merchantName}</h3>
              </ProductDetails>
              <h3>₹{order.price}</h3>
            </OrderedItems>
          );
        })
      )}
    </OrdersDiv>
  );
};

export default Orders;
