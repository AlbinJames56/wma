import React, { useEffect, useState } from "react";

import {Card,
  Container,
  Row,
  Col,
  Button,
  Image,
  CloseButton,
} from "react-bootstrap";
import { SERVER_URL } from "../../../Services/ServerUrl";
function AdminEventView({ events, setViewEvent, currentId }) {
  const [event, setEvent] = useState({});
  const viewEvent = currentId
    ? events.find((event) => event._id === currentId)
    : null;
    console.log(viewEvent);
  useEffect(() => {
    if (viewEvent) setEvent(viewEvent);
  }, [viewEvent]);
console.log(`${SERVER_URL}/uploads/${viewEvent?.eventPoster}`);
  return (
    <Container className="form-container p-4 bg-white rounded shadow-sm">
      <Row className="form-header align-items-center mb-3">
        <Col>
          <h2 className="text-dark">{event.title}</h2>
        </Col>
        <Col className="text-end ">
          <CloseButton
            onClick={() => setViewEvent(false)}
            style={{ backgroundColor: "red", color: "white" }}
          />
        </Col>
      </Row>{" "}
      {/* Poster */}
      <Row className="form-input mb-3 p-3 d-flex justify-content-center rounded bg-light shadow">
        <strong>Poster:</strong>
        <Image
          src={`${SERVER_URL}/uploads/${viewEvent?.eventPoster}`}
          alt="Poster"
          fluid
          style={{ maxWidth: "400px" }}
        />
      </Row>
      <Row className="form-content">
        <Col md={6}> 
          <div className="form-input mb-3 me-2  p-3 rounded bg-light shadow">
            <strong>Description:</strong>
            <div>{event.description}</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="form-input mb-3 p-3 me-2  rounded bg-light shadow">
            <strong>Event Date:</strong>
            <div>{event.event_date}</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="form-input mb-3 me-2  p-3 rounded bg-light shadow">
            <strong>Event Time:</strong>
            <div>{event.event_time}</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="form-input mb-3 me-2  p-3 rounded bg-light shadow">
            <strong>Event Location url:</strong>
            <div>{event.event_location_url}</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="form-input mb-3 me-2  p-3 rounded bg-light shadow">
            <strong>Event Location:</strong>
            <div>{event.event_location}</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="form-input mb-3 me-2  p-3 rounded bg-light shadow">
            <strong>State:</strong>
            <div>{event.state}</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="form-input mb-3 me-2 p-3 rounded bg-light shadow">
            <strong>Country:</strong>
            <div>{event.country}</div>
          </div>
        </Col>

        {/* Tickets Display */}
        <Col md={12}>
          <div className="form-input display-tickets mb-3 me-2   p-3 rounded bg-light shadow">
            <strong>Tickets:</strong>
            <Row>
              {event?.tickets?.map((ticket, index) => (
                <Col md={6}>
                  <Card key={index} className="form-1 p-3 mt-2 shadow-sm">
                    <Card.Body>
                      <Row>
                        <Col>
                          <strong>Name:</strong> <span>{ticket.category}</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <strong>Description:</strong>{" "}
                          <span>{ticket.description}</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <strong>Ticket Count:</strong>{" "}
                          <span>{ticket.ticketCount}</span>
                        </Col>
                      </Row>
                      <strong>Pricing:</strong>
                      {ticket?.pricing?.map((pricing, ind) => (
                        <Row key={ind} className="mt-1">
                          <Col>
                            <span>{pricing.category}:</span>{" "}
                            <span>{pricing.price}</span>
                          </Col>
                        </Row>
                      ))}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
        {/* Terms and Conditions */}
        <Col
          md={12}
          className="form-input mb-3   p-3 rounded bg-light shadow"
        >
          <strong>Terms and Conditions:</strong>
          <div style={{ whiteSpace: "pre-wrap" }}>{event.terms}</div>
        </Col>

        {/* Registration Needed */}
        <Col
          md={12}
          className="form-input mb-3 p-3 rounded bg-light shadow"
        >
          <strong>Registration Needed?</strong>
          <div>{event.regOpen}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminEventView;
