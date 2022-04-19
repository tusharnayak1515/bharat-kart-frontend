import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './components/Users/Home';
import UserProfile from './components/Users/UserProfile';
import ProductPage from './components/Products/ProductPage';
import Cart from './components/Users/Cart';
import Orders from './components/Users/Orders';
import CategorizedProducts from './components/Products/CategorizedProducts';
import SubCategorizedProducts from './components/Products/SubCategorixedProducts';
import Dashboard from './components/Merchant/Dashboard';
import Register from './components/Merchant/Register';
import Login from './components/Merchant/Login';
import AddProduct from './components/Merchant/AddProduct';

import './App.css';

function App() {
  const user = useSelector(state => state.userReducer.user, shallowEqual);
  const merchant = useSelector(state => state.merchantReducer.merchant, shallowEqual);
  const product = useSelector(state => state.productReducer.product, shallowEqual);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products/category/:category' element={<CategorizedProducts />} />
        <Route exact path='/products/:category/:subcategory' element={<SubCategorizedProducts />} />
        {user && <Route exact path='/user-profile' element={<UserProfile />} />}
        {product && <Route exact path="/product/:id" element={<ProductPage />} />}
        {user && <Route exact path="/cart" element={<Cart />} />}
        {user && <Route exact path="/orders" element={<Orders />} />}
        <Route exact path='/merchant-register' element={<Register />} />
        <Route exact path='/merchant-login' element={<Login />} />
        {merchant && <Route exact path='/merchant-dashboard' element={<Dashboard />} />}
        {merchant && <Route exact path='/add-product' element={<AddProduct />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
