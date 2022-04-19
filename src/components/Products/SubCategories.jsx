import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FlexContainer, SubCategory, SubImage } from '../../Styles/Products/SubCategories';

const SubCategories = ({ category, sub }) => {
  const navigate = useNavigate();

  const onClickHandler = ()=> {
    navigate(`/products/${category}/${sub.sub}`);
  };

  return (
    <FlexContainer onClick={onClickHandler}>
      <SubImage src={sub.image} />
      <SubCategory>{sub.sub}</SubCategory>
    </FlexContainer>
  )
}

export default SubCategories