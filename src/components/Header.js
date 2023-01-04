import React from 'react'
import styled from "styled-components"

function Header() {
  return (
    <Container>
      <Title>ROK</Title>
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: fixed; 
  z-index: 2;
  height: 0; 
  width: 100vw; 
  height: 80px; 
  background: #DCCFAC;
  z-index; 2;
  padding-left: 30px; 
  padding-right: 30px; 
  display: flex; 
  flex-direction: row; 
  align-items: center;
`;

const Title = styled.text`
  background: transparent; 
  font-family: abril fatface; 
  font-size: 30px; 
  color: #525151;
`; 