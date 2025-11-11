import React from 'react';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { Language, t } from '../lib/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
  storage?: string;
}

interface CartPageProps {
  lang: Language;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onNavigate: (page: string) => void;
}

export function CartPage({ lang, cartItems, onUpdateQuantity, onRemoveItem, onNavigate }: CartPageProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl text-gray-900 mb-4">{t('emptyCart', lang)}</h2>
            <p className="text-gray-600 mb-6">
              {lang === 'en'
                ? 'Your shopping cart is empty. Start adding some amazing products!'
                : 'Giỏ hàng của bạn đang trống. Hãy bắt đầu thêm các sản phẩm tuyệt vời!'}
            </p>
            <Button
              onClick={() => onNavigate('shop')}
              className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-8"
            >
              {t('continueShopping', lang)}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl text-gray-900 mb-8">{t('shoppingCart', lang)}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border overflow-hidden">
              {/* Desktop Table Header */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 bg-gray-50 p-4 border-b">
                <div className="col-span-6 text-sm text-gray-600">{t('product', lang)}</div>
                <div className="col-span-2 text-sm text-gray-600 text-center">{t('price', lang)}</div>
                <div className="col-span-2 text-sm text-gray-600 text-center">{t('quantity', lang)}</div>
                <div className="col-span-2 text-sm text-gray-600 text-center">{t('total', lang)}</div>
              </div>

              {/* Cart Items */}
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      {/* Product Info */}
                      <div className="md:col-span-6 flex gap-4">
                        <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 mb-1">{item.brand}</p>
                          <h3 className="text-gray-900 mb-2">{item.name}</h3>
                          {item.color && (
                            <p className="text-sm text-gray-600">
                              {t('color', lang)}: {item.color}
                            </p>
                          )}
                          {item.storage && (
                            <p className="text-sm text-gray-600">
                              {t('storage', lang)}: {item.storage}
                            </p>
                          )}
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-sm text-red-600 hover:text-red-700 mt-2 flex items-center gap-1 md:hidden"
                          >
                            <X className="w-4 h-4" />
                            {t('remove', lang)}
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                        <span className="text-sm text-gray-600 md:hidden">{t('price', lang)}:</span>
                        <span className="text-gray-900">${item.price}</span>
                      </div>

                      {/* Quantity */}
                      <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                        <span className="text-sm text-gray-600 md:hidden">{t('quantity', lang)}:</span>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="px-4 min-w-[40px] text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                        <span className="text-sm text-gray-600 md:hidden">{t('total', lang)}:</span>
                        <span className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="hidden md:block ml-2 text-gray-400 hover:text-red-600"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Button
                variant="outline"
                onClick={() => onNavigate('shop')}
                className="border-2"
              >
                {t('continueShopping', lang)}
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border p-6 sticky top-24">
              <h2 className="text-xl text-gray-900 mb-6">
                {lang === 'en' ? 'Order Summary' : 'Tóm Tắt Đơn Hàng'}
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>{t('subtotal', lang)}</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>{t('shipping', lang)}</span>
                  <span>{shipping === 0 ? t('freeShipping', lang) : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>{t('tax', lang)}</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-gray-900">
                    <span>{t('total', lang)}</span>
                    <span className="text-2xl text-[#FF5722]">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => onNavigate('checkout')}
                className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white py-6"
              >
                {t('checkout', lang)}
              </Button>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {lang === 'en' ? 'Secure Checkout' : 'Thanh Toán An Toàn'}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {lang === 'en' ? 'Free Returns' : 'Đổi Trả Miễn Phí'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
