import React from 'react';
import { Row, Col, Container, Nav, Button } from 'react-bootstrap'
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
          <Col md={9} className="navbar-container">
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
                NEWSROOM
              </Nav.Item>
              <Nav.Item>
                <Button id="donate-btn">DONATE<span className='heart-icon'><img className='icons' src="heart.svg" alt="heart icon"/></span></Button>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={2} className='social-links-container'>
            <Nav>
              <Nav.Item>
                <Nav.Link href='https://www.facebook.com/' target="_blank"><img className='icons' src="facebook.svg" alt="facebook link" /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='https://www.instagram.com/' target="_blank"><img className='icons' src="instagram.svg" alt="instagram link" /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='https://www.linkedin.com/' target="_blank"><img className='icons' src="linkedin.svg" alt="linkedin link" /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='https://twitter.com/' target="_blank"><img className='icons' src="twitter.svg" alt="twitter link" /></Nav.Link>
              </Nav.Item>
            </Nav>




          </Col>
        </Row>
      </Container>

    </div>

  );
}

export default Header;
