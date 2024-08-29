import Adil from "../img/Adil.jpeg";
const MembersInformation = () => {
  return (
    <div className="MembersInformationContainer">
      <img className="fixedPhoto" src={Adil} alt="Zdjęcie" />
      <div className="firstInformationSection">
        <div className="sectionInformation">
          <h1>Nazwa sekcji</h1>
          <p>Kontent sekci</p>
        </div>
      </div>
      <div className="secondInformationSection">
        <div className="sectionInformation">
          <h1>Nazwa sekcji</h1>
          <p>Kontent sekci</p>
        </div>
      </div>
      <div className="thirdInformationSection">
        <div className="sectionInformation">
          <h1>Nazwa sekcji</h1>
          <p>Kontent sekci</p>
        </div>
      </div>
    </div>
  );
};

export default MembersInformation;
