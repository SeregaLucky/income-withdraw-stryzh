import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import routes from '../../routes';

const Header = () => (
  <header className={styles.headerMain}>
    <h1 className={styles.logo}>
      <Link to={routes.BALANCE_PAGE}>LOGO</Link>
    </h1>

    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.BALANCE_PAGE}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Balance
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={routes.INCOME_PAGE}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Income
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={routes.WITHDRAW_PAGE}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Withdraw
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
