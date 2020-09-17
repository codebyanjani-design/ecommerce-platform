"use client";

import Link from 'next/link';
import CartIcon from './CartIcon';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          NextStore
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/cart">
            <CartIcon />
          </Link>
        </nav>
      </div>
    </header>
  );
}
