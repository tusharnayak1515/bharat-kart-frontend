import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators } from "../../redux";
import LoadingSpinner from "../../UI/LoadingSpinner";
import CategoryBar from "../CategoryBar";
import NoProducts from "./NoProducts";
import Product from "./Product";
import SubCategories from "./SubCategories";
import { fashion } from "./sub-categories";
import { SubCategoryDiv } from "../../Styles/Products/SubCategories";

import styles from "./products.module.css";

const CategorizedProducts = () => {
  const params = useParams();
  let category = params.category;
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.productReducer.products,
    shallowEqual
  );
  const isLoading = useSelector(
    (state) => state.productReducer.isLoading,
    shallowEqual
  );

  const categorizedProducts = products.filter(
    (product) => product.category.main === category
  );

  useEffect(() => {
    dispatch(actionCreators.fetchAllProducts());
  }, [dispatch]);

  let subCategories = [];

  if (category === "Fashion") {
    subCategories = fashion;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <CategoryBar />
      <SubCategoryDiv>
        {subCategories.length > 0 &&
          subCategories.map((sub, index) => {
            return <SubCategories category={category} key={index} sub={sub} />;
          })}
      </SubCategoryDiv>
      {categorizedProducts.length === 0 ? (
        <NoProducts />
      ) : (
        <div className={styles.productContainer}>
          {categorizedProducts &&
            categorizedProducts.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
        </div>
      )}
    </>
  );
};

export default CategorizedProducts;
