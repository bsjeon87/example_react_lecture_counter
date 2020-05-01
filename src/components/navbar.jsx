import React, { Component } from "react";

//stateless functional component (sfc)
//const NavBar = (props) => {
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
/*
class NavBar extends Component {
  render() {
    //this.props.ref_counters[0].value += 2; // referece로 받는경우 다른 component값도 업데이트됨.
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}*/

export default NavBar;
