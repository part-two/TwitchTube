import React from 'react';

class Error extends React.Component {
  constructor() {
    super();
  }

  // change to stateless component

  render() {
    return (
      <div>
        <h1>Hello! Error</h1>
        <h3>Page Not Found!</h3>
      </div>
    );
  }
}

export default Error;
