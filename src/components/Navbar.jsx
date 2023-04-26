import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../Responsive"

const Container = styled.div`
    height: 230px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to right, #ff99ff 0%, #66ff99 100%);

    ` ;

    const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    `;
    
    const Language =styled.span`
    font-size: 14px;
    cursor: pointer;

    `;
   const SearchContainer = styled.div`
    border : 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding:5px;

    `;
    const Input = styled.input`
    border:none;
    color:black;

    `;
    const Center = styled.div`
    flex:none;
    text-align: center;
    align-items: inline;

    `;
    const Logoa = styled.h3`
        font-weight:bold;
        font-family: cursive;
        color:aqua;

    `;
     const Logob = styled.h3`
     font-weight:bold;
     font-family: cursive;
     color:deeppink;
 `;

    const Right = styled.div`
    flex:1; 
    display: flex;
    align-items: center;
    justify-content:flex-end;
    font-family: Rubik;

    `;

    const MenuItem = styled.div`
    font-size : 14px;
    cursor: pointer;
    margin-left: 25px;

    `;
    const Limage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;

    
    `

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color:"gray",fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Limage src="https://i.ibb.co/d0rg959/WORK-MS.png"/><span><Logoa style={{fontSize:27}}>MYSTIG</Logoa><Logob style={{fontSize:27}}>SIGNS</Logob></span></Center>
                <Right>
                    <MenuItem style={{fontSize:25}}>Register</MenuItem>
                    <MenuItem style={{fontSize:25}}>Sign In</MenuItem>
                    <MenuItem style={{Size:25}}><Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                        </Badge>
                        </MenuItem>
                </Right>
            </Wrapper>

        </Container>
    );
}

export default Navbar