import React from "react";
import { NavLink } from "react-router-dom"; // this is to handle a link but a special link that show a color of link differently if we are on the page of that link

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          MY PLACES
        </NavLink>
      </li>
      <li>
        <NavLink to="/places/new">
          ADD PLACES
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
