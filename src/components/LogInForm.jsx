
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

            <button type="submit">log In</button>

            <a href="#" className="register-link">Don't have an account? Register now</a>
          </form>
        </div>
  )
}

export default LogInForm