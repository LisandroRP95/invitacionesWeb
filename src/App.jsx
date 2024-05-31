import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="content">
      <NavBar />
        <Container>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet purus quis metus imperdiet, et venenatis lacus fringilla.
        </Container>
      </div>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
