import React, { useState } from 'react';
import { Container, Form, Button } from "react-bootstrap"
import './index.css';

function ContactUs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [help, setHelp] = useState("");
  const [helpMessage, setHelpMessage] = useState(false);
  const [emailMessage, setEmailMessage] = useState(false);

  const handleContactUsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailMessage(false);
    setHelpMessage(false);
    if (!email) setEmailMessage(true);
    if (!help) setHelpMessage(true);
    console.log(email, name, affiliation, help)

  }
  return (
    <Container fluid id="contactus-container">

      <div id="contactImage-container"><img id="contactImage" loading="lazy" decoding="async" src="media/contactUs.jpg" alt="ContactUs" /></div>


      <Container id="contactus-form-container">
        <p>
          For inquiries, please fill out the form below or reach out to us via "email placeholder".
        </p>
        <Form id="contactus-form" onSubmit={e => handleContactUsSubmit(e)}>
          <Form.Group className="contactus-from-group"><Form.Label>Email <span style={{ color: "red" }}>*</span></Form.Label>
            <Form.Control name="email" type="email" onChange={(e) => {
              setEmailMessage(false);
              setEmail(e.target.value);

            }
            } />
            {emailMessage && <Form.Text className="contactus-form-message">
              Required
            </Form.Text>}
          </Form.Group>
          <Form.Group className="contactus-from-group"><Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" onChange={(e) => setName(e.target.value)} /></Form.Group>
          <Form.Group className="contactus-from-group"><Form.Label>Affiliation</Form.Label>
            <Form.Control name="affiliation" type="text" onChange={(e) => setAffiliation(e.target.value)} /></Form.Group>
          <Form.Group className="contactus-from-group"><Form.Label>How Can We Help? <span style={{ color: "red" }}>*</span></Form.Label>
            <Form.Control name="help" type="text" onChange={(e) => {
              setHelpMessage(false);
              setHelp(e.target.value);

            }
            } />
            {helpMessage && <Form.Text className="contactus-form-message">
              Required
            </Form.Text>}</Form.Group>
          <Button id="contactus-form-sbm-btn" type="submit">Submit</Button>
          <p><span style={{ color: "red" }}>*</span> Required</p>
        </Form>
      </Container>
    </Container>
  );

}

export default ContactUs;