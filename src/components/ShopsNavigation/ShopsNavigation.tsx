import React from 'react';
import styles from './ShopsNavigation.module.scss';
import {NavLink} from "react-router-dom";
import {ShopNavigation} from "../../types";
import {useAppSelector} from "../../hooks/reduxHooks";
import classNames from "classnames";
import {notify} from "../Toast";

function ShopsNavigation() {

  const {orderProducts} = useAppSelector(state => state.shop)

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
            <li key={shop.id}
                className={classNames(styles.shopsItem,
                  {[styles.isAddToCart]: orderProducts.length})}>
              <NavLink
                className={activeLink}
                onClick={(e) => {
                  if (orderProducts.length) {
                    e.preventDefault()
                    notify('You can only order from one store', 'warning')
                  }
                }} to={`/${shop.link}`}>{shop.shop}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ShopsNavigation;