import React from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { actionCreators } from "../../redux";

import styles from './product.module.css';

const Product = ({ product }) => {

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const onProductClick = ()=> {
    // dispatch(actionCreators.getProductDetails(product._id));
    // navigate(`/product/${product._id}`, { replace: true });
  // }

  return (
    <Link to={`/product/${product._id}`} style={{margin: "5vh", color: "black"}}>
      <div className={styles.product}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <h3>Rs. {product.price}</h3>
      </div>
    </Link>
  );
};

export default Product;
