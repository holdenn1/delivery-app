import React from 'react';
import styles from "./ConfirmOrder.module.scss";

function ConfirmOrder() {
  return (
    <div className={styles.btnContainer}>
      <span className={styles.totalPrice}>Total price: 999.99 uah</span>
      <button className={styles.btn}>t</button>
    </div>
  );
}

export default ConfirmOrder;