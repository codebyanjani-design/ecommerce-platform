"use client";

import { useCart } from '../context/CartContext';
import styles from './CartItem.module.css';

export default function CartItem({ item }) {
  const { addItemToCart, removeItemFromCart } = useCart();

  const handleAdd = () => {
    addItemToCart(item);
  };

  const handleRemove = () => {
    removeItemFromCart(item.id);
  };

  return (
    <div className={styles.itemContainer}>
      <img src={item.image} alt={item.name} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
      </div>
      <div className={styles.actions}>
        <button onClick={handleRemove} className={styles.btn}>-</button>
        <span className={styles.quantity}>{item.quantity}</span>
        <button onClick={handleAdd} className={styles.btn}>+</button>
      </div>
      <div className={styles.itemTotal}>
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}
