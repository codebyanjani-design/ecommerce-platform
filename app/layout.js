import './globals.css';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Next.js 14 Ecommerce',
  description: 'A complete ecommerce platform built with Next.js 14 App Router.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="layout-container">
            <Navbar />
            <main className="main-content">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
