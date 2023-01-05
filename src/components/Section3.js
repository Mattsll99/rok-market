import React from 'react'
import styled from 'styled-components';

function Section3() {
  return (
    <Container>
      <Cadre>
          <Image src="../assets/fanStatue.png"/>
      </Cadre>
      <Wrapper>
        <Title>And their fans</Title>
        <Wrap>Be closer to your fav artists</Wrap>
        <Wrap>Invest in promising talents</Wrap>
        <Wrap>Support creators & make profit</Wrap>
      </Wrapper>
      <BottomWrap>
        <Containe>
          <Link href='https://twitter.com/ADNL__'>
        <Button>
          <Call>Daily updates</Call>
        </Button>
        </Link>
        </Containe>
      </BottomWrap>
    </Container>
  )
}

export default Section3

const Container = styled.div`
  margin-top: 350px;
  width: 100vw; 
  height: auto;
  padding-left: 100px;
  display: flex;
  position: relative;
  padding-bottom: 30px;
  background: transparent;
  @media(max-width: 947px) {
    margin-top: 560px;
    padding-left: 30px;
  }
  @media(max-width: 837px) {
    margin-top: 620px;
  }
`; 

const Link = styled.a``;

const Wrapper = styled.div`
  position: absolute; 
  background: transparent; 
  display: flex; 
  flex-direction: column;
  right: 160px;
  @media(max-width: 947px) {
    right: 80px;
    align-items: center;
  }
`;

const Cadre = styled.div`
  height: 450px; 
  width: 300px; 
  border-radius: 200px; 
  background: #3B3395;
  position: relative;
  padding: 50px;
  @media(max-width: 847px) {
    margin-top: 200px;
  }
`;

const Image = styled.img`
  background: transparent; 
  height: 100%; 
  width: auto;
  margin-left: -60px;
`; 

const Title = styled.text`
  background: transparent; 
  font-family: abril fatface;
  font-size: 60px;
  color: #827136;
  @media(max-width: 947px) {
    font-size: 8vw;
  }
`; 

const Wrap = styled.div`
  display: flex; 
  flex-direction: row;
  font-family: Roboto Mono; 
  //justify-content: start;
  font-weight: 400; 
  font-size: 22px;
  margin-top: 10px;
  color: #909090;
  background: transparent;
  
`; 

const BottomWrap = styled.div`
  height: 300px; 
  width: 90%;
  background: #3B3395;
  position: absolute; 
  margin-top: 600px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  border-radius: 400px;
  padding: 20px;
  @media(max-width: 846px) {
    margin-top: 720px;
  }
`; 

const Containe = styled.div`
  height: 100%; 
  width: 100%; 
  background: transparent;
  position: relative;
`; 

const Button = styled.div`
  height: 100%; 
  width: 60%; 
  position: absolute; 
  right : 0;
  border-radius: 200px;
  background: #FFFFFF;
  display: flex; 
  justify-content: center; 
  align-items: center;
  color: #3B3395;
  cursor: pointer;
  &:hover {
    background: #3B3395;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
  }
  @media(max-width: 665px ) {
    width: 100%;
  }
`; 

const Call = styled.text`
  font-family: abril-fatface; 
  font-size: 8vw; 
  background: transparent;
  @media(max-width: 665px) {
    font-size: 12vw;
  }
`; 