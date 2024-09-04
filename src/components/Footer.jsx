import flaga from '../../public/img/flaga.jpg'
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footerContainer">
      <div>
        <img className="footerFirstImg" src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg" alt="flaga" />
      </div>
      <div>
        <button onClick={() => navigate("/AboutUs")} className="footerButton">Contact Us</button>
      </div>
      <div>
      <img className='footerSecondImg' src={flaga} alt="Opis zdjęcia" />
      </div>
    </div>
  );
};

export default Footer;
