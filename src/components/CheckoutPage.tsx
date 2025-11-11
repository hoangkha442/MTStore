import React from 'react';
import { ChevronLeft, Check, CreditCard, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Language, t } from '../lib/translations';
import { CartItem } from './CartPage';

interface CheckoutPageProps {
  lang: Language;
  cartItems: CartItem[];
  onNavigate: (page: string, params?: any) => void;
  onPlaceOrder: (orderData: any) => void;
}

export function CheckoutPage({ lang, cartItems, onNavigate, onPlaceOrder }: CheckoutPageProps) {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    paymentMethod: 'card',
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePlaceOrder = () => {
    const orderData = {
      ...formData,
      items: cartItems,
      subtotal,
      shipping,
      tax,
      total,
      orderNumber: `MT${Date.now()}`,
      date: new Date().toLocaleDateString(),
    };
    onPlaceOrder(orderData);
    onNavigate('order-confirmation', { order: orderData });
  };

  const steps = [
    { number: 1, label: t('shippingInfo', lang) },
    { number: 2, label: t('paymentMethod', lang) },
    { number: 3, label: t('reviewOrder', lang) },
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => onNavigate('cart')}
          className="mb-6 gap-2 text-gray-600 hover:text-[#FF5722]"
        >
          <ChevronLeft className="w-4 h-4" />
          {lang === 'en' ? 'Back to Cart' : 'Quay Lại Giỏ Hàng'}
        </Button>

        <h1 className="text-3xl md:text-4xl text-gray-900 mb-8">{t('checkout', lang)}</h1>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {steps.map((s, index) => (
              <React.Fragment key={s.number}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      step >= s.number
                        ? 'bg-[#FF5722] text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step > s.number ? <Check className="w-6 h-6" /> : s.number}
                  </div>
                  <span className="text-sm mt-2 text-center hidden sm:block">{s.label}</span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 w-16 md:w-32 mx-2 ${
                      step > s.number ? 'bg-[#FF5722]' : 'bg-gray-200'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border p-6">
              {/* Step 1: Shipping Information */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl text-gray-900 mb-6">{t('shippingInfo', lang)}</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName" className="mb-2 block">
                        {t('fullName', lang)} *
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="mb-2 block">
                          {t('email', lang)} *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="mb-2 block">
                          {t('phone', lang)} *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address" className="mb-2 block">
                        {t('address', lang)} *
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city" className="mb-2 block">
                          {t('city', lang)} *
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="country" className="mb-2 block">
                          {t('country', lang)} *
                        </Label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode" className="mb-2 block">
                          {t('zipCode', lang)} *
                        </Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Payment Method */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl text-gray-900 mb-6">{t('paymentMethod', lang)}</h2>
                  <div className="space-y-4">
                    <button
                      onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: 'card' }))}
                      className={`w-full p-6 border-2 rounded-lg flex items-center gap-4 transition-colors ${
                        formData.paymentMethod === 'card'
                          ? 'border-[#FF5722] bg-orange-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <CreditCard className="w-8 h-8 text-[#FF5722]" />
                      <div className="text-left">
                        <h3 className="text-gray-900">
                          {lang === 'en' ? 'Credit/Debit Card' : 'Thẻ Tín Dụng/Ghi Nợ'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {lang === 'en' ? 'Pay securely with your card' : 'Thanh toán an toàn bằng thẻ'}
                        </p>
                      </div>
                    </button>
                    <button
                      onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: 'paypal' }))}
                      className={`w-full p-6 border-2 rounded-lg flex items-center gap-4 transition-colors ${
                        formData.paymentMethod === 'paypal'
                          ? 'border-[#FF5722] bg-orange-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                        P
                      </div>
                      <div className="text-left">
                        <h3 className="text-gray-900">PayPal</h3>
                        <p className="text-sm text-gray-600">
                          {lang === 'en' ? 'Pay with your PayPal account' : 'Thanh toán bằng PayPal'}
                        </p>
                      </div>
                    </button>
                    <button
                      onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: 'cod' }))}
                      className={`w-full p-6 border-2 rounded-lg flex items-center gap-4 transition-colors ${
                        formData.paymentMethod === 'cod'
                          ? 'border-[#FF5722] bg-orange-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <Smartphone className="w-8 h-8 text-[#FF5722]" />
                      <div className="text-left">
                        <h3 className="text-gray-900">
                          {lang === 'en' ? 'Cash on Delivery' : 'Thanh Toán Khi Nhận Hàng'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {lang === 'en' ? 'Pay when you receive' : 'Thanh toán khi nhận hàng'}
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Review Order */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl text-gray-900 mb-6">{t('reviewOrder', lang)}</h2>
                  
                  {/* Order Items */}
                  <div className="mb-6">
                    <h3 className="text-gray-900 mb-4">{t('orderDetails', lang)}</h3>
                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-lg">
                          <div className="text-gray-900 flex-1">
                            {item.name} x {item.quantity}
                          </div>
                          <div className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Info */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-gray-900 mb-3">{t('shippingInfo', lang)}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>{formData.fullName}</p>
                      <p>{formData.email}</p>
                      <p>{formData.phone}</p>
                      <p>{formData.address}</p>
                      <p>
                        {formData.city}, {formData.country} {formData.zipCode}
                      </p>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-gray-900 mb-2">{t('paymentMethod', lang)}</h3>
                    <p className="text-sm text-gray-600 capitalize">{formData.paymentMethod}</p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <Button variant="outline" onClick={handlePreviousStep} className="flex-1">
                    {t('back', lang)}
                  </Button>
                )}
                {step < 3 ? (
                  <Button
                    onClick={handleNextStep}
                    className="flex-1 bg-[#FF5722] hover:bg-[#E64A19] text-white"
                  >
                    {t('next', lang)}
                  </Button>
                ) : (
                  <Button
                    onClick={handlePlaceOrder}
                    className="flex-1 bg-[#FF5722] hover:bg-[#E64A19] text-white"
                  >
                    {t('placeOrder', lang)}
                  </Button>
                )}
              </div>
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

              <div className="text-sm text-gray-600 space-y-2">
                <p>{cartItems.length} {lang === 'en' ? 'items' : 'sản phẩm'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
