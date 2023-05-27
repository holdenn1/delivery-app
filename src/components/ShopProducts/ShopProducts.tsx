import React, {useEffect} from 'react';
import styles from './ShopProducts.module.scss'
import {useParams} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {fetchShopProducts} from "../../store/actions/fetchShopProducts";
import {addToCart, sumOrder} from "../../store/slices/shopSlice";
import {Product} from "../../types";

function ShopProducts() {
  const {shop} = useParams()
  const dispatch = useAppDispatch();
  const {products} = useAppSelector(state => state.shop)

  useEffect(() => {
    if (shop) {
      dispatch(fetchShopProducts(shop))
    }
  },[shop])


  function addProductToCart(product: Product) {
    dispatch(addToCart(product))
    dispatch(sumOrder())
  }

  return (
    <div className={styles.wrapper}>
      {products.map(product => (
        <div className={styles.product} key={product.id}>
          <img className={styles.productImg}
               src={product.cover}
               alt=""/>
          <h3 className={styles.titleProduct}>{product.title}</h3>
          <div className={styles.priceAndAddToCart}>
            <span className={styles.price}>{product.price} uah</span>
            <button onClick={() => addProductToCart(product)} className={styles.addToCartBtn}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopProducts;