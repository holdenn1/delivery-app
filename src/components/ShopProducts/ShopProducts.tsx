import React from 'react';
import styles from './ShopProducts.module.scss'

function ShopProducts() {
  return (
    <div className={styles.wrapper}>

      <div className={styles.product}>
        <img className={styles.productImg}
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"
             alt=""/>
        <h3 className={styles.titleProduct}>Lorem ipsum dolor.</h3>
        <div className={styles.priceAndAddToCart}>
          <span className={styles.price}>240 uah</span>
          <button className={styles.addToCartBtn}>Add to Cart</button>
        </div>
      </div>
      <div className={styles.product}>
        <img className={styles.productImg}
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"
             alt=""/>
        <h3 className={styles.titleProduct}>Lorem ipsum dolor.</h3>
        <div className={styles.priceAndAddToCart}>
          <span className={styles.price}>240 uah</span>
          <button className={styles.addToCartBtn}>add</button>
        </div>
      </div>
      <div className={styles.product}>
        <img className={styles.productImg}
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"
             alt=""/>
        <h3 className={styles.titleProduct}>Lorem ipsum dolor.</h3>
        <div className={styles.priceAndAddToCart}>
          <span className={styles.price}>240 uah</span>
          <button className={styles.addToCartBtn}>add</button>
        </div>
      </div>
      <div className={styles.product}>
        <img className={styles.productImg}
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"
             alt=""/>
        <h3 className={styles.titleProduct}>Lorem ipsum dolor.</h3>
        <div className={styles.priceAndAddToCart}>
          <span className={styles.price}>240 uah</span>
          <button className={styles.addToCartBtn}>add</button>
        </div>
      </div>
      <div className={styles.product}>
        <img className={styles.productImg}
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"
             alt=""/>
        <h3 className={styles.titleProduct}>Lorem ipsum dolor.</h3>
        <div className={styles.priceAndAddToCart}>
          <span className={styles.price}>240 uah</span>
          <button className={styles.addToCartBtn}>add</button>
        </div>
      </div>
    </div>
  );
}

export default ShopProducts;