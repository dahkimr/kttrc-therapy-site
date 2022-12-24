import React from "react";
import { Navbar as BNavbar, Nav, Container } from "react-bootstrap";

import styles from "./styles.module.css";
import newStyles from "./styles.css";

const Navbar = () => (
  <nav className={styles.navbar} class="navbar navbar-expand-sm">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
