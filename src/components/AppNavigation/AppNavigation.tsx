import React from 'react';
import styles from './AppNavigation.module.scss'
import {NavLink} from "react-router-dom";

function AppNavigation() {
  const activeLink = ({isActive}: any) => isActive ? styles.activeLink : styles.link;
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navigation}>
        <NavLink className={activeLink} to={'/big-burger'}>Shop</NavLink>
        <div className={styles.verticaLLive}/>
        <NavLink className={activeLink} to={'cart'}>Shopping Cart</NavLink>
      </nav>
    </div>
  );
}

export default AppNavigation;