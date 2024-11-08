import React from "react";
import { Card, Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
 import "./EventReg.css";

function Cart({ event, registrationData }) {
  const ticket = event.tickets.find(ticket => ticket.name === registrationData.ticketType);

  return (
    <Container className="cart_container my-4 p-3">
      <Card>
        <Card.Header className="cart_title d-flex align-items-center">
          <ShoppingCartIcon />
          <span className="ms-2">Your Cart</span>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroupItem className="cart_event">
            <h5 className="text-dark ">{event.title}</h5>
          </ListGroupItem>
          <ListGroupItem className="cart_event">
            <strong>Ticket Type:</strong> {ticket.name}
          </ListGroupItem>
          <ListGroupItem className="cart_event">
            {Object.entries(registrationData.ticketCount).map(([key, value]) => (
              <Row className="ticket_count align-items-center" key={key}>
                <Col xs={6}>
                  Ticket: <span style={{ color: 'green' }}>{key}</span> <span>x {value}</span>
                </Col>
                <Col xs={6} className="text-end">
                  <span style={{ color: 'red' }}>Price:</span> ${registrationData.ticketPrice[key] * value}
                </Col>
              </Row>
            ))}
          </ListGroupItem>
        </ListGroup>
        <Card.Footer className="subtotal text-end">
          <span>Subtotal: $ {registrationData.subTotal}</span>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Cart;
