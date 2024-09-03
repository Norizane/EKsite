
const LogInForm = () => {
  return (
    <div className="formContainer">
          <h1>LogIn</h1>
          <form className="logInForm" action="">

            <input
              className="logInInput"
              type="text"
              id="username"
              name="username"
              placeholder="User name / Email"
              required
            />

            <input
              className="logInInput"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />

            <button type="submit">Zaloguj się</button>

            <a href="#" className="register-link">Nie masz konta? Zarejestruj się</a>
          </form>
        </div>
  )
}

export default LogInForm