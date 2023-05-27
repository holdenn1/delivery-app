import React from 'react';
import styles from "./ConfirmOrder.module.scss";
import {useAppSelector} from "../../hooks/reduxHooks";

function ConfirmOrder() {
  const {amountOrder} = useAppSelector(state => state.shop)
  return (
    <div className={styles.btnContainer}>
      <span className={styles.totalPrice}>Total price: {amountOrder} uah</span>
      <button className={styles.btn}>Submit</button>
    </div>
  );
}

export default ConfirmOrder;