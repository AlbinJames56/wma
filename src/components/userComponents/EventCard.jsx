import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function EventCard() {
  return (
    <div className="container ">
       
      <div className="d-flex justify-content-center align-items-center  ">
         
        <Card style={{ width: "20rem" }} className="m-3">
          <Card.Img variant="top" src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg" />
          <Card.Body>
            <Card.Title>Event Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" size="lg" className="w-100">View</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-2263436.jpg&fm=jpg" />
          <Card.Body>
            <Card.Title>Event Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default EventCard;
