import { useState } from "react";
import { useNavigate } from "react-router-dom";
import flaga from "../../public/img//flaga.jpg";
import logo from "../../public/img//EKlogo3.png"
const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const navigate = useNavigate();

  return (
    <div className="navBarContainer">
      <div>
        <img className='logo' onClick={() => navigate("/")} src={logo} alt="logo" />
      </div>
      <div
        className={`navBarNavigation ${
          isVisible ? "navBarNavigationMobile" : "navBarNavigationHiddenMobile"
        }`}
      >
        <ul className="navBarLinks">
          <li>
            <a className="navBarLink" onClick={() => navigate("/Events")}>Events</a>
          </li>
          <li>
            <a className="navBarLink" onClick={() => navigate("/Members")}>Members</a>
          </li>
          <li>
            <a className="navBarLink" onClick={() => navigate("/AboutUs")}>About us</a>
          </li>
        </ul>
        <button onClick={() => navigate("/LogIn")} className="navBarButton">
          log out
        </button>
        <div>
          <img className="navBarImg" src={flaga} alt="Opis zdjęcia" />
        </div>
      </div>
      <button
        onClick={toggleVisibility}
        className="material-symbols-outlined hamburger"
      >
        menu
      </button>
    </div>
  );
};

export default NavBar;
