import eventPhoto from "../../public/img/Ekwdor2000.jpg";

const yourEvent = () => {
  return (
    <div className="yourEventContainer">
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
      <div className="buttonsContainer">
      <span className="material-symbols-outlined edit">edit</span>
      <span className="material-symbols-outlined delete">delete</span>
      </div>
    </div>
  );
};

export default yourEvent;
