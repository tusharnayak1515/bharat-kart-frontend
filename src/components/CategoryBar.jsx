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
    </CategoryDiv>
  );
};

export default CategoryBar;
