import React, { Component } from "react";

/*
Because all the data here is calculated using props, we can 
actually make this a stateless functional componenet by using
a function instead of a class. . .
*/

/*class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge bg-pill bg-secondary">
              {this.props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;*/

// ^        |
// | Versus |
// |        v

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge bg-pill bg-secondary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
