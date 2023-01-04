import React from 'react'
import styled from 'styled-components'
import Square from './Square';

function Section2() {
  return (
    <Container>
      <Wrapper>
      <Title>For all creators</Title>
      <Subtitle>Take the total control of your finances</Subtitle>
      <Wrap>Deploy your own token on ROK</Wrap>
      <Wrap>Keep up to 10% of the supply</Wrap>
      <Wrap>Let anyone trade it</Wrap>
      <Wrap>Earn fees on each transaction</Wrap>
      </Wrapper>
      <Square />
      <Cadre>
        <Image src="../assets/monalisa.png"/>
        <Glasses>ROK ROK</Glasses>
      </Cadre>
    </Container>
  )
}

export default Section2

const Container = styled.div`
  position: relative; 
  width: 100vw; 
  height: auto;
  margin-top: 150px;
  padding: 30px;
`;

const Cadre = styled.div`
  height: 300px;
  width: 250px;
  background: red;
  position: absolute; 
  right: 500px;
  margin-top: 100px;
  border-top-left-radius: 300px;
  border-top-right-radius: 300px;
  background: #3B3395;
  display: flex; 
  justify-content: center; 
  align-items: center;
`;

const Image = styled.img`
  background: transparent; 
  height: 100%; 
  width: auto;
  position: absolute;
  bottom: -6px;
`; 

const Title = styled.text`
  background: transparent; 
  font-family: abril fatface;
  font-size: 60px;
  color: #827136;
`; 

const Subtitle = styled.text`
  background: transparent; 
  font-family: abril fatface; 
  font-size: 30px; 
  margin-bottom: 10px;
  color: #525151;
  @media(max-width: 1144px) {
    font-size: 2vw;
  }
`; 

const Wrapper = styled.div`
  display: flex; 
  flex-direction : column;
  background: transparent;
`; 

const Wrap = styled.div`
  display: flex; 
  flex-direction: row;
  font-family: Roboto Mono; 
  font-weight: 400; 
  font-size: 22px;
  margin-top: 10px;
  color: #909090;
`; 

const Glasses = styled.text`
  font-family: poppins; 
  background: transparent; 
  position: absolute;
  top: 63px;
  margin-left: -10px;
  font-size: 12px;
  color: #FFFFFF;
`;