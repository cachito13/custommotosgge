import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#343a40', color: 'white', padding: '50px 0' }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Contacto</h5>
                        <p>Dirección: Calle Principal 123, Ciudad</p>
                        <p>Email: info@example.com</p>
                        <p>Teléfono: 123-456-7890</p>
                    </Col>
                    <Col md={4}>
                        <h5>Enlaces útiles</h5>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/nosotros">Nosotros</a></li>
                            <li><a href="/productos">Productos</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Síguenos</h5>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li><a href="https://facebook.com" style={{ color: 'white' }}>Facebook</a></li>
                            <li><a href="https://twitter.com" style={{ color: 'white' }}>Twitter</a></li>
                            <li><a href="https://instagram.com" style={{ color: 'white' }}>Instagram</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '30px 0' }} />
                <p style={{ textAlign: 'center' }}>© 2024 Mi Empresa | Todos los derechos reservados</p>
            </Container>
        </footer>
    );
};

export default Footer;
