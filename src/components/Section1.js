import React from 'react'
import styled from 'styled-components'
import Board from './Board';

function Section1() {
  return (
    <Container>
      <Title>Buy, Sell, & Trade <br /> the tokens of your fav content creators</Title>
      <Menu>
        <LiveMenu>
          <Text>App</Text>
        </LiveMenu>
        <Link href='https://twitter.com/ADNL__'>
        <UpdateMenu>
          <Text>Daily updates</Text>
        </UpdateMenu>
        </Link>
      </Menu>
      <Board />
    </Container>
  )
}

export default Section1

const Container = styled.div`
  width: 100%; 
  height: auto;
  display: flex; 
  flex-direction: column; 
  align-items: center;
  text-align: center;
  padding-top: 300px;
`; 

const Link = styled.a`
  background: transparent;
  text-decoration: none;
  color: none;
  width: auto;
  width: 65%;
`; 

const Title = styled.text`
  font-family: abril fatface; 
  background: transparent; 
  font-size: 50px;
  color: #827136;
`; 

const Menu = styled.div`
  height: 80px; 
  width: 400px; 
  background: blue;
  margin-top: 50px;
  display: flex;
  background: transparent;
`; 

const LiveMenu = styled.div`
  height: 60px; 
  width: 35%; 
  background: red;
  border-radius: 100px;
  background: #3B3395;
  display:flex; 
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  cursor: pointer;
`;

const UpdateMenu = styled(LiveMenu)`
  width: 100%; 
  background: transparent;
  margin-left: 30px;
  border: solid 2px #3B3395;
  color: #3B3395;
  &:hover {
    color: #FFFFFF; 
    background: #3B3395;
  }
`;

const Text = styled.text`
  font-family: "Roboto Mono"; 
  background: transparent;
  font-size: 20px; 
  font-weight: 300;
`; 