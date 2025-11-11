import React from 'react';
import { ChevronRight, Truck, Shield, RotateCcw, Headphones } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ProductCard } from './ProductCard';
import { Language, t } from '../lib/translations';
import { Product, products, categories } from '../lib/data';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  lang: Language;
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (product: Product) => void;
  wishlistIds?: string[];
  onToggleWishlist?: (productId: string) => void;
}

export function HomePage({ lang, onNavigate, onAddToCart, wishlistIds = [], onToggleWishlist }: HomePageProps) {
  const [email, setEmail] = React.useState('');
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 12,
    minutes: 34,
    seconds: 56,
  });

  // Countdown timer for deals
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const featuredProducts = products.filter((p) => p.featured);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
  const deals = products.filter((p) => p.isDeal);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
                {t('heroTitle', lang)}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                {t('heroSubtitle', lang)}
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => onNavigate('shop')}
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-8 py-6 text-lg gap-2"
                >
                  {t('shopNow', lang)}
                  <ChevronRight className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onNavigate('deals')}
                  className="border-[#FF5722] text-[#FF5722] hover:bg-orange-50 px-8 py-6 text-lg"
                >
                  {t('deals', lang)}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758348844351-48e1ec64cd96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwZmxhZ3NoaXB8ZW58MXx8fHwxNzYyNTg2ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hero Phone"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[#FF5722] text-white p-6 rounded-full shadow-lg">
                <p className="text-sm">{lang === 'en' ? 'UP TO' : 'LÊN TỚI'}</p>
                <p className="text-3xl">30%</p>
                <p className="text-sm">{lang === 'en' ? 'OFF' : 'GIẢM'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">{t('featuredCategories', lang)}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onNavigate('shop', { category: category.id })}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-left">
                    <h3 className="text-white text-2xl mb-2">
                      {lang === 'en' ? category.name : category.nameVi}
                    </h3>
                    <span className="text-[#FF5722] flex items-center gap-1">
                      {t('shopNow', lang)}
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Deals of the Day */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-2">{t('dealsOfTheDay', lang)}</h2>
              <p className="text-gray-600">{lang === 'en' ? 'Limited time offers!' : 'Ưu đãi có thời hạn!'}</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <p className="text-gray-600">{t('endsIn', lang)}:</p>
              <div className="flex gap-2">
                <div className="bg-[#FF5722] text-white px-3 py-2 rounded-lg text-center min-w-[60px]">
                  <div className="text-2xl">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs">{lang === 'en' ? 'Hours' : 'Giờ'}</div>
                </div>
                <div className="bg-[#FF5722] text-white px-3 py-2 rounded-lg text-center min-w-[60px]">
                  <div className="text-2xl">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs">{lang === 'en' ? 'Mins' : 'Phút'}</div>
                </div>
                <div className="bg-[#FF5722] text-white px-3 py-2 rounded-lg text-center min-w-[60px]">
                  <div className="text-2xl">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs">{lang === 'en' ? 'Secs' : 'Giây'}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {deals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                lang={lang}
                onViewDetails={(id) => onNavigate('product', { id })}
                onAddToCart={onAddToCart}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl text-gray-900">{t('newArrivals', lang)}</h2>
            <Button
              variant="ghost"
              onClick={() => onNavigate('shop')}
              className="text-[#FF5722] hover:text-[#E64A19] gap-1"
            >
              {t('viewAll', lang)}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                lang={lang}
                onViewDetails={(id) => onNavigate('product', { id })}
                onAddToCart={onAddToCart}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <Truck className="w-8 h-8 text-[#FF5722]" />
              </div>
              <h3 className="text-gray-900 mb-2">{t('freeShipping', lang)}</h3>
              <p className="text-sm text-gray-600">{t('freeShippingDesc', lang)}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8 text-[#FF5722]" />
              </div>
              <h3 className="text-gray-900 mb-2">{t('warranty', lang)}</h3>
              <p className="text-sm text-gray-600">{t('warrantyDesc', lang)}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <RotateCcw className="w-8 h-8 text-[#FF5722]" />
              </div>
              <h3 className="text-gray-900 mb-2">{t('returns', lang)}</h3>
              <p className="text-sm text-gray-600">{t('returnsDesc', lang)}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <Headphones className="w-8 h-8 text-[#FF5722]" />
              </div>
              <h3 className="text-gray-900 mb-2">{t('support', lang)}</h3>
              <p className="text-sm text-gray-600">{t('supportDesc', lang)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-[#FF5722]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-4">{t('newsletter', lang)}</h2>
            <p className="text-lg mb-8 opacity-90">{t('newsletterDesc', lang)}</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t('emailPlaceholder', lang)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-0"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">
                {t('subscribe', lang)}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
