import React from 'react';
import styles from './ShopsNavigation.module.scss';
import {NavLink} from "react-router-dom";
import {ShopNavigation} from "../../types";

function ShopsNavigation() {

  const activeLink = ({isActive}: any) => isActive ? styles.activeLink : styles.link;

  const shops: ShopNavigation[] = [
    {id: 1, shop: 'Big Burger', link: 'big-burger'},
    {id: 2, shop: 'Pizza Express', link: 'pizza-express'},
    {id: 3, shop: 'Fit Food', link: 'fit-food'},
    {id: 4, shop: 'Best Grill', link: 'best-grill'},
    {id: 5, shop: 'NY Burger', link: 'ny-burger'},
  ]

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.titleNav}>Shops</h3>
      <nav className={styles.nav}>
        <ul className={styles.shopsList}>
          {shops.map(shop => (
            <li key={shop.id} className={styles.shopsItem}>
              <NavLink className={activeLink} to={`/${shop.link}`}>{shop.shop}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ShopsNavigation;