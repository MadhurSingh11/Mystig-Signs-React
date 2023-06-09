import React from 'react';
import styled from "styled-components";
import { popularProducts } from '../data';
import Product from "./Product";
const Container= styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;
background-color:#c0fefe;
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products
