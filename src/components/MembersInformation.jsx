import Adil from "/img/Paśko1.jpeg";
import Fop from "/img/Fop1.png";
import Bedi from "/img/Bedi1.jpg";
const MembersInformation = () => {
  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    console.log(`Przewinięto: ${scrollTop}px`);

    if (scrollTop <= 500) {
      document.getElementById("image").src = Adil;
    } else if (scrollTop > 500 && scrollTop <= 1200) {
      document.getElementById("image").src = Fop;
    } else if (scrollTop > 1200) {
      document.getElementById("image").src = Bedi;
    }
  });

  return (
    <div className="MembersInformationContainer">
      <img id="image" className="fixedPhoto" src={Adil} alt="Zdjęcie" />
      <div className="firstInformationSection">
        <div className="sectionInformation">
          <h1> Lorem Ipsum </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="secondInformationSection">
        <div className="sectionInformation">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="thirdInformationSection">
        <div className="sectionInformation">
          <h1 className="lastHeader">Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MembersInformation;
