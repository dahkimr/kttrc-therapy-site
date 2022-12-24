import React from "react";

import styles from "./styles.module.css";
import newStyles from "./styles.css";

const Navbar = () => (
  <nav className={`${styles.navbar} navbar navbar-expand-sm`}>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
