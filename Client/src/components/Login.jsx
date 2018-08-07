import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hello! Login</h1>
        <form>
          <label>
            Username:<br />
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Password:<br />
            <input type="password" name="password" />
          </label>
          <div>
            <input type="submit" value="Log In" />
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
