import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import ListIcon from "@mui/icons-material/List";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./DetailsPage.css";
import { SERVER_URL } from "../../../Services/ServerUrl";

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const events = useContext(AppContext);
  const event = events.find((event) => event._id === id); 
  const handleNavigate = () => {
    navigate(`/register/${encodeURIComponent(event._id)}`);
  };

  return (
    <>
      {event && (
        <Container className="details_container my-5 py-5">
          <Row className="details mt-3">
            {/* Event Image and Title */}
            <Col md={5} className="mb-4">
              <h2 className="fonts text-center">{event.title}</h2>
              <Image
                src={`${SERVER_URL}/uploads/${event.eventPoster}`}
                alt="Event Poster"
                className="img-fluid rounded mb-4"
              />
            </Col>

            {/* Event Details */}
            <Col md={6}>
              <h3 className="fonts">Event Details</h3>
              <div className="detail_desc mb-3 d-flex align-items-center">
                <ListIcon className="me-2" />
                <span>{event.description}</span>
              </div>
              
              {/* Event Location */}
              <div className="location_details p-3 bg-light rounded mb-3">
                <h5 className="fonts">Location</h5>
                <p className="mb-2"><ArrowCircleRightIcon /> {event.event_location}</p>
                <p className="mb-2"><ArrowCircleRightIcon /> {event.state}</p>
                <p><ArrowCircleRightIcon /> {event.country}</p>
              </div>

              {/* Event Schedule */}
              <div className="schedule_details p-3 bg-light rounded mb-3">
                <h5 className="fonts">Event Schedule</h5>
                <div className="shorthand bg-light p-2 rounded d-flex align-items-center">
                    <CalendarMonthIcon />
                    <div className="ms-2">
                      <span className="shorthand_title">Event Date:</span>
                      <span className="shorthand_detail">{event.event_date}</span>
                    </div>
                  </div>
                  <div className="shorthand bg-light p-2 rounded d-flex align-items-center">
                    <AccessTimeIcon />
                    <div className="ms-2">
                      <span className="shorthand_title">Event Time:</span>
                      <span className="shorthand_detail">{event.event_time}</span>
                    </div>
                  </div>
              </div>

              {/* Shorthand Details */}
              <Row className="detail_shorthand g-3">
                 
                <Col xs={12}  >
                  <div className="shorthand bg-light p-2 rounded d-flex align-items-center">
                    <LocationOnIcon />
                    <div className="ms-2">
                      <span className="shorthand_title">Event Location:</span>
                      <span className="shorthand_detail">{event.event_location}</span>
                    </div>
                  </div>
                </Col>
              </Row>

              {/* Register Button */}
              {event?.regOpen === "Yes" && (
                <div className="description_register my-4">
                  <Button onClick={handleNavigate} className="w-100 gradient-button">
                    Book Now
                  </Button>
                </div>
              )}
              
              {/* Share Options */}
              <div className="event_share p-3 bg-light rounded">
                <h5 className="fonts">Share this Event</h5>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <WhatsAppIcon className="share_icon" />
                  <FacebookIcon className="share_icon" />
                  <TwitterIcon className="share_icon" />
                  <MailOutlineIcon className="share_icon" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default DetailPage;
