import styled from 'styled-components';
import Header from './components/Header';
import './fonts/fonts.css';
import Grid from './components/Grid';
import MainProvider from './providers/main';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  font-family: Poppins, sans-serif;

`;

function App() {
  return (
    <MainProvider>
      <Container>
        <Header />
        <Grid />
      </Container>
    </MainProvider>
  );
}

export default App;
