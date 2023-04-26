import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``

const Wrapper = styled.div`
padding:50px;
display:flex;`

const ImgContainer = styled.div`
  flex:1;
`

const Image = styled.img`
  width:100%;
  height:90vh;
  object-fit:cover;
`
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
`
const Title = styled.h1`
font-weight:800;
font-size:70px;


`
const Desc = styled.p`
margin:60px 0px;
font-weight:200;
font-size:25px;

`
const Price = styled.span`

font-weight:300;
font-size:50px;
margin:60px 0px;

`

const AddContainer = styled.div`
  display:flex;
  align-items:center;
  width:50%;
  margin:100px 0px;
  justify-content:space-between;
`;
const AmountContainer = styled.div`
  display:flex;
  align-items:center;
  font-weight: 700;
`;
const Amount = styled.span`
  width:30px;
  height: 30px;
  border-radius: 10px;
  border:1px solid teal;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0px 5px;
`;
const Button = styled.button`
  padding:15px;
  border:1px solid teal;
  background-color:white;
  cursor:pointer;
  font-weight:500;
  &:hover{
    background-color:#f8f4f4;
    transform:scale(1.2);
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
        <Image src="https://i.ibb.co/XjDHBHd/Whats-App-Image-2023-03-16-at-12-21-21-AM.jpg"/>
        </ImgContainer>
        <InfoContainer>
          <Title>
          Thunder Cloud Neon
          </Title>
          <Desc>
          Clouds of happiness does those things exist??? Get Yourself a thunder neon those Do exist.......<break/> &nbsp;
          Thunder Cloud neon can make your room much more cooler than your expectations
          </Desc>
          <Price>
            Rs.1250
          </Price>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
