import React from 'react'
import styled from 'styled-components'

function Board() {
  return (
    <Container>
      <Title>ROK ROK ROK</Title>
      <Title>ROK ROK ROK</Title>
      <Title>ROK ROK ROK</Title>
      <Title>ROK ROK ROK</Title>
      <Title>ROK ROK ROK</Title>
      <Title>ROK ROK ROK</Title>
      <Title>ROK ROK ROK</Title>
      <Title>ROK ROK ROK</Title>
      <Image src="../assets/DavidStatue.png"/>
      <Glasses>ROK ROK</Glasses>
    </Container>
  )
}

export default Board

const Container = styled.div`
  width: 60%; 
  height: 500px;
  background: #3B3395;
  border-radius: 30px;
  margin-top: 140px;
  position: relative;
  display: flex; 
  flex-direction: column;
  overflow: hidden;
  @media(max-width: 504px) {
    width: 302px;
  }
`;

const Title = styled.text`
  background: transparent;
  font-family: abril fatface; 
  font-weight: 500; 
  font-size: 8vw;
  transform: rotate(-20deg);
  color: #FFFFFF;
`; 

const Image = styled.img`
  background: transparent; 
  height: 400px; 
  width: auto; 
  border-bottom-right-radius: 30px; 
  position: absolute; 
  bottom:-1px; 
  right: 0; 
`;

const Glasses = styled.text`
  font-family: poppins; 
  font-size: 30px; 
  background: transparent; 
  font-weight: 700; 
  position: absolute;
  color: #3B3395;
  right: 80px;
  bottom: 140px;
  transform: rotate(-25deg);
`; 