import styles from './NavBar.module.scss';
import { NavLink, useLocation, matchPath } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.logo} >
                <img src='/images/BHP-EFEKT_logo.png' alt='logo' />
            </div>
            <div className={styles.links} >

            </div>
        </div>
    );
  };

  export default NavBar;