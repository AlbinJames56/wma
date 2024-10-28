import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./EventCard.css";

function EventCard({ showDetailsOnSmallScreens = false }) {
  const navigate = useNavigate();
  const handleView = () => {
    // navigate(`/event/${encodeURIComponent(event._id)}`);
    navigate("/event");
  };
  const handleCardClick = () => {
    // Check if the screen size is small
    if (window.innerWidth <= 768) {
      handleView();
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center  ">
        <Card
          style={{ width: "20rem" }}
          className="m-3 col-md:m-1"
          onClick={handleCardClick} // Add click handler to the card
        >
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg"
          />
          <Card.Body>
            <Card.Title>Event Title</Card.Title>

            {/* Text that will be hidden on small screens */}
            <Card.Text className={`col-md:fs-s card-text ${showDetailsOnSmallScreens ? "" : "hide-on-small"}`}
            >
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            {/* Button that will be hidden on small screens */}
            <Button
              variant="primary"
              size="lg"
              className={`w-100 card-button ${showDetailsOnSmallScreens ? "" : "hide-on-small"}`}
              onClick={handleView}
            >
              View
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "20rem" }}
          className="m-3 col-md:m-1"
          onClick={handleCardClick} // Add click handler to the card
        >
          <Card.Img
            variant="top"
             src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-2263436.jpg&fm=jpg"
          />
          <Card.Body>
            <Card.Title>Onam</Card.Title>

            {/* Text that will be hidden on small screens */}
            <Card.Text className={`col-md:fs-s card-text ${showDetailsOnSmallScreens ? "" : "hide-on-small"}`}> 
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            {/* Button that will be hidden on small screens */}
            <Button
              variant="primary"
              size="lg"
              className={`w-100 card-button ${showDetailsOnSmallScreens ? "" : "hide-on-small"}`}
              onClick={handleView}
            >
              View
            </Button>
          </Card.Body>
        </Card>

        
      </div>
    </div>
  );
}

export default EventCard;
