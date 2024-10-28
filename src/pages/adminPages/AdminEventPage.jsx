import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import AdminEvents from "../../components/adminComponents/adminEvents/AdminEvents";
import AdminEventView from "../../components/adminComponents/adminEvents/AdminEventView";
import AdminEventForm from "../../components/adminComponents/adminEvents/AdminEventForm";

function AdminEventPage() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Event 1",
      description: "Description of Event 1",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/google-doodle-kk-254807570-16x9_0.png?VersionId=QPa62eLhkdOcH.LEajXbudLs5HFuXtYN&size=690:388",
        event_date:"10/10/2024",
        event_time:"9:40 AM",
        event_location:"contezza auditoriam",
        state:"Kerala",
        country:"india",
        tickets:[
            {
                category:"Premium",
                description:"Premium Seats with Lunch and dinner",
                pricing:[
                    {
                        category:"Adult",
                        price:"150$",
                    },
                    {
                        category:"Children ",
                        price:"100$",
                    },
                    {
                        category:"Infants",
                        price:"0$",
                    },
                ]
        },
            {
                category:"Executive",
                description:"Premium Second section Seats with Lunch",
                pricing:[
                    {
                        category:"Adult",
                        price:"120$",
                    },
                    {
                        category:"Children ",
                        price:"80$",
                    },
                    {
                        category:"Infants",
                        price:"0$",
                    },
                ]
        },
            {
                category:"Economic",
                description:"Third section Seats with Lunch",
                pricing:[
                    {
                        category:"Adult",
                        price:"100$",
                    },
                    {
                        category:"Children ",
                        price:"50$",
                    },
                    {
                        category:"Infants",
                        price:"0$",
                    },
                ]
        },
    ]

    },
    {
      id: 2,
      title: "Event 2",
      description: "Description of Event 2",
      image:
        "https://etvbharatimages.akamaized.net/etvbharat/prod-images/25-10-2024/448-252-22757854-271-22757854-1729835092433.jpg",
    },
    {
      id: 3,
      title: "Event 3",
      description: "Description of Event 3",
      image:
        "https://superbcollections.com/wp-content/uploads/2023/10/wp8047568.jpg",
    },
  ]);
  const [currentId, setCurrentId] = useState(null);
  const [addEvent, setAddEvent] = useState(false);
  const [viewEvent, setViewEvent] = useState(false);

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
