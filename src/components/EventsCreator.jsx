import YourEvent from "./yourEvent";
import OtherEvent from "./otherEvent";
import Modal from "../components/YourEventsModal"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const EventsCreator = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const othersEventContainer = document.querySelector(".othersEventContainer");
  const toggleYourEvents = () => {
    setIsExpanded(prevIsExpanded => {
      if (!prevIsExpanded) {
   
        setTimeout(() => {
          if (othersEventContainer) othersEventContainer.style.display = 'none';
        }, 1000); 
      } else {

        setTimeout(() => {
          if (othersEventContainer) othersEventContainer.style.display = 'block';
        }, 10); 
      }
      return !prevIsExpanded;
    });
  };
   
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
    <Modal isModalOpen={isModalOpen} toggleModal={toggleModal}/>
    <div className="eventCreationContainer">
      <div className={`yourEventsContainer ${isExpanded ? "expand" : ""}`}>
        <div className="navBar">
          <h1>Your Events</h1>
          <div className="addEventContainer">
            <button onClick={toggleModal} className="addButton">Add Event</button>
            <a onClick={toggleYourEvents}>See more</a>
          </div>
        </div>
        <div className="eventContainer">
          <YourEvent />
          <YourEvent />
        </div>
      </div>
      <div className={`othersEventContainer ${isExpanded ? "hiddenContainer" : ""}`}>
        <div className="navBar">
          <h1>Others Events</h1>
          <a onClick={() => navigate("/OtherEventsPage")}>See more</a>
        </div>
        <div className="eventContainer">
          <OtherEvent />
          <OtherEvent />
        </div>
      </div>
    </div>
    </>
  );
};

export default EventsCreator;
