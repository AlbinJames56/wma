import React, { useContext, useState } from "react";
import { AppContext } from "../../../App";
import "./DetailsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function DetailPage() {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/register/${encodeURIComponent(event._id)}`);
  };
  const [event, setEvent] = useState({
    title: "Onam",
    description: "Onaghosham",
    event_time: "12:50 am",
    event_date: "12/10/2024",
    event_location: "New Orlands, Australia",
    state: "Victoria",
    country: "Australia",
    tickets: [],
    terms:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem velit temporibus voluptatibus rerum earum error non recusandae necessitatibus tempore vitae quae corporis, fugiat adipisci nulla eaque ducimus nobis voluptate!",
    file: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    regOpen: "Yes",
  });

  return (
    <>
      {event && (
        <div className="details_container my-5">
          <div className="details">
            <div>
              <div className="detail_title">
                <h2 className="fonts">{event.title}</h2>
              </div>
              <div className="detail_image">
                <img src={event.file} alt="" />
              </div>
            </div>
            <div className="detail_location">
              <div className="location_title">
                <h3 className="fonts">Event Details</h3>
              </div>
              <div className="location_details">
                <div>
                  <div className="detail_desc">
                    <span className="heading_in">
                      <ListIcon />
                    </span>
                    <span>{event.description}</span>
                  </div>
                  <div className="event_address">
                    <span className="address_in">
                      <ArrowCircleRightIcon className="address_arrow" />
                      <h5 className="fonts">{event.event_location}</h5>
                    </span>
                    <span className="address_in">
                      <ArrowCircleRightIcon className="address_arrow" />
                      <h5 className="fonts">{event.state}</h5>
                    </span>
                    <span className="address_in">
                      <ArrowCircleRightIcon className="address_arrow" />
                      <h5 className="fonts">{event.country}</h5>
                    </span>
                  </div>
                  <div className="schedule_details">
                    <span className="schedule_in">
                      <CalendarMonthIcon className="address_arrow" />
                      <h3 className="fonts">Event Schedule Details</h3>
                    </span>
                    <div>
                      <span className="schedule_date">
                        <CalendarMonthIcon className="address_arrow" />
                        <p>
                          {event.event_date} {event.event_time}
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="event_share">
                    <span>
                      <h3 className="fonts">Share this Event</h3>
                    </span>
                    <div className="event_icons">
                      <span
                      //  onClick={shareViaWhatsApp}
                      >
                        <WhatsAppIcon className="address_arrow" />
                      </span>
                      <span
                      //  onClick={shareViaFacebook}
                      >
                        <FacebookIcon className="address_arrow" />
                      </span>
                      <span
                      //  onClick={shareViaTwitter}
                      >
                        <TwitterIcon className="address_arrow" />
                      </span>
                      <span
                      // onClick={shareViaGmail}
                      >
                        <MailOutlineIcon className="address_arrow" />
                      </span>
                    </div>
                  </div>
                  <div className="detail_shorthand">
                    <div className="shorthand">
                      <div className="shorthand_icon">
                        <CalendarMonthIcon className="address_arrow"/>
                      </div>
                      <div className="shorthand_text">
                        <span className="shorthand_title">Event Date:</span>
                        <span className="shorthand_detail">
                          {event.event_date}
                        </span>
                      </div>
                    </div>
                    <div className="shorthand">
                      <div className="shorthand_icon">
                        <AccessTimeIcon className="address_arrow" />
                      </div>
                      <div className="shorthand_text">
                        <span className="shorthand_title">Event Time:</span>
                        <span className="shorthand_detail">
                          {event.event_time}
                        </span>
                      </div>
                    </div>
                    <div className="shorthand">
                      <div className="shorthand_icon">
                        <LocationOnIcon className="address_arrow" />
                      </div>
                      <div className="shorthand_text">
                        <span className="shorthand_title">Event Location:</span>
                        <span className="shorthand_detail">
                          {event.event_location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="detail_description">
                    {event?.regOpen === "Yes" && (
                      <div className="description_register">
                        <button onClick={handleNavigate}>Book Now</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailPage;
