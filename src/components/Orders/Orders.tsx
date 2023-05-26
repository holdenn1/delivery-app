import React from 'react';
import styles from './Orders.module.scss'

function Orders() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.orderItem}>
        <img className={styles.orderImg}
             src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg" alt=""/>
        <div className={styles.productDescription}>
          <div className={styles.title}>
            <h3 className={styles.productName}>Lorem ipsum dolor.</h3>
            <span className={styles.productPrice}>Price: 420 uah</span>
          </div>
          <input className={styles.amount} type="number"/>
        </div>
      </div>
    </div>
  );
}

export default Orders;