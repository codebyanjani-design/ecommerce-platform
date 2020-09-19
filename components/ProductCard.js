"use client";

import { useCart } from '../context/CartContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { addItemToCart } = useCart();

  const addToCartHandler = () => {
    addItemToCart(product);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* Using standard img for simplicity without configuring Next Image domains */}
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.category}>{product.category}</div>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <button className={styles.button} onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
