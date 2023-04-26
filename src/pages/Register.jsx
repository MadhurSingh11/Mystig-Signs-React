import React from 'react'
import styled from 'styled-components'

const Container =  styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgb(0, 0, 0,0.5),rgba(0,0,0, 0.5)),
        url("https://i.ibb.co/D70SYCk/MS.jpg") center;
    background-repeat: no-repeat;
     background-size: cover;
    display:flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper =  styled.div`
    width:40%;
    padding:20px;
    background-color:white;
`;
const Form =  styled.form`
    display:flex;
    flex-wrap: wrap;
`;
const Title =  styled.h1`
    font-size: 60px;
    
`;
const Input =  styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
    font-size: 20px;
`;
const Agreement =  styled.span`
    font-size: 20px;
    padding:10px;
    margin:30px 0px;
`;
const Button =  styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    font-size: 25px;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Username"/>
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />

                <Agreement>
                    <p style={{fontColor:"white"}}>I agree to the Terms and Conditions according to <b>PRIVACY POLICY</b></p>
                </Agreement>
                <Button>Register</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register