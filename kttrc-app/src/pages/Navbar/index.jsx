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
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
          {/* <a className="nav-link" href="#">Contact</a> */}
        </li>
        {/* <li className="nav-item">
          <a className={`${styles.disabled} nav-link`} href="#">Treatment</a>
        </li>
        <li className="nav-item">
          <a className={`${styles.disabled} nav-link`} href="#">Books</a>
        </li>
        <li className="nav-item">
          <a className={`${styles.disabled} ${styles.lastNavLink} nav-link`} href="#">Healing Corner</a>
        </li> */}
      </ul>
    </div>
  </nav>
);

export default Navbar;
