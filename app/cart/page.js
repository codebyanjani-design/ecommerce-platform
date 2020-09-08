"use client";

import { useCart } from '../../context/CartContext';
import CartItem from '../../components/CartItem';
import Link from 'next/link';
import styles from './cart.module.css';

export default function CartPage() {
  const { items, totalAmount } = useCart();

  const hasItems = items.length > 0;

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Your Shopping Cart</h1>
      
      {!hasItems && (
        <div className={styles.emptyCart}>
          <p>Your cart is empty.</p>
          <Link href="/" className={styles.continueShopping}>
            Continue Shopping
          </Link>
        </div>
      )}

      {hasItems && (
        <div className={styles.cartContent}>
          <div className={styles.itemsList}>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className={styles.summary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <Link href="/checkout" className={styles.checkoutButton}>
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
