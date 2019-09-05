import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const activeStyle = { color: 'green' };

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink exact activeStyle={activeStyle} to="/">
          Home page
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to="/about">
          About page
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to="/contact">
          Contact page
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to="/articles">
          Articles page
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
