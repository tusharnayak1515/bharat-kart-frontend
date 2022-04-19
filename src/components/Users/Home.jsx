import React from 'react';
import CategoryBar from '../CategoryBar';
import Advertisement from '../Products/Advertisement';
import Header from '../Products/Header';
import Products from '../Products/Products';

const Home = () => {
  return (
    <>
      <CategoryBar />
      <Advertisement />
      <Header />
      <Products />
    </>
  )
}

export default Home