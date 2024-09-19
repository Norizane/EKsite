const YourEventsModal = ({ isModalOpen, toggleModal }) => {

  return (
    <div className={`yoursEventsContainer ${isModalOpen ? 'openModal' : 'closeModal'}`}>
      <div className="addFormContainer">
        <div className="navBar">
          <span onClick={toggleModal} className="material-symbols-outlined">close</span>
        </div>
        <div className="formContent">
        </div>
        <div className="footer">footer</div>
      </div>
    </div>
  );
};

export default YourEventsModal;
