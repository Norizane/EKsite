import Request from "../components/Request";

const MainBoard = () => {
  return (
    <div className="mainBoardContainer">
      <div className="eventHeader">
        <h1>Upcoming Events</h1>
        <p>Time</p>
      </div>
      <div className="eventDescriptionContainer">
        <div className="eventDescription">
          <div className="mainInformation">
            <div className="informationContainer">
              <div>
                <h1>Event Name</h1>
                <div className="detailedInformation">
                <p className="eventCreator">Event Type</p>
                <p>Event Creator</p>
                </div>
              </div>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
                magna a lectus feugiat sollicitudin. Proin viverra ultricies
                aliquam. Ut vehicula enim ac magna porttitor placerat. Aenean
                dictum tempus volutpat.
              </p>
            </div>
            <div className="buttonContainer">
              <button className="joinButton">join event</button>
              <button className="readButton">read more</button>
            </div>
          </div>
          <div>
            <img
              className="mainBoardImg"
              src="https://i1.fdbimg.pl/x1/7fay2m/1014x1500_m3ae4o.jpg"
              alt="Opis zdjęcia"
            ></img>
          </div>
        </div>
      </div>
      <div className="requestContainer">
        <Request />
      </div>
    </div>
  );
};

export default MainBoard;
