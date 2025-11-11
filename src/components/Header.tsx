import React from 'react';
import { Search, User, Heart, ShoppingCart, Menu, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Language, t } from '../lib/translations';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  cartItemsCount: number;
  wishlistCount?: number;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ lang, onLanguageChange, cartItemsCount, wishlistCount = 0, onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { key: 'home', label: t('home', lang), page: 'home' },
    { key: 'shop', label: t('shop', lang), page: 'shop' },
    { key: 'categories', label: t('categories', lang), page: 'categories' },
    { key: 'deals', label: t('deals', lang), page: 'deals' },
    { key: 'contact', label: t('contact', lang), page: 'contact' },
    { key: 'about', label: t('about', lang), page: 'about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#FF5722] text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p className="text-sm">
            {lang === 'en' ? '🎉 Free Shipping on Orders Over $100!' : '🎉 Miễn Phí Vận Chuyển Đơn Hàng Trên $100!'}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onLanguageChange(lang === 'en' ? 'vi' : 'en')}
              className="flex items-center gap-1 text-sm hover:opacity-80 transition-opacity"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? 'EN' : 'VI'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
            <div className="bg-[#FF5722] text-white p-2 rounded-lg">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <span className="text-2xl text-[#FF5722]">MT STORE</span>
          </button>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={t('search', lang)}
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#FF5722] focus:ring-0"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Button variant="ghost" className="gap-2" onClick={() => onNavigate('account')}>
                <User className="w-5 h-5" />
                <span className="text-sm">{t('account', lang)}</span>
              </Button>
              <Button variant="ghost" className="gap-2 relative" onClick={() => onNavigate('wishlist')}>
                <Heart className="w-5 h-5" />
                <span className="text-sm">{t('wishlist', lang)}</span>
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-[#FF5722] text-white border-0 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {wishlistCount}
                  </Badge>
                )}
              </Button>
              <Button
                variant="ghost"
                className="gap-2 relative"
                onClick={() => onNavigate('cart')}
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="text-sm">{t('cart', lang)}</span>
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-[#FF5722] text-white border-0 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Mobile Icons */}
            <div className="flex lg:hidden items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => onNavigate('wishlist')} className="relative">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-[#FF5722] text-white border-0 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {wishlistCount}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => onNavigate('cart')} className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-[#FF5722] text-white border-0 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder={t('search', lang)}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#FF5722] focus:ring-0"
            />
          </div>
        </div>
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden lg:block border-t">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-1">
            {navItems.map((item) => (
              <li key={item.key}>
                <Button
                  variant="ghost"
                  onClick={() => onNavigate(item.page)}
                  className={`px-6 py-6 rounded-none hover:text-[#FF5722] hover:border-b-2 hover:border-[#FF5722] ${
                    currentPage === item.page ? 'text-[#FF5722] border-b-2 border-[#FF5722]' : ''
                  }`}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      onNavigate(item.page);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full justify-start ${
                      currentPage === item.page ? 'text-[#FF5722] bg-orange-50' : ''
                    }`}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
              <li className="pt-4 border-t">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => {
                    onNavigate('account');
                    setMobileMenuOpen(false);
                  }}
                >
                  <User className="w-5 h-5" />
                  {t('account', lang)}
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => {
                    onNavigate('wishlist');
                    setMobileMenuOpen(false);
                  }}
                >
                  <Heart className="w-5 h-5" />
                  {t('wishlist', lang)}
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
