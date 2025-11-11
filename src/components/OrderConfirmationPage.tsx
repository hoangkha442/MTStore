import React from 'react';
import { CheckCircle2, Package, Truck, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Language, t } from '../lib/translations';

interface OrderConfirmationPageProps {
  lang: Language;
  orderData: any;
  onNavigate: (page: string) => void;
}

export function OrderConfirmationPage({ lang, orderData, onNavigate }: OrderConfirmationPageProps) {
  if (!orderData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-gray-600">{lang === 'en' ? 'No order found' : 'Không tìm thấy đơn hàng'}</p>
        <Button onClick={() => onNavigate('home')} className="mt-4">
          {t('backToHome', lang)}
        </Button>
      </div>
    );
  }

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl text-gray-900 mb-2">{t('orderConfirmed', lang)}</h1>
            <p className="text-lg text-gray-600">{t('thankYou', lang)}</p>
          </div>

          {/* Order Details Card */}
          <div className="bg-white rounded-lg border p-6 md:p-8 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b">
              <div>
                <p className="text-sm text-gray-600 mb-1">{t('orderNumber', lang)}</p>
                <p className="text-gray-900">{orderData.orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t('orderDate', lang)}</p>
                <p className="text-gray-900">{orderData.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t('estimatedDelivery', lang)}</p>
                <p className="text-gray-900">{estimatedDelivery.toLocaleDateString()}</p>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-8">
              <h2 className="text-xl text-gray-900 mb-4">{t('orderDetails', lang)}</h2>
              <div className="space-y-4">
                {orderData.items.map((item: any) => (
                  <div key={item.id} className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        {item.quantity} x ${item.price}
                        {item.color && ` • ${item.color}`}
                        {item.storage && ` • ${item.storage}`}
                      </p>
                    </div>
                    <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-3 mb-8 pb-8 border-b">
              <div className="flex justify-between text-gray-600">
                <span>{t('subtotal', lang)}</span>
                <span>${orderData.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>{t('shipping', lang)}</span>
                <span>
                  {orderData.shipping === 0
                    ? t('freeShipping', lang)
                    : `$${orderData.shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>{t('tax', lang)}</span>
                <span>${orderData.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl text-gray-900 pt-3">
                <span>{t('total', lang)}</span>
                <span className="text-[#FF5722]">${orderData.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Shipping Information */}
            <div>
              <h3 className="text-gray-900 mb-3">{t('shippingInfo', lang)}</h3>
              <div className="text-gray-600 space-y-1">
                <p>{orderData.fullName}</p>
                <p>{orderData.email}</p>
                <p>{orderData.phone}</p>
                <p>{orderData.address}</p>
                <p>
                  {orderData.city}, {orderData.country} {orderData.zipCode}
                </p>
              </div>
            </div>
          </div>

          {/* Order Tracking Steps */}
          <div className="bg-white rounded-lg border p-6 md:p-8 mb-6">
            <h2 className="text-xl text-gray-900 mb-6">
              {lang === 'en' ? 'Order Status' : 'Trạng Thái Đơn Hàng'}
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#FF5722] rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">
                    {lang === 'en' ? 'Order Confirmed' : 'Đơn Hàng Đã Xác Nhận'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {lang === 'en'
                      ? 'We have received your order'
                      : 'Chúng tôi đã nhận được đơn hàng của bạn'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <Package className="w-6 h-6 text-gray-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">
                    {lang === 'en' ? 'Processing' : 'Đang Xử Lý'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {lang === 'en'
                      ? 'Your order is being prepared'
                      : 'Đơn hàng của bạn đang được chuẩn bị'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <Truck className="w-6 h-6 text-gray-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">
                    {lang === 'en' ? 'Shipped' : 'Đã Giao Cho Đơn Vị Vận Chuyển'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {lang === 'en'
                      ? 'Your order is on the way'
                      : 'Đơn hàng đang trên đường giao'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gray-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">
                    {lang === 'en' ? 'Delivered' : 'Đã Giao Hàng'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {lang === 'en'
                      ? 'Order delivered successfully'
                      : 'Giao hàng thành công'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => onNavigate('home')}
              className="flex-1 bg-[#FF5722] hover:bg-[#E64A19] text-white"
            >
              {t('backToHome', lang)}
            </Button>
            <Button
              variant="outline"
              onClick={() => onNavigate('shop')}
              className="flex-1 border-2"
            >
              {t('continueShopping', lang)}
            </Button>
          </div>

          {/* Email Confirmation Notice */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-sm text-gray-700">
              {lang === 'en'
                ? 'A confirmation email has been sent to'
                : 'Email xác nhận đã được gửi tới'}{' '}
              <span className="text-gray-900">{orderData.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
