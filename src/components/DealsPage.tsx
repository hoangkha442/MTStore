import React from 'react';
import { Clock, Zap, TrendingDown } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Language, t } from '../lib/translations';
import { Product, products } from '../lib/data';

interface DealsPageProps {
  lang: Language;
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (product: Product) => void;
  wishlistIds?: string[];
  onToggleWishlist?: (productId: string) => void;
}

export function DealsPage({
  lang,
  onNavigate,
  onAddToCart,
  wishlistIds = [],
  onToggleWishlist,
}: DealsPageProps) {
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashDeals = products.filter((p) => p.originalPrice && p.originalPrice > p.price).slice(0, 8);
  const hotDeals = products.filter((p) => p.rating >= 4.5).slice(0, 8);
  const clearanceSale = products.filter((p) => p.originalPrice).slice(0, 6);

  return (
    <div className="py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-4">
              {lang === 'en' ? 'Amazing Deals' : 'Ưu Đãi Tuyệt Vời'}
            </h1>
            <p className="text-xl opacity-90 mb-6">
              {lang === 'en'
                ? 'Save big on your favorite tech products!'
                : 'Tiết kiệm lớn cho các sản phẩm công nghệ yêu thích!'}
            </p>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6" />
              <span className="text-lg">
                {lang === 'en' ? 'Deals ending in:' : 'Ưu đãi kết thúc sau:'}
              </span>
              <div className="flex gap-2">
                <div className="bg-white text-[#FF5722] px-3 py-1 rounded">
                  <span className="text-2xl">{String(timeLeft.hours).padStart(2, '0')}</span>
                </div>
                <span className="text-2xl">:</span>
                <div className="bg-white text-[#FF5722] px-3 py-1 rounded">
                  <span className="text-2xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
                </div>
                <span className="text-2xl">:</span>
                <div className="bg-white text-[#FF5722] px-3 py-1 rounded">
                  <span className="text-2xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-16">
        {/* Flash Deals */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#FF5722]" />
            </div>
            <div>
              <h2 className="text-3xl text-gray-900">
                {lang === 'en' ? 'Flash Deals' : 'Ưu Đãi Chớp Nhoáng'}
              </h2>
              <p className="text-gray-600">
                {lang === 'en' ? 'Limited time offers - grab them fast!' : 'Ưu đãi có hạn - nhanh tay lên!'}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {flashDeals.map((product) => (
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
        </section>

        {/* Hot Deals */}
        <section className="bg-gray-50 -mx-4 px-4 py-12 md:mx-0 md:rounded-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl text-gray-900">
                {lang === 'en' ? 'Hot Deals' : 'Ưu Đãi Hot'}
              </h2>
              <p className="text-gray-600">
                {lang === 'en' ? 'Best sellers at unbeatable prices' : 'Bán chạy nhất với giá không thể chối từ'}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {hotDeals.map((product) => (
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
        </section>

        {/* Clearance Sale */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">%</span>
            </div>
            <div>
              <h2 className="text-3xl text-gray-900">
                {lang === 'en' ? 'Clearance Sale' : 'Thanh Lý'}
              </h2>
              <p className="text-gray-600">
                {lang === 'en' ? 'Huge discounts on selected items' : 'Giảm giá lớn cho các sản phẩm được chọn'}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clearanceSale.map((product) => (
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
        </section>

        {/* Deal Categories */}
        <section className="py-12 bg-gradient-to-r from-orange-50 to-red-50 -mx-4 px-4 md:mx-0 md:rounded-lg">
          <h2 className="text-3xl text-gray-900 text-center mb-8">
            {lang === 'en' ? 'Shop Deals by Category' : 'Mua Ưu Đãi Theo Danh Mục'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: lang === 'en' ? 'Smartphones' : 'Điện Thoại',
                discount: '30%',
                category: 'smartphones',
              },
              {
                name: lang === 'en' ? 'Tablets' : 'Máy Tính Bảng',
                discount: '25%',
                category: 'tablets',
              },
              {
                name: lang === 'en' ? 'Accessories' : 'Phụ Kiện',
                discount: '40%',
                category: 'accessories',
              },
              {
                name: lang === 'en' ? 'Smartwatches' : 'Đồng Hồ Thông Minh',
                discount: '35%',
                category: 'wearables',
              },
            ].map((cat, index) => (
              <button
                key={index}
                onClick={() => onNavigate('shop', { category: cat.category })}
                className="bg-white p-6 rounded-lg border-2 border-transparent hover:border-[#FF5722] transition-colors group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {index === 0 ? '📱' : index === 1 ? '💻' : index === 2 ? '🎧' : '⌚'}
                </div>
                <h3 className="text-lg text-gray-900 mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-600">
                  {lang === 'en' ? 'Up to' : 'Lên đến'}{' '}
                  <span className="text-[#FF5722]">{cat.discount}</span>{' '}
                  {lang === 'en' ? 'OFF' : 'GIẢM'}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Deal Tips */}
        <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h3 className="text-xl text-gray-900 mb-4">
            💡 {lang === 'en' ? 'Deal Shopping Tips' : 'Mẹo Mua Sắm Ưu Đãi'}
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              ✓{' '}
              {lang === 'en'
                ? 'Check back daily for new flash deals'
                : 'Kiểm tra hàng ngày để có ưu đãi chớp nhoáng mới'}
            </li>
            <li>
              ✓{' '}
              {lang === 'en'
                ? 'Add items to wishlist to get notified about price drops'
                : 'Thêm sản phẩm vào danh sách yêu thích để nhận thông báo khi giảm giá'}
            </li>
            <li>
              ✓{' '}
              {lang === 'en'
                ? 'Combine deals with our free shipping on orders over $500'
                : 'Kết hợp ưu đãi với miễn phí vận chuyển cho đơn hàng trên $500'}
            </li>
            <li>
              ✓{' '}
              {lang === 'en'
                ? 'Subscribe to our newsletter for exclusive member-only deals'
                : 'Đăng ký nhận bản tin để có ưu đãi độc quyền cho thành viên'}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
