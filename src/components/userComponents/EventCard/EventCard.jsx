import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./EventCard.css";
import { SERVER_URL } from "../../../Services/ServerUrl";

function EventCard({ showDetailsOnSmallScreens = false, event }) {
  const navigate = useNavigate();

  const handleView = (e) => {
    e.stopPropagation();  
    navigate(`/event/${encodeURIComponent(event._id)}`);
  };

  const handleCardClick = (e) => {
    e.stopPropagation(); 
    if (window.innerWidth <= 480) {
      navigate(`/event/${encodeURIComponent(event._id)}`);
    }
  };

  return (
    <div className="event-card-container">
      <Card
        className="m-3 event-card"
        onClick={handleCardClick}
      >
        <Card.Img
          variant="top"
          src={`${SERVER_URL}/uploads/${event.eventPoster}`}
        />
        <Card.Body>
          <Card.Title className="card-title text-center">{event.title}</Card.Title>

          <Card.Text
            className={`card-text text-center ${showDetailsOnSmallScreens ? "" : "hide-on-small"}`}
          >
            {event.description}
          </Card.Text>

          <Button
            variant="primary"
            className={`w-100 butn ${showDetailsOnSmallScreens ? "" : "hide-on-small"}`}
            onClick={handleView}
          >
            View
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventCard;
