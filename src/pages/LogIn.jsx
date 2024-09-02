import EKlogo from "../../public/img/EKlogo2.png";
import LogInForm from "../components/LogInForm";
const LogIn = () => {
  return (
    <>
      <div className="mainLogInContainer">
        <img className="Logo" src={EKlogo} alt="Logo" />
        <LogInForm/>
      </div>
    </>
  );
};

export default LogIn;
