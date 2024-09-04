const SignInForm = () => {
  return (
    <div className="formContainer">
      <h1>SignIn</h1>
      <form className="SignInForm" action="">
        <input
          className="SignInInput"
          type="text"
          id="username"
          name="username"
          placeholder="User name / Email"
          required
        />

        <input
          className="SignInInput"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />

        <input
          className="SignInInput"
          type="password"
          id="password"
          name="password"
          placeholder="Repeat Password"
          required
        />

        <button type="submit">Sign In</button>

        <a href="#" className="register-link">
          Go back to Log In 
        </a>
      </form>
    </div>
  );
};

export default SignInForm;
