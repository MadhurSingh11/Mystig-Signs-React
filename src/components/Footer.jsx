import React from 'react'
import styled from 'styled-components'
import { Instagram,WhatsApp,Room,Phone, MailOutline } from '@material-ui/icons'

const Container = styled.div`
    display:flex;
`
const Left = styled.div`
    flex:1;
`
const Logo = styled.h1`
 
`
const Desc = styled.h1`
        margin:20px 0px;
`
const SocialContainer = styled.h1`
    display:flex;
` 
const Limage = styled.img`
width: 200px;
height: 200px;
border-radius: 50%;
`
const SocialIcon= styled.h1`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`
const Center = styled.div`
    flex:1;
    padding:20px;
`;
const Title = styled.h3`
    margin-bottom:30px;
`;
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;

`;
const ListItem = styled.li`
width:50%;
margin-bottom:10%;
    
`;
const Right = styled.div`
    flex:1;
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;
const Payment = styled.img`
    width:30%;
    height:50%;
    align-items:center;

`;

const Footer = () => {
  return (
    <Container>
      <Left><Limage src="https://i.ibb.co/d0rg959/WORK-MS.png"/>
        <Logo>
        Mystig Signs
        </Logo>
      <Desc font-weight="200">Best Neon dealer From Barabanki,UP,India.<br/>
        Pan India Delivery. 12 month Guarenteed
        </Desc>
        <SocialContainer>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
 
                <SocialIcon color="42b883">
                    <WhatsApp/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>
                    <a href="#">Home</a>
                    </ListItem>
                    <ListItem>
                    <a href="#">Shop</a>
                    </ListItem>
                <ListItem>
                    <a href="https://www.instagram.com/mystig_signs/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </ListItem>
         
                <ListItem>
                    <a href="https://www.whatsapp.com/send?phone=+915248356838&text=Hello%20Mystig%20Signs%20%28%29" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                </ListItem>
            </List>
            
        </Center>
         <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room/>Awas Vikas Colony,Near SBI,Barabanki,225001
            </ContactItem>
            <ContactItem>
               <Phone/> +91 5248356838
            </ContactItem>
            <ContactItem>
               <MailOutline/> mystigsigns@gmail.com
            </ContactItem>
            
         </Right>
    </Container>
  )
};

export default Footer
