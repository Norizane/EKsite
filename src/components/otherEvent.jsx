import eventPhoto from "../../public/img/Ekwador2000.png";

const otherEvent = () => {
  return (
    <div className="otherEventsContainer">
      <div className="mainInformation">
        <div className="imgContainer">
          <img src={eventPhoto} alt="eventphoto" />
        </div>
        <div className="descriptionContainer">
          <h1>Event</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default otherEvent;
