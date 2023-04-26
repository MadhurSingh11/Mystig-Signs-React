import styled from "styled-components"
import React from "react"

const Container = styled.div`
    height: 30px;
    background-color:teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
    font-weight:500 ;

    `
const Announcement = () => {
  return (
    <Container style={{fontSize:15,}}>
      <marquee>   <p>   FREE SHIPPING ON ALL ORDERS!!!       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   12 Month Warrenty!!!</p></marquee>
    </Container>
  )
}

export default Announcement
