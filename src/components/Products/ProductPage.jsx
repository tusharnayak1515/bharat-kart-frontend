import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faCartShopping,
  faStar,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../redux";
import { Button } from "../../Styles/Button/Button";
import {
  ButtonWrapper,
  ProductImage,
  ProductPageDiv,
  LeftDiv,
  RightDiv,
  ProductName,
  ProductPrice,
  ProductDetails,
  ProductDetailsDiv,
  RatingsDiv,
  Rating,
  ProductQuantity,
  ProductReviewDiv,
  ProductReviewHeadingDiv,
  FirstDiv,
  NumberOfReviews,
  ReviewDiv,
  Comments,
  NoReviews,
  ReviewerDiv,
  Reviewer,
  RateDiv,
  ReviewForm,
} from "../../Styles/Products/ProductPage";
import LoadingSpinner from "../../UI/LoadingSpinner";
import StarRating from "../../UI/StarRating";

const ProductPage = () => {
  const [rate, setRate] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { product, isLoading, error, mymerchant, quantity } = useSelector(
    (state) => state.productReducer
  );
  // const cart = useSelector(state=> state.userReducer.cart);

  const addToCart = (id) => {
    dispatch(actionCreators.addToCart(1, id));
    navigate("/cart", { replace: true });
  };

  const submitReview = () => {
    dispatch(actionCreators.addReview(product._id, rating, review));
    setRating(0);
    setReview("");
  };

  // const buyProduct = (id)=> {
  //   console.log(cart);
  //   let isInCart = false;
  //   for(let i=0;i<cart.length;i++) {
  //     if(cart[i] === id) {
  //       isInCart = true;
  //     }
  //   }
  //   if(isInCart) {
  //     dispatch(actionCreators.buyProduct(1,id));
  //   }
  //   else {
  //     addToCart(id);
  //   }
  // }

  let avgRating = 0;
  for (let i = 0; i < product.review.length; i++) {
    avgRating += product.review[i].ratings / product.review.length;
  }

  useEffect(() => {
    dispatch(actionCreators.getProductDetails(params.id));
  }, [params.id, dispatch]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <p>{error}</p>
      ) : (
        product && (
          <ProductPageDiv>
            <LeftDiv>
              <ProductImage src={product && product.image} />
              <ButtonWrapper>
                <Button
                  bg="orange"
                  color="white"
                  fs="1.05rem"
                  mr="0.5rem"
                  padding="1rem 3rem"
                  br="0.2rem"
                  onClick={() => addToCart(product._id)}
                >
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    color="white"
                    cursor="pointer"
                  />
                  ADD TO CART
                </Button>
                <Button
                  bg="orangered"
                  color="white"
                  fs="1.05rem"
                  padding="1rem 3rem"
                  br="0.2rem"
                  onClick={() => addToCart(product._id)}
                >
                  <FontAwesomeIcon
                    icon={faBoltLightning}
                    color="white"
                    cursor="pointer"
                  />
                  BUY NOW
                </Button>
              </ButtonWrapper>
            </LeftDiv>

            <RightDiv>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>₹{product.price}</ProductPrice>
              <RatingsDiv>
                <Rating>{avgRating.toFixed(1)}</Rating>
                <FontAwesomeIcon icon={faStar} color="white" />
              </RatingsDiv>
              <ProductDetailsDiv>
                <h3>Product Description: </h3>
                <ProductDetails>{product.description}</ProductDetails>
              </ProductDetailsDiv>
              <h3>Sold By: {mymerchant}</h3>
              {quantity === 0 ? (
                <ProductQuantity>Product Out of Stock</ProductQuantity>
              ) : (
                <ProductQuantity>
                  Hurry Up! {quantity} pieces left.
                </ProductQuantity>
              )}
              <ProductReviewDiv>
                <ProductReviewHeadingDiv>
                  <FirstDiv>
                    <h1>Ratings and Reviews</h1>
                    <RatingsDiv>
                      <Rating>{avgRating.toFixed(1)}</Rating>
                      <FontAwesomeIcon icon={faStar} color="white" />
                    </RatingsDiv>
                    <NumberOfReviews>
                      {product.review.length} reviews
                    </NumberOfReviews>
                  </FirstDiv>
                  <Button
                    color="white"
                    padding="0.3rem 0.8rem"
                    br="0.2rem"
                    onClick={() => setRate(true)}
                  >
                    Rate Product
                  </Button>
                </ProductReviewHeadingDiv>

                {rate && (
                  <RateDiv>
                    <StarRating
                      rating={rating}
                      hover={hover}
                      setRating={setRating}
                      setHover={setHover}
                    />
                    <ReviewForm
                      type="text"
                      placeholder="Description"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                    />
                    <Button
                      bg="#fb641b"
                      color="white"
                      width="10rem"
                      padding="1rem 2rem"
                      fw="bold"
                      br="0.2rem"
                      onClick={submitReview}
                    >
                      SUBMIT
                    </Button>
                  </RateDiv>
                )}

                {!rate && product.review && product.review.length === 0 ? (
                  <NoReviews>
                    No reviews! Be the first one to rate and review this product
                  </NoReviews>
                ) : (
                  product.review.map((r) => {
                    return (
                      <div key={r._id}>
                        <ReviewDiv>
                          <RatingsDiv>
                            <Rating>{r.ratings}</Rating>
                            <FontAwesomeIcon icon={faStar} color="white" />
                          </RatingsDiv>
                          <Comments>{r.comments}</Comments>
                        </ReviewDiv>
                        <ReviewerDiv>
                          <FontAwesomeIcon icon={faCheckCircle} color="grey" />
                          <Reviewer>
                            Certified Buyer, {r.user.username}
                          </Reviewer>
                        </ReviewerDiv>
                      </div>
                    );
                  })
                )}
              </ProductReviewDiv>
            </RightDiv>
          </ProductPageDiv>
        )
      )}
    </>
  );
};

export default ProductPage;
