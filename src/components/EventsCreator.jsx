import YourEvent from "./yourEvent";

const EventsCreator = () => {
  return (
    <div className="eventCreationContainer">
      <div className="yourEventsContainer">
        <div className="navBar">
          <h1>Your Events</h1>
          <a href="">See more</a>
        </div>
        <div className="eventContainer">
          <YourEvent/>
          <YourEvent/>
        </div>
      </div>
      <div className="othersEventContainer">
       
      </div>
    </div>
  );
};

export default EventsCreator;
