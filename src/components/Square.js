import React from 'react'
import styled from 'styled-components'

function Square() {
  return (
    <Container>
      <Row>
        <Box style={{borderTopLeftRadius: "50px"}}><Logo src="../assets/white twi.png"/></Box>
        <Box><Logo src="../assets/whiteInsta.png"/></Box>
        <Box style={{border: "none", borderTopRightRadius: "50px"}}><Logo src="../assets/whiteYT.png"/></Box>
      </Row>
      <Row>
      <Box><Logo src ="../assets/whitetiktok.png"/></Box>
        <Box><Logo src="../assets/whiteOF.png"/></Box>
        <Box style={{border: "none"}}><Logo src="../assets/whiteTwitch.png"/></Box>
      </Row>
      <Row style={{border: "none"}}>
        <Box style={{borderBottomLeftRadius:"50px"}}><Logo src="../assets/whitePatreon.png"/></Box>
        <Box><Logo src="../assets/whiteSnap.png"/></Box>
        <Box style={{border: "none", color:"#FFFFFF", borderBottomRightRadius: "50px"}}><Logo />...</Box>
      </Row>
    </Container>
  )
}

export default Square

const Container = styled.div`
  width: 500px; 
  height: 500px;
  background: transparent;
  border: solid 3px #3B3395;
  position: absolute; 
  top: 30px;
  right: 50px;
  border-radius: 80px;
  display: flex; 
  flex-direction: column;
  padding: 30px;
  //margin-top: 300px;
`;

const Row = styled.div`
  width: 100%; 
  height: 33%; 
  background: transparent; 
  border-bottom: solid 1px #FFFFFF;
  display:flex; 
  flex-direction: row;
`;

const Box = styled.div`
  height: 100%; 
  width: 33%;
  border-right: solid 1px #FFFFFF;
  display: flex; 
  align-items: center;
  justify-content: center;
  background: #3B3395;
  cursor: pointer;
  &:hover {
    background: #212121;
  }
`;

const Logo = styled.img`
  background: transparent; 
  height: 60%; 
  width: auto;
`; 