import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import AdminEvents from "../../components/adminComponents/adminEvents/AdminEvents";
import AdminEventView from "../../components/adminComponents/adminEvents/AdminEventView";
import AdminEventForm from "../../components/adminComponents/adminEvents/AdminEventForm";
import { getEventsAPI } from "../../Services/allApi";
import { addEventContextResponse, editEventContextResponse } from "../../ContextAPI/ContextShare";

function AdminEventPage() {
  const [events, setEvents] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [addEvent, setAddEvent] = useState(false);
  const [viewEvent, setViewEvent] = useState(false);
  const {editEventResponse, setEditEventResponse}=   useContext (editEventContextResponse);
  const {addEventResponse, setAddEventResponse}=   useContext (addEventContextResponse);

  // Get events from database
  const getEvents = async () => {
    try {
      const result = await getEventsAPI();
      if (result.status == 200) {
        setEvents(result.data);
      } else {
        console.log("Error while getting events", result.message);
      }
    } catch (err) {
      console.log("Catch error", err);
    }
  };
  
  
  useEffect(()=>{
    getEvents()
  },[editEventResponse,addEventResponse])

  return (
    <Container fluid style={{ marginTop: "90px", padding: "10px" }}>
      <Row>
        {!addEvent &&
          !viewEvent &&
          events.map((event) => (
            <Col key={event.id} md={4}>
              <AdminEvents
                events={event}
                setEvents={setEvents}
                setAddEvent={setAddEvent}
                setCurrentId={setCurrentId}
                currentId={currentId}
                setViewEvent={setViewEvent}
              />
            </Col>
          ))}
        {!viewEvent && (
          <Button
            variant="pink"
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              width: "60px",
              height: "60px",
              borderRadius: "30px",
              backgroundColor: "#EA4C89",
              display: addEvent ? "none" : "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setAddEvent(true)}
          >
            <AddIcon />
          </Button>
        )}
        {/* Event Form */}
        {addEvent && (
          <Col>
            <AdminEventForm
              events={events}
              setEvents={setEvents}
              setAddEvent={setAddEvent}
              setViewEvent={setViewEvent}
              setCurrentId={setCurrentId}
              currentId={currentId}
            />
          </Col>
        )}

        {/* View Event Modal */}
        {viewEvent && (
          <Col>
            <AdminEventView
              events={events}
              setViewEvent={setViewEvent}
              setCurrentId={setCurrentId}
              currentId={currentId}
            />
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default AdminEventPage;
