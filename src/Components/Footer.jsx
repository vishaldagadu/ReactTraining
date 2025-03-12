import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row>
                    <Col md={6} className="text-center text-md-start">
                        <p>&copy; {new Date().getFullYear()} My Landing Page. All rights reserved.</p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <a href="/privacy" className="text-white mx-2">Privacy Policy</a>
                        <a href="/terms" className="text-white mx-2">Terms of Service</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;