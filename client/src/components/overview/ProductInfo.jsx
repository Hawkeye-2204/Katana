import { useState, useEffect, useContext } from 'react';
import { Context } from '../util/context.js';
import styled from 'styled-components';

const Yaba = styled.div`
  color: blue;
`;

const ProductInfo = (props) => {
  const id = useContext(Context).id;
  console.log(props.product)
  return(
    <div>
      <div>{props.product.category}</div>
      <div></div>
    </div>
  )
}

export default ProductInfo;