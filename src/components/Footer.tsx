import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, CreditCard, Smartphone } from 'lucide-react';
import { Language, t } from '../lib/translations';

interface FooterProps {
  lang: Language;
  onNavigate: (page: string) => void;
}

export function Footer({ lang, onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#FF5722] text-white p-2 rounded-lg">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-xl text-white">MT STORE</span>
            </div>
            <p className="text-sm mb-4">
              {lang === 'en'
                ? 'Your trusted destination for the latest smartphones and accessories. Quality products, competitive prices, and exceptional service.'
                : 'Điểm đến đáng tin cậy cho điện thoại thông minh và phụ kiện mới nhất. Sản phẩm chất lượng, giá cạnh tranh và dịch vụ xuất sắc.'}
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#FF5722] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#FF5722] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#FF5722] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#FF5722] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">{t('quickLinks', lang)}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#FF5722] transition-colors">
                  {t('home', lang)}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#FF5722] transition-colors">
                  {t('shop', lang)}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-[#FF5722] transition-colors">
                  {t('categories', lang)}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('deals')} className="hover:text-[#FF5722] transition-colors">
                  {t('deals', lang)}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#FF5722] transition-colors">
                  {t('about', lang)}
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white mb-4">{t('customerService', lang)}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#FF5722] transition-colors">
                  {t('contact', lang)}
                </button>
              </li>
              <li>
                <button className="hover:text-[#FF5722] transition-colors">{t('shipping', lang)}</button>
              </li>
              <li>
                <button className="hover:text-[#FF5722] transition-colors">{t('returns', lang)}</button>
              </li>
              <li>
                <button className="hover:text-[#FF5722] transition-colors">{t('warranty', lang)}</button>
              </li>
              <li>
                <button className="hover:text-[#FF5722] transition-colors">FAQ</button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white mb-4">{t('legal', lang)}</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <button className="hover:text-[#FF5722] transition-colors">{t('terms', lang)}</button>
              </li>
              <li>
                <button className="hover:text-[#FF5722] transition-colors">{t('privacy', lang)}</button>
              </li>
            </ul>
            <div>
              <h4 className="text-white text-sm mb-2">{t('paymentMethods', lang)}</h4>
              <div className="flex gap-2 flex-wrap">
                <div className="bg-gray-800 px-3 py-1 rounded flex items-center gap-1 text-xs">
                  <CreditCard className="w-4 h-4" />
                  Visa
                </div>
                <div className="bg-gray-800 px-3 py-1 rounded flex items-center gap-1 text-xs">
                  <CreditCard className="w-4 h-4" />
                  Mastercard
                </div>
                <div className="bg-gray-800 px-3 py-1 rounded flex items-center gap-1 text-xs">
                  <CreditCard className="w-4 h-4" />
                  PayPal
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © 2025 MT STORE.{' '}
            {lang === 'en' ? 'All rights reserved.' : 'Đã đăng ký bản quyền.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
