import React from 'react';
import { Row, Col, Container, Nav, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
function Header() {
  return (
    <div className="Header">
      <div className="top-bar"></div>
      <Container fluid className='header-container'>
        <Row className="header-container-row">
          <Col md={1} className='logo-container'>
            <img src='logo-resized.jpg' id='logo' alt='main logo' />

          </Col>
          <Col md={8} className="navbar-container">
            <Nav className="justify-content-around navbar">
              <Nav.Item>
                ABOUT
              </Nav.Item>
              <Nav.Item>
                OUR PROGRAMS
              </Nav.Item>
              <Nav.Item>OUR ADVOCACY</Nav.Item>
              <Nav.Item>
                GET INVOLVED
              </Nav.Item>
              <Nav.Item>
                <Button id="donate-btn">DONATE</Button>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={3}>
          <a href="facebook.com"><img src="facebook.png" alt="facebook link"/></a>
          </Col>
        </Row>
      </Container>

    </div>

  );
}

export default Header;
