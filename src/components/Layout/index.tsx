import React from 'react';
import styles from './styles.module.scss'
import {Children} from './../../types';
import AppNavigation from "../AppNavigation/AppNavigation";

function Layout({children}: Children) {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <AppNavigation/>
        {children}
      </div>
    </div>
  );
}

export default Layout;