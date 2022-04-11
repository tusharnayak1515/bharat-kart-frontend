import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './components/Users/Home';
import LoadingSpinner from './UI/LoadingSpinner';
import UserProfile from './components/Users/UserProfile';
import ProductPage from './components/Products/ProductPage';
import Cart from './components/Users/Cart';
import Orders from './components/Users/Orders';

import './App.css';

function App() {
  const user = useSelector(state => state.userReducer.user, shallowEqual);
  const product = useSelector(state => state.productReducer.product, shallowEqual);
  return (
    <div className="App">
      <Suspense fallback={<div><LoadingSpinner /></div>}><Navbar /></Suspense>
      <Routes>
        <Route exact path='/' element={<Home />} />
        {user && <Route exact path='/user-profile' element={<UserProfile />} />}
        {/* <Route path='/merchant-login' element={<Home />} /> */}
        {product && <Route exact path="/product/:id" element={<ProductPage />} />}
        {user && <Route exact path="/cart" element={<Cart />} />}
        {user && <Route exact path="/orders" element={<Orders />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
