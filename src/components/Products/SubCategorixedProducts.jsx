import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators } from "../../redux";
import LoadingSpinner from "../../UI/LoadingSpinner";
import CategoryBar from "../CategoryBar";
import NoProducts from "./NoProducts";
import Product from "./Product";
import SubCategories from "./SubCategories";

import styles from "./products.module.css";
import { fashion } from "./sub-categories";
import { SubCategoryDiv } from "../../Styles/Products/SubCategories";

const SubCategorizedProducts = () => {
  const params = useParams();
  let category = params.category;
  let sub = params.subcategory;
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
    (product) => product.category.sub === sub
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
      {subCategories.length > 0 && (
        <SubCategoryDiv>
          {subCategories.map((sub, index) => {
            return <SubCategories category={category} key={index} sub={sub} />;
          })}
        </SubCategoryDiv>
      )}
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

export default SubCategorizedProducts;
