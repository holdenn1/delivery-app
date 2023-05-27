import React from 'react';
import styles from './Orders.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import deleteProduct from './../../assets/icons/icons8-delete-90.png';
import {deleteFromCart, handleAmountProduct, sumOrder} from "../../store/slices/shopSlice";
import {ProductInCart} from "../../types";

function Orders() {

  const dispatch = useAppDispatch()

  const {orderProducts} = useAppSelector(state => state.shop)

  function handleAmount(e: React.ChangeEvent<HTMLInputElement>, product: ProductInCart) {
    const newAmountValue = +e.target.value
    const isAdd = +e.target.valueAsNumber

    if (newAmountValue > 0) {
      dispatch(handleAmountProduct({product, newAmountValue, isAdd}))
      dispatch(sumOrder())
    }
  }

  function deleteProductFromCart(product: ProductInCart) {
    dispatch(deleteFromCart(product))
    dispatch(sumOrder())
  }

  return (
    <div className={styles.wrapper}>
      {orderProducts.length ? (
        orderProducts.map(product => (
          <div className={styles.orderItem} key={product.id}>
            <img
              className={styles.deleteProduct}
              onClick={() => deleteProductFromCart(product)}
              src={deleteProduct}
              alt=""/>
            <img className={styles.orderImg}
                 src={product.cover} alt=""/>
            <div className={styles.productDescription}>
              <div className={styles.title}>
                <h3 className={styles.productName}>{product.title}</h3>
                <span className={styles.productPrice}>Price: {product.price} uah</span>
              </div>
              <input
                className={styles.amount}
                type="number"
                value={product.amount}
                onChange={(e) => handleAmount(e, product)}/>

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