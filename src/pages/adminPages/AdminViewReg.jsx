import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col, Spinner, Alert } from "react-bootstrap";
import { getBookedTicketsAPI } from "../../Services/AllApis";

function AdminViewReg() {
  const [bookedTickets, setBookedTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch booked tickets data from the backend
    const fetchBookedTickets = async () => {
      try {
        const response = await getBookedTicketsAPI();
        console.log(response);
        if (response.status == 200) {
          console.log(response);
          setBookedTickets(response.data);
        } else {
          console.log("Error in getting", response.message);
        }
      } catch (err) {
        setError("Failed to load booked tickets.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookedTickets();
  }, []);

  return (
    <Container className="py-4 mt-5">
      <h1 className="text-center mb-4 mt-5 text-dark">Booked Tickets</h1>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Event Name</th>
              <th>Location</th>
              <th>Date & Time</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Ticket Section</th>
              <th>Ticket Count</th>
              <th>Pricing</th>
              <th>RegId</th>
            </tr>
          </thead>
          <tbody>
            {bookedTickets.length > 0 ? (
              bookedTickets.map((ticket, index) => (
                <tr key={ticket.regId}>
                  <td>{index + 1}</td>
                  <td>
                    {ticket.eventName}
                    {ticket.eventId}
                  </td>
                  <td>{ticket.location}</td>
                  <td>{ticket.when}</td>
                  <td>{ticket.name}</td>
                  <td>{ticket.email}</td>
                  <td>{ticket.section}</td>
                  <td>
                    {Object.entries(ticket.ticketCount).map(
                      ([category, count]) => (
                        <div key={category}>
                          {category}: {count}
                        </div>
                      )
                    )}
                  </td>
                  <td>
                    {Object.entries(ticket.pricing).map(([category, price]) => (
                      <div key={category}>
                        {category}: ${price}
                      </div>
                    ))}
                  </td>
                  <td>{ticket.regId}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No booked tickets found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default AdminViewReg;
