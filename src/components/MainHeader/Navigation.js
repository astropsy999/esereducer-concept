import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Користувачі</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Адмін</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Вийти</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
