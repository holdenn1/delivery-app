import React from 'react';
import styles from './Orders.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import deleteProduct from './../../assets/icons/icons8-delete-30.png';
import {Field} from 'formik';
import {deleteFromCart} from "../../store/slices/shopSlice";

function Orders() {

  const dispatch = useAppDispatch()

  const {orderProducts} = useAppSelector(state => state.shop)
  return (
    <div className={styles.wrapper}>
      {orderProducts.length ? (
        orderProducts.map(product => (
          <div className={styles.orderItem} key={product.id}>
            <img
              className={styles.deleteProduct}
              onClick={() => dispatch(deleteFromCart(product))}
              src={deleteProduct}
              alt=""/>
            <img className={styles.orderImg}
                 src={product.cover} alt=""/>
            <div className={styles.productDescription}>
              <div className={styles.title}>
                <h3 className={styles.productName}>{product.title}</h3>
                <span className={styles.productPrice}>Price: {product.price} uah</span>
              </div>
              <Field className={styles.amount} type="number"/>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.emptyCartWrapper}>
          <p className={styles.emptyCart}>The cart is still empty</p>
        </div>
      )}
    </div>
  );
}

export default Orders;