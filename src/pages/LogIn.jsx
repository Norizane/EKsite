import EKlogo from "../../public/img/EKlogo2.png";
// import LogInForm from "../components/LogInForm";
import SignInForm from "../components/SignInForm";
const LogIn = () => {
  return (
    <>
      <div className="mainLogInContainer">
        <img className="Logo" src={EKlogo} alt="Logo" />
        {/* <LogInForm/> */}
        <SignInForm/>
      </div>
    </>
  );
};

export default LogIn;
