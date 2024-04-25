import React from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/catalog">Catálogo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;