import React from "react";
import { Link } from "react-router-dom";
import { Category, CategoryDiv } from "../Styles/CategoryBar/Category";

const categories = [
  "Fashion",
  "Electronics",
  "TV & Appliances",
  "Sports",
  "Grocery",
  "Health Products",
  "Home & Furniture",
  "Footwear",
  "Bags",
  "Kitchen Appliances",
];

const CategoryBar = () => {
  return (
    <CategoryDiv>
      {categories.map((c, index) => {
        return (
          <Link to={`/products/category/${c}`} key={index}>
            <Category>{c}</Category>
          </Link>
        );
      })}
      {/* <Link to="/products/category/T-Shirts">
        <Category>T-Shirts</Category>
      </Link>
      <Link to="/products/category/Casual Shirts">
        <Category>Casual Shirts</Category>
      </Link>
      <Link to="/products/category/Formal Shirts">
        <Category>Formal Shirts</Category>
      </Link>
      <Link to="/products/category/Denim Jeans">
        <Category>Denim Jeans</Category>
      </Link>
      <Link to="/products/category/Formal Trousers">
        <Category>Formal Trousers</Category>
      </Link>
      <Link to="/products/category/Inner Wears">
        <Category>Inner Wears</Category>
      </Link> */}
    </CategoryDiv>
  );
};

export default CategoryBar;
