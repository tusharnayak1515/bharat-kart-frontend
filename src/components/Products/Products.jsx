import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../redux';
import LoadingSpinner from '../../UI/LoadingSpinner';
import Product from './Product';

import styles from './products.module.css';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state=> state.productReducer.products,shallowEqual);
  const isLoading = useSelector(state => state.productReducer.isLoading,shallowEqual);

  useEffect(()=> {
      dispatch(actionCreators.fetchAllProducts());
  },[dispatch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.productContainer}>
        {products && products.map((product)=> {
            return (<Product key={product._id} product={product} />)
        })}
    </div>
  )
}

export default Products;