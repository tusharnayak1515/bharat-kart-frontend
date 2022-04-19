import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../redux";

import styles from "./myproduct.module.css";

const MyProduct = ({ product, myQuantity }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
//   const merchant = useSelector(state=> state.merchantReducer.profile,shallowEqual);

//   let myProductQuantity;

//   for(let i=0; i<merchant.profile.products.length; i++) {
//       if(merchant.profile.products[i].product === product._id) {
//           myProductQuantity = merchant.profile.products[i].quantity;
//       }
//   }

  const onDelete = () => {
    dispatch(actionCreators.deleteProduct(product._id));
  };

  const onAdd = () => {
      navigate('/add-product', {state: {product: product, myQuantity: myQuantity}});
  };

  return (
      <div className={styles.product}>
        <FontAwesomeIcon
          icon={faPlus}
          className={styles.edit}
          onClick={onAdd}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className={styles.delete}
          onClick={onDelete}
        />
        <img src={product.image} alt={product.name} />
        <h2>
          {product.name.length > 23
            ? `${product.name.substring(0, 23)}...`
            : product.name}
        </h2>
        <h3>Rs. {product.price}</h3>
      </div>
  );
};

export default MyProduct;
