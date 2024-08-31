import Adil from "/img/Paśko1.jpeg";
import Fop from "/img/Fop1.png";
import Bedi from "/img/Bedi1.jpg";
const MembersInformation = () => {
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    console.log(`Przewinięto: ${scrollTop}px`);

    if (scrollTop <= 151) {
      document.getElementById('image').src = Adil;  
    } else if (scrollTop > 151 && scrollTop <= 840) {
      document.getElementById('image').src = Fop;   
    } else if (scrollTop > 840) {
      document.getElementById('image').src = Bedi;  
    }
  });
 
  
  return (
    <div className="MembersInformationContainer">
      <img id='image'className="fixedPhoto" src={Adil} alt="Zdjęcie" />
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
