import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ShopPage } from './components/ShopPage';
import { ProductDetailsPage } from './components/ProductDetailsPage';
import { CartPage, CartItem } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { OrderConfirmationPage } from './components/OrderConfirmationPage';
import { AccountPage } from './components/AccountPage';
import { WishlistPage } from './components/WishlistPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { DealsPage } from './components/DealsPage';
import { CategoriesPage } from './components/CategoriesPage';
import { Language } from './lib/translations';
import { Product, products } from './lib/data';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';

export default function App() {
  const [lang, setLang] = React.useState<Language>('en');
  const [currentPage, setCurrentPage] = React.useState('home');
  const [pageParams, setPageParams] = React.useState<any>({});
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = React.useState<string[]>([]);
  const [orderData, setOrderData] = React.useState<any>(null);

  const handleNavigate = (page: string, params?: any) => {
    setCurrentPage(page);
    setPageParams(params || {});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (
    product: Product,
    quantity: number = 1,
    options: { color?: string; storage?: string } = {}
  ) => {
    const cartItem: CartItem = {
      id: `${product.id}-${options.color || ''}-${options.storage || ''}`,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      quantity,
      color: options.color,
      storage: options.storage,
    };

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === cartItem.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === cartItem.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, cartItem];
    });

    toast.success(
      lang === 'en'
        ? `${product.name} added to cart!`
        : `${product.name} đã được thêm vào giỏ hàng!`,
      {
        duration: 2000,
      }
    );
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.success(
      lang === 'en' ? 'Item removed from cart' : 'Đã xóa sản phẩm khỏi giỏ hàng',
      { duration: 2000 }
    );
  };

  const handlePlaceOrder = (data: any) => {
    setOrderData(data);
    setCartItems([]);
  };

  const handleAddToWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      if (prev.includes(productId)) {
        toast.success(
          lang === 'en' ? 'Removed from wishlist' : 'Đã xóa khỏi danh sách yêu thích',
          { duration: 2000 }
        );
        return prev.filter((id) => id !== productId);
      } else {
        toast.success(
          lang === 'en' ? 'Added to wishlist' : 'Đã thêm vào danh sách yêu thích',
          { duration: 2000 }
        );
        return [...prev, productId];
      }
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
    toast.success(
      lang === 'en' ? 'Removed from wishlist' : 'Đã xóa khỏi danh sách yêu thích',
      { duration: 2000 }
    );
  };

  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            lang={lang}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleAddToWishlist}
          />
        );
      case 'shop':
        return (
          <ShopPage
            lang={lang}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            initialCategory={pageParams.category}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleAddToWishlist}
          />
        );
      case 'product':
        return (
          <ProductDetailsPage
            productId={pageParams.id}
            lang={lang}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleAddToWishlist}
          />
        );
      case 'cart':
        return (
          <CartPage
            lang={lang}
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onNavigate={handleNavigate}
          />
        );
      case 'checkout':
        return (
          <CheckoutPage
            lang={lang}
            cartItems={cartItems}
            onNavigate={handleNavigate}
            onPlaceOrder={handlePlaceOrder}
          />
        );
      case 'order-confirmation':
        return (
          <OrderConfirmationPage
            lang={lang}
            orderData={pageParams.order || orderData}
            onNavigate={handleNavigate}
          />
        );
      case 'account':
        return <AccountPage lang={lang} onNavigate={handleNavigate} />;
      case 'wishlist':
        return (
          <WishlistPage
            lang={lang}
            wishlistItems={wishlistProducts}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            onAddToCart={handleAddToCart}
            onNavigate={handleNavigate}
          />
        );
      case 'about':
        return <AboutPage lang={lang} />;
      case 'contact':
        return <ContactPage lang={lang} />;
      case 'deals':
        return (
          <DealsPage
            lang={lang}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleAddToWishlist}
          />
        );
      case 'categories':
        return <CategoriesPage lang={lang} onNavigate={handleNavigate} />;
      default:
        return (
          <HomePage
            lang={lang}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleAddToWishlist}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header
        lang={lang}
        onLanguageChange={setLang}
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      <main className="flex-1">{renderPage()}</main>
      <Footer lang={lang} onNavigate={handleNavigate} />
      <Toaster position="bottom-right" />
    </div>
  );
}
