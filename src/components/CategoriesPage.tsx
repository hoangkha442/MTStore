import React from 'react';
import { Smartphone, Tablet, Headphones, Watch, Laptop, Camera, Speaker, Gamepad } from 'lucide-react';
import { Language, t } from '../lib/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CategoriesPageProps {
  lang: Language;
  onNavigate: (page: string, params?: any) => void;
}

export function CategoriesPage({ lang, onNavigate }: CategoriesPageProps) {
  const mainCategories = [
    {
      icon: Smartphone,
      name: lang === 'en' ? 'Smartphones' : 'Điện Thoại',
      description: lang === 'en' ? 'Latest flagship and mid-range phones' : 'Điện thoại cao cấp và tầm trung mới nhất',
      count: '500+',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop',
      category: 'smartphones',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Tablet,
      name: lang === 'en' ? 'Tablets' : 'Máy Tính Bảng',
      description: lang === 'en' ? 'iPads and Android tablets' : 'iPad và máy tính bảng Android',
      count: '120+',
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&auto=format&fit=crop',
      category: 'tablets',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Headphones,
      name: lang === 'en' ? 'Audio' : 'Âm Thanh',
      description: lang === 'en' ? 'Headphones, earbuds & speakers' : 'Tai nghe, tai nghe nhét tai & loa',
      count: '300+',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop',
      category: 'audio',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: Watch,
      name: lang === 'en' ? 'Smartwatches' : 'Đồng Hồ Thông Minh',
      description: lang === 'en' ? 'Fitness trackers and smartwatches' : 'Vòng theo dõi sức khỏe và đồng hồ thông minh',
      count: '80+',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop',
      category: 'wearables',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Laptop,
      name: 'Laptops',
      description: lang === 'en' ? 'Gaming and business laptops' : 'Laptop chơi game và làm việc',
      count: '150+',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop',
      category: 'laptops',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: Camera,
      name: lang === 'en' ? 'Cameras' : 'Máy Ảnh',
      description: lang === 'en' ? 'Action cams and digital cameras' : 'Camera hành trình và máy ảnh kỹ thuật số',
      count: '60+',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop',
      category: 'cameras',
      color: 'bg-pink-50 text-pink-600',
    },
    {
      icon: Speaker,
      name: lang === 'en' ? 'Smart Home' : 'Nhà Thông Minh',
      description: lang === 'en' ? 'Smart speakers and home devices' : 'Loa thông minh và thiết bị nhà thông minh',
      count: '90+',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop',
      category: 'smart-home',
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      icon: Gamepad,
      name: lang === 'en' ? 'Gaming' : 'Chơi Game',
      description: lang === 'en' ? 'Controllers and gaming accessories' : 'Tay cầm và phụ kiện chơi game',
      count: '200+',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop',
      category: 'gaming',
      color: 'bg-cyan-50 text-cyan-600',
    },
  ];

  const brands = [
    { name: 'Apple', logo: '🍎' },
    { name: 'Samsung', logo: '📱' },
    { name: 'Xiaomi', logo: '📲' },
    { name: 'Google', logo: '🔍' },
    { name: 'OnePlus', logo: '1️⃣' },
    { name: 'Huawei', logo: '📞' },
    { name: 'Oppo', logo: '⭕' },
    { name: 'Vivo', logo: '💠' },
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white py-16 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-4">
              {lang === 'en' ? 'Browse Categories' : 'Danh Mục Sản Phẩm'}
            </h1>
            <p className="text-xl opacity-90">
              {lang === 'en'
                ? 'Explore our wide range of tech products across all categories'
                : 'Khám phá đa dạng sản phẩm công nghệ của chúng tôi'}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Main Categories Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => onNavigate('shop', { category: category.category })}
                className="group bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#FF5722] hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-white text-sm">{category.count} {lang === 'en' ? 'Products' : 'Sản Phẩm'}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 text-left">
                  <h3 className="text-xl text-gray-900 mb-2 group-hover:text-[#FF5722] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Shop by Brand */}
        <section className="py-12 bg-gray-50 -mx-4 px-4 rounded-lg mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl text-gray-900 mb-4">
              {lang === 'en' ? 'Shop by Brand' : 'Mua Theo Thương Hiệu'}
            </h2>
            <p className="text-gray-600">
              {lang === 'en'
                ? 'Find products from your favorite brands'
                : 'Tìm sản phẩm từ các thương hiệu yêu thích'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {brands.map((brand, index) => (
              <button
                key={index}
                onClick={() => onNavigate('shop', { brand: brand.name })}
                className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-[#FF5722] hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {brand.logo}
                </div>
                <p className="text-sm text-gray-900 group-hover:text-[#FF5722] transition-colors">
                  {brand.name}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Popular Searches */}
        <section className="mb-16">
          <h2 className="text-3xl text-gray-900 mb-6 text-center">
            {lang === 'en' ? 'Popular Searches' : 'Tìm Kiếm Phổ Biến'}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'iPhone 15 Pro',
              'Samsung S24',
              'AirPods Pro',
              'iPad Air',
              'Galaxy Watch',
              'MacBook Pro',
              'Xiaomi 13',
              'OnePlus 12',
              'Google Pixel 8',
              'Sony WH-1000XM5',
            ].map((search, index) => (
              <button
                key={index}
                onClick={() => onNavigate('shop')}
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-[#FF5722] hover:bg-orange-50 hover:text-[#FF5722] transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Collections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div
            onClick={() => onNavigate('deals')}
            className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop"
              alt="Premium Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="p-8 text-white">
                <h3 className="text-3xl mb-2">
                  {lang === 'en' ? 'Premium Collection' : 'Bộ Sưu Tập Cao Cấp'}
                </h3>
                <p className="text-lg opacity-90 mb-4">
                  {lang === 'en' ? 'Flagship devices from top brands' : 'Thiết bị cao cấp từ các thương hiệu hàng đầu'}
                </p>
                <span className="inline-block bg-[#FF5722] px-6 py-2 rounded-full">
                  {lang === 'en' ? 'Explore Now' : 'Khám Phá Ngay'}
                </span>
              </div>
            </div>
          </div>

          <div
            onClick={() => onNavigate('deals')}
            className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&auto=format&fit=crop"
              alt="Budget Friendly"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="p-8 text-white">
                <h3 className="text-3xl mb-2">
                  {lang === 'en' ? 'Budget Friendly' : 'Giá Cả Phải Chăng'}
                </h3>
                <p className="text-lg opacity-90 mb-4">
                  {lang === 'en' ? 'Great value smartphones under $500' : 'Điện thoại giá trị dưới $500'}
                </p>
                <span className="inline-block bg-[#FF5722] px-6 py-2 rounded-full">
                  {lang === 'en' ? 'Shop Now' : 'Mua Ngay'}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
