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
    width:25%;
    padding:20px;
    background-color:white;
`;
const Form =  styled.form`
    display:flex;
    flex-direction: column;
`;
const Title =  styled.h1`
    font-size: 60px;
    
`;
const Input =  styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px;
    padding:10px;
    font-size: 25px;
`;

const Button =  styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    font-size: 25px;
    margin-bottom: 10px;
`;

const Link = styled.a`
    margin:5px 0px;
    text-decoration:underline;
    cursor:pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Button>LOGIN</Button>
                <Link>DO NOT REMEMBER PASSWORD?</Link>
                <Link>CREATE NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
