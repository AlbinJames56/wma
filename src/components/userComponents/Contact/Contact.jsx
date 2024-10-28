import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import "./contact.css";

function Contact() {
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact mt-5 pt-3">
      <Container>
        <h1 className="text-center text-info pt-4">Get in Touch</h1>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit} className="contact_form">
              <div className=" cold-md-4 mb-3">
                <MDBInput
                  type="text"
                  label="Name"
                  value={input.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className=" cold-md-4 mb-3">
                <MDBInput
                  type="tel"
                  label="Phone Number"
                  value={input.phone}
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              <div className=" cold-md-4 mb-3">
                <MDBInput
                  type="email"
                  label="Email"
                  value={input.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className=" cold-md-4 mb-3">
                <Form.Control
                  as="textarea"
                  label="Your message (optional)"
                  placeholder="Type here.."
                  value={input.message}
                  name="message"
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  type="submit"
                  className="contact_button mt-2 text-center"
                >
                  Send
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
