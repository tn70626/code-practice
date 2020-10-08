import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  // setTimeout(() => {
  //   props.history.push('/about');
  // }, 2000);
  // console.log(props);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <h4 className="brand-logo left">Poke Times</h4>
      </div>
      <ul className="right">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/add-post">Add post</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
