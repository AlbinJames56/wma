import React, { useContext, useState } from "react";
import "./eventReg.css";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../App";
import { Button, Card, Col, Container, Row, Alert } from "react-bootstrap";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import EventRegDetails from "./EventRegDetails";

function EventRegister() {
  const { id } = useParams();
  const events = useContext(AppContext);
  const event = events.find((event) => event._id === id);
  console.log(events);

  const [page, setPage] = useState(0);
  const [ticketType, setTicketType] = useState(null);
  const [data, setData] = useState({});
  const [warning, setWarning] = useState(false);

  const findMinAmount = (categories) => {
    return Math.min(...categories.map((item) => parseFloat(item.price)));
  };

  const findMaxAmount = (categories) => {
    return Math.max(...categories.map((item) => parseFloat(item.price)));
  };

  const handleTicketTypeSelect = (index) => {
    setTicketType(index);
    setPage(1);

    const newTicketCount = {};
    const ticketPrice = {};
    event.tickets[index].categories.forEach((element) => {
      newTicketCount[element.name] = 0;
      ticketPrice[element.name] = parseFloat(element.price);
    });

    setData({
      event_id: event._id,
      ticketType: event.tickets[index].name,
      ticketCount: newTicketCount,
      ticketPrice,
      ticketIndex: index,
    });
  };

  const setBackPage = () => {
    setTicketType(null);
    setData({});
    setPage(0);
  };

  const handleTicketSelect = (index) => {
    let warning = true;
    // Check if any tickets are selected
    for (const key in data.ticketCount) {
      if (data.ticketCount[key] > 0) {
        warning = false;
      }
    }
    if (warning) {
      setWarning(true);
    } else {
      // Calculate the total number of tickets selected
      const totalSelectedTickets = Object.values(data.ticketCount).reduce(
        (acc, count) => acc + count,
        0
      );
      const availableTickets = parseInt(event.tickets[ticketType].ticketCount);

      // Check if total selected tickets exceed available tickets
      if (totalSelectedTickets > availableTickets) {
        alert(
          `Only ${availableTickets} tickets available in total for ${event.tickets[ticketType].name}`
        );
        return;
      }

      // Calculate total amount if no issues
      let subTotal = 0;
      for (let key in data.ticketCount) {
        subTotal += data.ticketCount[key] * data.ticketPrice[key];
      }
      setData({ ...data, subTotal: subTotal });
      setPage(2);
    }
  };

  return (
    <div className=" mt-5 ">
      {event && event.tickets.length >= 1 && (
        <div className="py-5">
          <Container className=" p-3 rounded bg-white border shadow my-5 ">
            <Row className=" text-center ">
              <Col>
                <h2 className=" text-secondary">{event.title}</h2>
              </Col>
            </Row>

            {page === 0 && (
              <Card className=" mt-3 bg-white rounded">
                <Card.Header className="text-center" id="rg1-3">
                  <span className="fw-bolder text-dark">Select an option</span>
                </Card.Header>
                {event.tickets.map((ticket, index) => (
                  <Card.Body
                    className="rg1-4 d-flex justify-content-between align-items-center shadow-sm my-2 p-3"
                    key={index}
                  >
                    <div>
                      <strong>{ticket.name}</strong>
                      {parseInt(ticket.ticketCount) < 10 && (
                        <p className="text-danger">Only a few tickets left!</p>
                      )}
                      <p>{ticket.description}</p>
                      <p>
                        {findMinAmount(ticket.categories)}$ -{" "}
                        {findMaxAmount(ticket.categories)}$
                      </p>
                    </div>
                    <Button
                      variant="outline-dark"
                      id="rg-4-3"
                      onClick={() => handleTicketTypeSelect(index)}
                    >
                      Select
                    </Button>
                  </Card.Body>
                ))}
              </Card>
            )}

            {ticketType !== null && page === 1 && (
              <Card className="rg1-5 mt-3 bg-white rounded p-3">
                <Card.Title style={{ padding: "10px" }}>
                  Select Tickets For
                </Card.Title>
                <h4 className="text-center rg2-1">
                  {event.tickets[ticketType].name}
                </h4>
                {event.tickets[ticketType].categories.map((pricing, index) => (
                  <Row
                    key={index}
                    id="rg2-2"
                    className="my-2 shadow-sm bg-white rounded align-items-center p-3"
                  >
                    <Col xs={6} className="font-weight-bold">
                      {pricing.name}
                    </Col>
                    <Col xs={3}>$ {pricing.price}</Col>
                    <Col
                      xs={2}
                      className="d-flex align-items-center"
                      id="rg2-3"
                    >
                      <RemoveCircleOutline
                        onClick={() => {
                          if (data.ticketCount[pricing.name] !== 0) {
                            setData({
                              ...data,
                              ticketCount: {
                                ...data.ticketCount,
                                [pricing.name]:
                                  data.ticketCount[pricing.name] - 1,
                              },
                            });
                          }
                        }}
                      />
                      <span className="mx-2">
                        {data.ticketCount[pricing.name]}
                      </span>
                      <AddCircleOutline
                        onClick={() => {
                          setWarning(false);
                          const totalSelectedTickets = Object.values(
                            data.ticketCount
                          ).reduce((acc, count) => acc + count, 0);
                          const availableTickets = parseInt(
                            event.tickets[ticketType].ticketCount
                          );

                          if (totalSelectedTickets < availableTickets) {
                            setData({
                              ...data,
                              ticketCount: {
                                ...data.ticketCount,
                                [pricing.name]:
                                  (data.ticketCount[pricing.name] || 0) + 1,
                              },
                            });
                          } else {
                            alert(
                              `Only ${availableTickets} tickets available in total for ${event.tickets[ticketType].name}`
                            );
                          }
                        }}
                      />
                    </Col>
                  </Row>
                ))}
                {warning && (
                  <Alert variant="danger" className="text-center mt-3">
                    Select at least 1 ticket to proceed
                  </Alert>
                )}
                <div className="d-flex justify-content-between mt-3 rg2-4">
                  <Button variant="dark" onClick={setBackPage}>
                    Back
                  </Button>
                  <Button variant="primary" onClick={handleTicketSelect}>
                    Next
                  </Button>
                </div>
              </Card>
            )}

            {page === 2 && (
              <EventRegDetails
                event={event}
                registrationData={data}
                setBackPage={handleTicketTypeSelect}
              />
            )}
          </Container>
        </div>
      )}
    </div>
  );
}

export default EventRegister;
