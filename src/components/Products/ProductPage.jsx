import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faCartShopping,
  faStar,
  faCheckCircle,
  faEdit,
  faTrash,
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
  ErrorDiv,
  Error,
  FlexDiv,
  BrandName
} from "../../Styles/Products/ProductPage";
import LoadingSpinner from "../../UI/LoadingSpinner";
import StarRating from "../../UI/StarRating";

const ProductPage = () => {
  const [edit, setEdit] = useState({
    _id: null,
    ratings: "",
    comments: "",
    user: { username: "", userId: "" },
    product: "",
  });
  const [rate, setRate] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { product, isLoading, mymerchant, quantity } = useSelector(
    (state) => state.productReducer
  );
  const error = useSelector((state) => state.userReducer.error);
  const user = useSelector((state) => state.userReducer.user);
  const merchant = useSelector((state) => state.merchantReducer.merchant);
  const profile = useSelector((state) => state.userReducer.profile);
  // const cart = useSelector(state=> state.userReducer.cart);

  const addToCart = (id) => {
    dispatch(actionCreators.addToCart(1, id));
    navigate("/cart", { replace: true });
  };

  const submitReview = () => {
    dispatch(actionCreators.addReview(product.product._id, rating, review));
    setRating(0);
    setHover(0);
    setReview("");
    setRate(false);
  };

  const onEditClick = (id, rating, comment, username, userid, product) => {
    setRate(true);
    setEdit({
      _id: id,
      ratings: rating,
      comments: comment,
      user: { username: username, userId: userid },
      product: product,
    });
  };

  const editReview = (id) => {
    dispatch(actionCreators.editReview(id,edit.ratings,edit.comments));
    setRating(0);
    setHover(0);
    setReview("");
    setRate(false);
    setEdit(false);
  }

  const deleteReview = (id) => {
    dispatch(actionCreators.deleteReview(id));
    setRating(0);
    setHover(0);
    setReview("");
  }
  
  useEffect(() => {
    dispatch(actionCreators.getProductDetails(params.id));
    return () => {
      dispatch(actionCreators.resetError());
    };
  }, [params.id, dispatch]);

  let avgRating = 0;

  if(product.length > 0) {
    for (let i = 0; i < product.reviews.length; i++) {
      avgRating += product.reviews[i].ratings / product.reviews.length;
    }
  }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        product.product && (
          <ProductPageDiv>
            <LeftDiv>
              <ProductImage src={product.product && product.product.image} />
             {!merchant && <ButtonWrapper>
                <Button
                  bg="orange"
                  color="white"
                  fs="1.05rem"
                  mr="0.5rem"
                  padding="1rem 3rem"
                  br="0.2rem"
                  onClick={() => addToCart(product.product._id)}
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
                  onClick={() => addToCart(product.product._id)}
                >
                  <FontAwesomeIcon
                    icon={faBoltLightning}
                    color="white"
                    cursor="pointer"
                  />
                  BUY NOW
                </Button>
              </ButtonWrapper>}
            </LeftDiv>

            <RightDiv>
              <ProductName>{product.product.name}</ProductName>
              <FlexDiv>
                <h2>Brand: </h2>
                <BrandName>{product.product.brand}</BrandName>
              </FlexDiv>
              <ProductPrice>₹{product.product.price}</ProductPrice>
              <RatingsDiv>
                <Rating>{avgRating.toFixed(1)}</Rating>
                <FontAwesomeIcon icon={faStar} color="white" />
              </RatingsDiv>
              <ProductDetailsDiv>
                <h3>Product Description: </h3>
                <ProductDetails>{product.product.description}</ProductDetails>
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
                      {product.reviews.length} reviews
                    </NumberOfReviews>
                  </FirstDiv>
                  <Button
                    color="white"
                    padding="0.3rem 0.8rem"
                    br="0.2rem"
                    onClick={() => {
                      if (!user) {
                        return null;
                      }
                      setRate(true);
                    }}
                  >
                    Rate Product
                  </Button>
                </ProductReviewHeadingDiv>

                {rate && (
                  <RateDiv>
                    <StarRating
                      edit={edit}
                      isEdit={edit._id ? true : false}
                      rating={edit._id ? edit.ratings : rating}
                      hover={hover}
                      setRating={setRating}
                      setHover={setHover}
                      setEdit={setEdit}
                    />
                    <ReviewForm
                      type="text"
                      placeholder="Description"
                      value={edit._id ? edit.comments : review}
                      onChange={(e) => {
                        if (edit._id) {
                          setEdit({ ...edit, comments: e.target.value });
                        } else {
                          setReview(e.target.value);
                        }
                      }}
                    />
                    <Button
                      bg="#fb641b"
                      color="white"
                      width="10rem"
                      padding="1rem 2rem"
                      fw="bold"
                      br="0.2rem"
                      onClick={()=> {if(edit._id)  {
                        editReview(edit._id);
                      }
                      else {
                        submitReview();
                      }
                    }}
                    >
                      SUBMIT
                    </Button>
                  </RateDiv>
                )}

                {error && (
                  <ErrorDiv>
                    <Error>{error}</Error>
                  </ErrorDiv>
                )}

                {!rate && product.reviews && product.reviews.length === 0 ? (
                  <NoReviews>
                    No reviews! Be the first one to rate and review this product
                  </NoReviews>
                ) : (
                  !rate &&
                  product.reviews.map((r) => {
                    return (
                      <div key={r._id}>
                        <ReviewDiv>
                          <RatingsDiv>
                            <Rating>{r.ratings}</Rating>
                            <FontAwesomeIcon icon={faStar} color="white" />
                          </RatingsDiv>
                          <Comments>
                            {r.comments}
                            {r.user.userId === profile.profile._id && (
                              <FontAwesomeIcon
                                icon={faEdit}
                                onClick={() =>
                                  onEditClick(
                                    r._id,
                                    r.ratings,
                                    r.comments,
                                    r.user.username,
                                    r.user.userId,
                                    r.product
                                  )
                                }
                                style={{ margin: "0 1rem", cursor: "pointer" }}
                                color="grey"
                              />
                            )}
                            {r.user.userId === profile.profile._id && (
                              <FontAwesomeIcon
                                icon={faTrash}
                                style={{ cursor: "pointer" }}
                                color="grey"
                                onClick={()=> deleteReview(r._id)}
                              />
                            )}
                          </Comments>
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
