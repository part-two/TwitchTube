import React from 'react';

class Signup extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Create a New Account!</h1>
        <form>
          <label>
            Username:<br />
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Password:<br />
            <input type="password" name="password1" />
          </label>
          <label>
            Re-Enter Password:<br />
            <input type="password" name="password2" />
          </label>
          <label>
            E-mail:<br />
            <input type="text" name="email" />
          </label>
          <div>
            <input type="submit" value="Log In" />
            <input type="submit" value="Cancel" />
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
