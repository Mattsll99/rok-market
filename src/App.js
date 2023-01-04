import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

function App() {
  return (
    <Container>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw; 
  height: auto;
`;