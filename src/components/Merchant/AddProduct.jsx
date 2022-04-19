import React, { useEffect, useState } from "react";
import {
  AddProductDiv,
  AddProductHead,
  CategoryDiv,
  ColumnDiv1,
  ColumnDiv2,
  Container,
  Description,
  DescriptionDiv,
  FileInput,
  FileInputDiv,
  ImageDiv,
  ImagePreview,
  ImagePreviewDiv,
  Instruction,
  MyOption,
  NameInput,
  Overview,
  OverviewDiv,
  Select,
  SubHeader,
  SubmitButton,
} from "../../Styles/Merchant/AddProduct";
import { bags, electronics, fashion, footwear, grocery, health, homeandfurniture, kitchen, sports, tvandappliances } from "../Products/sub-categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux";
import { useLocation, useNavigate } from "react-router-dom";
import defaultPic from "../../images/default.png";

const AddProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = [
    "Main Category",
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

  const gender = ["M", "F", "Unisex"];

  const [name, setName] = useState(location.state ? location.state.product.name : "");
  const [subcategories, setSubCategories] = useState([]);
  const [main, setMain] = useState(location.state ? location.state.product.category.main : "Main Category");
  const [sub, setSub] = useState(location.state ? location.state.product.category.sub : "Sub Category");
  const [mygender, setMyGender] = useState(location.state ? location.state.product.category.gender : "M");
  const [brand, setBrand] = useState(location.state ? location.state.product.brand : "");
  const [description, setDescription] = useState(location.state ? location.state.product.description : "");
  const [image, setImage] = useState(location.state ? location.state.product.image : "");
  const [pic, setPic] = useState(location.state ? location.state.product.image : "");
  const [price, setPrice] = useState(location.state ? location.state.product.price : "");
  const [quantity, setQuantity] = useState(location.state ? location.state.myQuantity : "");

  const onMainChange = (e) => {
    setMain(e.target.value);
  };

  const onSubChange = (e) => {
    setSub(e.target.value);
  };

  const onGenderChange = (e) => {
    // console.log(e.target.value);
    setMyGender(e.target.value);
  };

  const onBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const onPriceChange = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setPrice(e.target.value);
    }
  };

  const quantityChange = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setQuantity(e.target.value);
    }
  };

  const uploadImage = async () => {
    if(image === "") {
        return null
    }
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "bharatkart");
    data.append("cloud_name", "alpha2625");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/alpha2625/image/upload",
      data
    );
    setImage(res.data.secure_url);
  };

  const onAddProduct = (e)=> {
    e.preventDefault();
    dispatch(
        actionCreators.addProducts({
          name,
          main,
          sub,
          gender: mygender,
          brand,
          description,
          image,
          price,
          quantity,
        })
    );
    navigate("/merchant-dashboard", { replace: true });
  }

  useEffect(() => {
    // console.log("run");
    if (main === "Main Category") {
      const defaultSub = [{ sub: "Sub Categories" }];
      setSubCategories(defaultSub);
    } else if (main === "Fashion") {
      setSubCategories(fashion);
    } else if (main === "Electronics") {
      setSubCategories(electronics);
    } else if (main === "TV & Appliances") {
      setSubCategories(tvandappliances);
    } else if (main === "Sports") {
      setSubCategories(sports);
    } else if (main === "Grocery") {
      setSubCategories(grocery);
    } else if (main === "Health Products") {
      setSubCategories(health);
    } else if (main === "Home & Furniture") {
      setSubCategories(homeandfurniture);
    } else if (main === "Footwear") {
      setSubCategories(footwear);
    } else if (main === "Bags") {
      setSubCategories(bags);
    } else if (main === "Kitchen Appliances") {
      setSubCategories(kitchen);
    } else {
      setSubCategories([]);
    }
  }, [main]);

  return (
    <Container>
      <AddProductDiv>
        <AddProductHead>Add Product</AddProductHead>
        <OverviewDiv>
          <Overview>
            You can add a new product or increase the quantity of your existing
            products. This is one of the important features in the merchant
            point of view! When adding products, do not ignore to fill in all
            the required fields completely and follow the product adding rules.
          </Overview>
        </OverviewDiv>
        <SubHeader>Product Name</SubHeader>
        <NameInput
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Instruction>
          Do not exceed 25 characters while entering the product name.
        </Instruction>

        <CategoryDiv>
          <ColumnDiv1>
            <SubHeader>Main Category</SubHeader>
            <Select value={main} onChange={onMainChange}>
              {categories &&
                categories.map((category, index) => {
                  return (
                    <MyOption key={index} value={category}>
                      {category}
                    </MyOption>
                  );
                })}
            </Select>
          </ColumnDiv1>

          <ColumnDiv1>
            <SubHeader>Sub Category</SubHeader>
            <Select value={sub} onChange={onSubChange}>
              {subcategories &&
                subcategories.map((s, index) => {
                  return (
                    <MyOption key={index} value={s.sub}>
                      {s.sub}
                    </MyOption>
                  );
                })}
            </Select>
          </ColumnDiv1>

          <ColumnDiv1>
            <SubHeader>Gender</SubHeader>
            <Select value={mygender} onChange={onGenderChange}>
              {gender &&
                gender.map((g, index) => {
                  return (
                    <MyOption key={index} value={g}>
                      {g}
                    </MyOption>
                  );
                })}
            </Select>
          </ColumnDiv1>
        </CategoryDiv>

        <SubHeader>Brand</SubHeader>
        <NameInput
          type="text"
          placeholder="Enter Brand Name"
          value={brand}
          onChange={onBrandChange}
        />

        <DescriptionDiv>
          <ColumnDiv1>
            <SubHeader>Description</SubHeader>
            <Description
              typeof="text"
              placeholder="Enter Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={8}
            />
          </ColumnDiv1>

          <ImageDiv>
            <ColumnDiv2>
              <SubHeader>Product Image</SubHeader>
              <FileInputDiv>
                <label htmlFor="file-upload">
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                  />
                </label>
                <FileInput
                  type="file"
                  accept="image/jpeg, image/png, image/jpg, image/webp"
                  id="file-upload"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    setPic(URL.createObjectURL(e.target.files[0]));
                  }}
                />
              </FileInputDiv>
              <SubmitButton onClick={uploadImage}>Upload Image</SubmitButton>
            </ColumnDiv2>
          </ImageDiv>

          {pic !== "" ? (
            <ImagePreviewDiv style={{ position: "relative" }}>
              <FontAwesomeIcon
                icon={faTrash}
                color="white"
                style={{ position: "absolute", top: "22%", right: "5%", cursor: "pointer"}}
                onClick={() => {
                  setImage("");
                  setPic("");
                }}
              />
              <ImagePreview src={pic} alt="Product Preview" />
            </ImagePreviewDiv>
          ) : (
            <ImagePreviewDiv>
              <ImagePreview src={defaultPic} alt="Default Preview" />
            </ImagePreviewDiv>
          )}
        </DescriptionDiv>

        <SubHeader>Price</SubHeader>
        <NameInput
          type="text"
          placeholder="Enter Product Price"
          value={price}
          onChange={onPriceChange}
        />

        <SubHeader>Quantity</SubHeader>
        <NameInput
          type="text"
          placeholder="Enter Product Quantity"
          value={quantity}
          onChange={quantityChange}
        />

        <SubmitButton width="40%" onClick={onAddProduct}>Add Product</SubmitButton>
      </AddProductDiv>
    </Container>
  );
};

export default AddProduct;
