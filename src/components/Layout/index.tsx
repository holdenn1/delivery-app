import React from 'react';
import styles from './styles.module.scss'
import {Children} from './../../types';
import AppNavigation from "../AppNavigation/AppNavigation";

function Layout({children}: Children) {
  return (
    <div className={styles.wrapper}>
      <AppNavigation/>
      {children}
    </div>
  );
}

export default Layout;