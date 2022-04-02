import React from 'react';
import { Container, Nav } from 'react-bootstrap'
import './index.css'
function Footer() {
    return (
        <Container fluid className="footer-container">
            <Container className='justify-content-center footer-subContainer'>
                <div>
                    <Nav className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link href='#'>CONTACT US&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#'>CAREERS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#'>TERMS &#38; CONDITIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#'>PRIVACY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='https://www.facebook.com/' target="_blank"><img className='icons' src="facebook-footer.svg" alt="facebook link" /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='https://www.instagram.com/' target="_blank"><img className='icons' src="instagram-footer.svg" alt="instagram link" /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='https://www.linkedin.com/' target="_blank"><img className='icons' src="linkedin-footer.svg" alt="linkedin link" /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='https://twitter.com/' target="_blank"><img className='icons' src="twitter-footer.svg" alt="twitter link" /></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="copyRight">
                    Copyright © 2022 My Right to Hear - All Rights Reserved.
                </div>
            </Container>
        </Container>
    )
}

export default Footer