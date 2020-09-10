"use client";

import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import Link from 'next/link';
import styles from './checkout.module.css';

export default function CheckoutPage() {
  const { items, totalAmount, clearCart } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successCard}>
          <div className={styles.icon}>🎉</div>
          <h1>Order Confirmed!</h1>
          <p>Thank you for your purchase. We have received your order and will begin processing it shortly.</p>
          <Link href="/" className={styles.homeLink}>
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h2>Your cart is empty.</h2>
        <Link href="/" className={styles.homeLink}>
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.content}>
        <div className={styles.formSection}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Shipping Information</h2>
            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input type="text" required />
            </div>
            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input type="email" required />
            </div>
            <div className={styles.formGroup}>
              <label>Address</label>
              <input type="text" required />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>City</label>
                <input type="text" required />
              </div>
              <div className={styles.formGroup}>
                <label>Postal Code</label>
                <input type="text" required />
              </div>
            </div>
            
            <h2>Payment Details</h2>
            <div className={styles.formGroup}>
              <label>Card Number</label>
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" required />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Expiry Date</label>
                <input type="text" placeholder="MM/YY" required />
              </div>
              <div className={styles.formGroup}>
                <label>CVC</label>
                <input type="text" placeholder="123" required />
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Place Order (${totalAmount.toFixed(2)})
            </button>
          </form>
        </div>
        <div className={styles.summarySection}>
          <h2>Order Summary</h2>
          <div className={styles.summaryItems}>
            {items.map((item) => (
              <div key={item.id} className={styles.summaryItem}>
                <span className={styles.itemName}>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
