import React, {useContext} from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
  const ctx = useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Користувачі</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Адмін</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Вийти</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
