import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
    <div>
    <nav>
    <div class="nav-wrapper teal lighten-2">
      <a href="#" class="brand-logo">Car Rental System</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>Welcome {localStorage.getItem('name')}</li>
      <li><a href="/">Home</a></li>
      <li><a href="/cars">Book Car</a></li>
      <li><a href="/login">Login</a></li>
      </ul>
    </div>
  </nav>
  </div>
    );
  }
}
export default Navbar;
