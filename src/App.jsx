import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Contenido from './Components/Contenido/Contenido';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="content">
      <NavBar />
        <Container>
        <Contenido />
        </Container>
      </div>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
