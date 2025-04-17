import styles from './NavBar.module.scss';
import { NavLink, useLocation, matchPath } from 'react-router-dom';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    return (
        <div className={styles.navBar}>
            <div className={styles.logo} >
                <img src='/images/BHP-EFEKT_logo.png' alt='logo' />
            </div>
            <div className={styles.links} >
                <Link className={clsx(styles.link, location.pathname==="/aboutme"&& styles.linkActive)} to="/aboutme">O mnie</Link>
                <Link className={clsx(styles.link, location.pathname==="/services"&& styles.linkActive)} to="/services">Usługi</Link>
                <Link className={clsx(styles.link, location.pathname==="/services"&& styles.linkActive)} to="/prices">Cennik</Link>
            </div>
        </div>
    );
  };

  export default NavBar;