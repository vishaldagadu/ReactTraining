import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Banner() {
    return (
        <div className="banner bg-primary text-white py-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={8}>
                        <h1>Unlock Your Potential with Our Product</h1>
                        <p>Experience the power of our innovative solutions.</p>
                    </Col>
                    <Col md={4} className="text-md-end">
                        <Button variant="light" size="lg">Get Started Now</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Banner;