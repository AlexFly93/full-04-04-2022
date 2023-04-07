import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavMenu.module.scss";

const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.title}>
        Home Page
      </Link>
      <ul>
        <Link to="/users">users</Link>
        <Link to="/groups">groups</Link>
        <Link to="/tasks">tasks</Link>
      </ul>
    </nav>
  );
};

export default NavMenu;
