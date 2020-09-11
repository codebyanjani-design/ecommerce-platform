"use client";

import { useCart } from '../context/CartContext';
import styles from './CartIcon.module.css';

export default function CartIcon() {
  const { items } = useCart();

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <div className={styles.cartIconWrapper}>
      <span className={styles.icon}>🛒</span>
      {numberOfCartItems > 0 && (
        <span className={styles.badge}>{numberOfCartItems}</span>
      )}
    </div>
  );
}
