import { CartWidget } from '../CartWidget/CartWidget.js';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Navbar.css"
import logito from '../../assets estaticos/imgs/logo.jpg';

export const NavBar = () => {
    return (
    
      <Navbar bg="dark" variant="dark" expand="lg">

        <Container className='flex-container'>
            <div>
                  <Navbar.Brand>
                  <img
                    src={logito} // Aquí especificas directamente la ruta de la imagen
                    alt="Logo"
                    height="70"
                    className="d-inline-block align-top"/>
                </Navbar.Brand>
            </div>

            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#link">Enlace</Nav.Link>
                  <Nav.Link href="#about">Acerca de</Nav.Link>
                  <CartWidget/>
                </Nav>
              </Navbar.Collapse>
            </div>   
        
        </Container>

      </Navbar>
     
    );
  }
  

  