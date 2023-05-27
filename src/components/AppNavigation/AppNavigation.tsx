import React from 'react';
import styles from './AppNavigation.module.scss'
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks/reduxHooks";

function AppNavigation() {
  const activeLink = ({isActive}: any) => isActive ? styles.activeLink : styles.link;

  const {orderProducts} = useAppSelector(state => state.shop)

  const shopLink = orderProducts.length ? `/${orderProducts[0].shop}` : '/big-burger'

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navigation}>
        <NavLink className={activeLink} to={shopLink}>Shop</NavLink>
        <div className={styles.verticaLLive}/>
        <NavLink className={activeLink} to={'cart'}>Shopping Cart</NavLink>
      </nav>
    </div>
  );
}

export default AppNavigation;