import React from 'react'
import styled from 'styled-components'

function Board() {
  return (
    <Container>
      <Image src="../assets/DavidStatue.png"/>
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
  @media(max-width: 504px) {
    width: 302px;
  }
`;

const Image = styled.img`
  height: 400px; 
  width: auto; 
  background: transparent;
  position: absolute; 
  bottom: -1px; 
  right: 0; 
  border-bottom-right-radius: 30px;
`; 