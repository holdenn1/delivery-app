import React from 'react';
import styles from "./ConfirmOrder.module.scss";
import {useAppSelector} from "../../hooks/reduxHooks";

function ConfirmOrder() {
  const {orderProducts} = useAppSelector(state => state.shop)

  const amountOrder = orderProducts.reduce((acc, cur) => {
    const price = cur.amount * cur.price
    acc += price
    return acc
  }, 0)

  return (
    <div className={styles.btnContainer}>
      <span className={styles.totalPrice}>Total price: {amountOrder} uah</span>
      <button className={styles.btn}>Submit</button>
    </div>
  );
}

export default ConfirmOrder;