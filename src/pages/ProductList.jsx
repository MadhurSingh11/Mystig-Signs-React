import React from 'react'
import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
const Container = styled.div`

`
const Title = styled.h1`
margin:20px;
  
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;

`
const Filter = styled.div`
margin:20px;
  
`
const FilterText = styled.span`
  font-size:20px;
  font-weight:600;
`
const Select = styled.select`


`
const Option = styled.option`



`
const ProductList = () => {
  return (
    <Container>
      <Navbar/>
        <Announcement/>
        <Title style={{fontSize:45}}>Neon Signs</Title>
          <FilterContainer>
            <Filter>
              <FilterText style={{fontSize:30}}>Filter Products:</FilterText>
              <Select style={{fontSize:30}}>
                <option disabled selected>All</option>
                <Option>Cloud</Option>
                <Option>Bar</Option>
                <Option>Vibe</Option>
                <Option>Religious</Option>
              </Select>
            </Filter>
            <Filter>
            <FilterText style={{fontSize:30}}>Sort Products:</FilterText>
            <Select style={{fontSize:30}}>
                <option disabled selected>New</option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
                </Select>
            </Filter>
           </FilterContainer>
           <Products/>
           <Newsletter/>
           <Footer/>
    </Container>
  )
}

export default ProductList
