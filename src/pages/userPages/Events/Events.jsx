import React, { useContext } from "react";
import EventCard from "../../../components/userComponents/EventCard/EventCard";
import { AppContext } from "../../../App";
import './Event.css'

function Events() {
  const events = useContext(AppContext);
  return (
    <div className="eventbg">
      <div
         
        className="container py-5"
      >
        <div className="event_div ">
          <h1 className="text-center text-info">Upcoming Events</h1>
        </div>
        <div className="event_cards">
          {/* {events.length >= 1 ? events.map((item, key) => (
          <EventCard event={item} key={key} />
        )) : <div style={{ fontStyle: "italic", fontSize: 'large' }}>No upcoming events</div>} */}
          <EventCard />
        </div>
      </div>
    </div>
  );
}

export default Events;
