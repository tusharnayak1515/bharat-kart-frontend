import React from 'react';
import { NoProduct, NoProductDiv } from '../../Styles/Products/NoProduct';
import noResult from '../../images/noResult3.gif';

const NoProducts = () => {
  return (
    <NoProductDiv>
        <NoProduct src={noResult} />
    </NoProductDiv>
  )
}

export default NoProducts