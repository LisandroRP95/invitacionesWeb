import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'

const Footer = () => {
  return (
    <>

    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>© Athomic 2024. Todos los derechos reservados.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">Sobre Nosotros</a></li>
              <li><a href="/contact" className="text-white">Contacto</a></li>
              <li><a href="/privacy" className="text-white">Política de Privacidad</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>

    </>
  )
}

export default Footer