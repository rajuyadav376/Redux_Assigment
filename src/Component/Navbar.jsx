import React from "react";
import { Link } from "react-router-dom";
import '../component.css/Navbar.css'


const Navbar = () => {

  return (
    
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/student">STUDENT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;