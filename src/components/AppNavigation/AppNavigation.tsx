import React from 'react';
import styles from './AppNavigation.module.scss'
import {NavLink} from "react-router-dom";

function AppNavigation() {
  const activeLink = ({isActive}: any) => isActive ? styles.activeLink : styles.link;
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <NavLink className={activeLink} to={'/'}>Shop</NavLink>
        <div className={styles.verticaLLive}/>
        <NavLink className={activeLink} to={'cart'}>Shopping Cart</NavLink>
      </div>
    </div>
  );
}

export default AppNavigation;