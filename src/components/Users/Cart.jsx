import React, { Fragment, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  CartHeader,
  CartItems,
  Category,
  DeliverDiv,
  EmptyCart,
  GridDiv,
  ImageDiv,
  ItemImage,
  LeftDiv,
  PlaceOrderDiv,
  Price,
  PriceDiv,
  PriceFlexDiv1,
  PriceFlexDiv2,
  PriceHead,
  ProductDetails,
  ProductName,
  ProductPrice,
  ProductsPriceDiv,
  Quantity,
  QuantityInputDiv,
  Remove,
  RightDiv,
  SellerName,
  TotalPriceDiv,
  TotalPriceFlexDiv,
} from "../../Styles/Cart/Cart";
import { Button } from "../../Styles/Button/Button";
import { actionCreators } from "../../redux";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(state => state.userReducer.cart, shallowEqual);
  const profile = useSelector(state => state.userReducer.profile, shallowEqual);
  const isLoading = useSelector(state => state.userReducer.isLoading, shallowEqual);

  const addToCart = (id) => {
    dispatch(actionCreators.addToCart(1, id));
  };

  const reduceFromCart = (id) => {
    dispatch(actionCreators.removeFromCart(1, id));
  };

  const removeFromCart = (qty, id) => {
    dispatch(actionCreators.removeFromCart(qty, id));
  };

  const buyProduct = (cart) => {
    dispatch(actionCreators.buyProduct(cart));
    navigate("/", { replace: true });
  };

  let productQty = 0;
  let totalItems = 0;
  let totalCost = 0;
  let totalPrice = 0;

  useEffect(() => {
    dispatch(actionCreators.userProfile());
    return ()=> {
      dispatch(actionCreators.resetError())
    }
  }, [dispatch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <GridDiv>
      <LeftDiv>
        <CartHeader>
          <h2>My Cart ({cart.length})</h2>
          <DeliverDiv>
            <FontAwesomeIcon
              icon={faLocationDot}
              color="#2874f0"
              style={{ marginRight: "0.5rem" }}
            />
            <h3>
              Deliver to {profile.profile.location.address},
              {profile.profile.location.pincode}
            </h3>
          </DeliverDiv>
        </CartHeader>
        {cart && cart.length === 0 ? (
          <EmptyCart>Your cart is empty!</EmptyCart>
        ) : (
          cart.map((c) => {
            for (let i = 0; i < profile.profile.cart.length; i++) {
              if (profile.profile.cart[i].product === c._id) {
                productQty = profile.profile.cart[i].quantity;
                totalItems += productQty;
                totalCost += c.price * productQty;
              }
            }
            totalPrice = totalCost;
            return (
              <Fragment key={c._id}>
                <CartItems>
                  <ImageDiv>
                    <ItemImage src={c.image} />
                    <QuantityInputDiv>
                      <Button
                        bg="white"
                        color="black"
                        border="0.05rem solid grey"
                        br="100%"
                        padding="0.1rem 0.55rem"
                        onClick={() => reduceFromCart(c._id)}
                      >
                        -
                      </Button>
                      <Quantity>{productQty}</Quantity>
                      <Button
                        bg="white"
                        color="black"
                        border="0.05rem solid grey"
                        br="100%"
                        padding="0.1rem 0.5rem"
                        onClick={() => addToCart(c._id)}
                      >
                        +
                      </Button>
                    </QuantityInputDiv>
                  </ImageDiv>

                  <ProductDetails>
                    <ProductName>
                      {c.name}({productQty})
                    </ProductName>
                    <SellerName>Seller: {c.merchant.merchantName}</SellerName>
                    <ProductPrice>₹{c.price}</ProductPrice>
                    <Remove onClick={() => removeFromCart(productQty, c._id)}>
                      REMOVE
                    </Remove>
                  </ProductDetails>
                </CartItems>
              </Fragment>
            );
          })
        )}
        {cart && cart.length !== 0 && (
          <PlaceOrderDiv>
            <Button
              bg="#fb641b"
              color="white"
              padding="1rem 3rem"
              br="0.3rem"
              onClick={() => buyProduct(profile.profile.cart)}
            >
              <h5>PLACE ORDER</h5>
            </Button>
          </PlaceOrderDiv>
        )}
      </LeftDiv>

      <RightDiv>
        <PriceDiv>
          <PriceHead>PRICE DETAILS</PriceHead>
        </PriceDiv>
        <ProductsPriceDiv>
          <PriceFlexDiv1>
            <Category>
              Price ({cart.length} {cart.length === 1 ? "item" : "items"})
            </Category>
            <Price>₹{totalPrice}</Price>
          </PriceFlexDiv1>
          <PriceFlexDiv1>
            <Category>
              Discount
            </Category>
            <Price>₹0</Price>
          </PriceFlexDiv1>
          <PriceFlexDiv2>
            <Category>Delivery Charges</Category>
            <Price>₹{totalItems * 25}</Price>
          </PriceFlexDiv2>
        </ProductsPriceDiv>

        <TotalPriceDiv>
          <TotalPriceFlexDiv>
            <h3>Total Amount</h3>
            <h3>₹{totalCost + totalItems * 25}</h3>
          </TotalPriceFlexDiv>
        </TotalPriceDiv>
      </RightDiv>
    </GridDiv>
  );
};

export default Cart;
