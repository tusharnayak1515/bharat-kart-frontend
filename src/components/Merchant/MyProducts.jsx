import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../redux';
import { MyProductsDiv } from '../../Styles/Merchant/MyProducts';
import MyProduct from './MyProduct';
import LoadingSpinner from "../../UI/LoadingSpinner";

const MyProducts = () => {
  const dispatch = useDispatch();
  const merchant = useSelector(state=> state.merchantReducer.profile,shallowEqual);
  const isLoading = useSelector((state) => state.productReducer.isLoading,shallowEqual);
  const products = useSelector(state=> state.productReducer.products,shallowEqual);
  const myProducts = products && products.filter((p)=> p.merchant.merchantId === merchant.profile._id);

  useEffect(()=> {
      // console.log("isLoading");
      dispatch(actionCreators.fetchAllProducts());
  },[dispatch,merchant.profile.products.length]);

  if(isLoading) {
    return <LoadingSpinner />
  }

  return (
    <MyProductsDiv>
        {myProducts && myProducts.map((product)=> {
            let myQuantity;
            for(let i=0; i<merchant.profile.products.length; i++) {
              if(merchant.profile.products[i].product === product._id) {
                myQuantity = merchant.profile.products[i].quantity;
              }
            } 
            return <MyProduct key={product._id} product={product} myQuantity={myQuantity} />
        })}
    </MyProductsDiv>
  )
}

export default MyProducts;