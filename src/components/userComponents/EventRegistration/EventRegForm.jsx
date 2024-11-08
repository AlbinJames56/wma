 
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as api from '../../../Services/ServerUrl';
import { Container, Row, Col, Button, Form, Spinner, Alert, Modal } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit"; 

function EventRegForm({ event, setCheckOut, setBackPage, registrationData, setData, setThank, setError }) {

  const handleShowTerms = () => setShowTerms(true);
  const handleCloseTerms = () => setShowTerms(false);
  const [loading, setLoading] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [terms, setTerms] = useState(false);
  const [warning, setWarning] = useState("");

  const schema = yup.object().shape({
    fullName: yup.string().required("Name is Required!"), 
    country: yup.string().required("Please enter the country!"),
    phone: yup.string().required("Phone number is not valid!"),
    address: yup.string().required("Please provide your Address!"),
    postcode: yup.string().required("Please provide your Zipcode!"),
    email: yup.string().email().required("Please provide your email!"),
    
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (!terms) {
      setWarning("Please agree to terms and conditions to proceed.");
      return;
    }
    setLoading(true);
    const newData = {
      ...data,
      event_id: registrationData.event_id,
      ticketType: registrationData.ticketType,
      ticketCount: registrationData.ticketCount,
      subTotal: registrationData.subTotal,
    };
    setData(newData);
    if (newData.subTotal === 0) {
      await api.registerForEvent(newData).then(() => {
        setThank(true);
      }).catch(() => {
        setError(true);
      });
      setLoading(false);
    } else {
      setCheckOut(true);
    }
  };
  return (
    <div><Container className="form_container my-4">
    {loading && (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )}

    <Form onSubmit={handleSubmit(onSubmit)} className="form">
      <Row className="form_part_one">
        <Col md={6}>
          <MDBInput
            label="Full Name"
            {...register("fullName")}
            className="mb-3"
            size="lg"
          />
          <div className="text-danger">{errors.fullName?.message}</div>
        </Col> 
        <Col md={6}>
          <MDBInput
            label="Country"
            {...register("country")}
            className="mb-3"
            size="lg"
          />
          <div className="text-danger">{errors.country?.message}</div>
        </Col>
        <Col md={6}>
          <MDBInput
            label="Phone Number"
            type="tel"
            {...register("phone")}
            placeholder="+611234567890"
            className="mb-3"
            size="lg"
          />
          <div className="text-danger">{errors.phone?.message}</div>
        </Col>
      </Row>

      <MDBInput
        label="Address"
        {...register("address")}
        className="mb-3 form_address"
        size="lg"
      />
      <div className="text-danger">{errors.address?.message}</div>

      <Row className="form_part_one">
        
        <Col md={6}>
          <MDBInput
            label="Postcode"
            {...register("postcode")}
            className="mb-3"
            size="lg"
          />
          <div className="text-danger">{errors.postcode?.message}</div>
        </Col>
        <Col md={6}>
          <MDBInput
            label="Email"
            type="email"
            {...register("email")}
            className="mb-3"
            size="lg"
          />
          <div className="text-danger">{errors.email?.message}</div>
        </Col>
         
      </Row>

      <Form.Group controlId="terms" className="terms-c">
      <Form.Check 
            type="checkbox"
            label={
              <span>
                I agree to
                <a href="#" onClick={(e) => { e.preventDefault(); handleShowTerms(); }}>
                  terms and conditions
                </a>
              </span>
            }
            onChange={() =>  setTerms(!terms)}
            required
          />
      </Form.Group>
      {warning && <Alert variant="danger">{warning}</Alert>}

      <div className="form_submit mt-4 d-flex justify-content-between">
        <Button variant="secondary" onClick={() => setBackPage(registrationData.ticketIndex)}>
          Back
        </Button>
        <Button
          type="submit"
          variant="primary"
          disabled={loading}
        >
          {registrationData.subTotal !== 0 ? "Submit and Pay" : "Submit"}
        </Button>
      </div>
    </Form>
  </Container>
  {/* modal to terms */}
  <Modal show={showTerms} onHide={handleCloseTerms} centered>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>{event.terms}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseTerms}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
  )
}

export default EventRegForm

 
