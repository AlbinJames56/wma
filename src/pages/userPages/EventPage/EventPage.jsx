import React, { useContext } from "react"; 
import { AppContext } from "../../../App";
import "./EventPage.css";
import EventCard from "../../../components/userComponents/EventCard/EventCard";
 
function EventPage() {
  const events = useContext(AppContext);
  return (
    <div className="eventpagebg mt-5 pt-5">
      <div className="container event_div mt-5">
        <div className="event_head ">
          <h1 className="text-center text-info">Upcoming Events</h1>
        </div>
        <div className="event_cards">
          {/* {events.length >= 1 ? events.map((item, key) => (
          <EventCard event={item} key={key} />
        )) : <div style={{ fontStyle: "italic", fontSize: 'large' }}>No upcoming events</div>} */}
         <EventCard showDetailsOnSmallScreens={true}/>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
