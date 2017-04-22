import React, { Component } from 'react';
class Signup extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="six columns">
            Create an Account!
          </div>
        </div>
        <form>
          <div class="row">
            <div class="six columns">
              <label for="usernameInput">Username</label>
              <input type="username" placeholder="Username" id="usernameInput" />
            </div>
          </div>
          <div class="row">
            <div class="six columns">
              <label for="passwordInput">Password</label>
              <input type="password" placeholder="******" id="passwordInput" />
            </div>
          </div>
          <div class="row">
            <div class="six columns">
              <input class="button-primary" type="submit" value="Sign Up" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Signup;