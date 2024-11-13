import React, { useContext } from "react"; 
import { AppContext } from "../../../App";
import "./EventPage.css";
import EventCard from "../../../components/userComponents/EventCard/EventCard";
 
function EventPage() {
  const events = useContext(AppContext);
  return (
    <div className="eventpagebg my-5 py-5">
      <div className="container event_div mt-5">
        <div className="event_head ">
          <h1 className="text-center text-info">Upcoming Events</h1>
        </div>
        <div className="event_cards d-flex justify-content-center">
          {events.length >= 1 ? events.map((item, key) => (
          <EventCard event={item} key={key} showDetailsOnSmallScreens={true}/>
        )) : <div style={{ fontStyle: "italic", fontSize: 'large' }}>No upcoming events</div>}
         {/* <EventCard /> */}
        </div>
      </div>
    </div>
  );
}

export default EventPage;
