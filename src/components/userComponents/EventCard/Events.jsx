import React, { useContext } from "react";
import { AppContext } from "../../../App";
import "./Event.css";
import EventCard from "./EventCard";

function Events() {
  const events = useContext(AppContext);

  return (
    <div className="eventbg">
      <div className="container event_div py-5">
        <div className="event_head">
          <h1 className="text-center text-info">Upcoming Events</h1>
        </div>
        <div className="event-scroll-container event_cards d-flex justify-content-center">
          {events.length >= 1 ? (
            events.map((item, key) => <EventCard event={item} key={key} />)
          ) : (
            <div style={{ fontStyle: "italic", fontSize: "large" }}>No upcoming events</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;
