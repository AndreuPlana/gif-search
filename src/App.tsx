import styled from 'styled-components';
import Header from './components/Header';
import './fonts/fonts.css';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  font-family: Poppins, sans-serif;

`;

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
