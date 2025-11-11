import React from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ProductCard } from './ProductCard';
import { Language, t } from '../lib/translations';
import { Product, products, brands } from '../lib/data';

interface ShopPageProps {
  lang: Language;
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (product: Product) => void;
  initialCategory?: string;
  wishlistIds?: string[];
  onToggleWishlist?: (productId: string) => void;
}

export function ShopPage({ lang, onNavigate, onAddToCart, initialCategory, wishlistIds = [], onToggleWishlist }: ShopPageProps) {
  const [showFilters, setShowFilters] = React.useState(false);
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
  const [priceRange, setPriceRange] = React.useState([0, 2000]);
  const [selectedCategory, setSelectedCategory] = React.useState(initialCategory || '');
  const [sortBy, setSortBy] = React.useState('newest');

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setPriceRange([0, 2000]);
    setSelectedCategory('');
  };

  // Filter products
  let filteredProducts = [...products];

  if (selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter((p) => selectedBrands.includes(p.brand));
  }

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter((p) => p.category === selectedCategory);
  }

  filteredProducts = filteredProducts.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  // Sort products
  if (sortBy === 'priceLowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceHighToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'topRated') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'newest') {
    filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  const FilterSection = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="text-gray-900 mb-4">{t('categories', lang)}</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`block w-full text-left px-3 py-2 rounded ${
              selectedCategory === '' ? 'bg-orange-100 text-[#FF5722]' : 'hover:bg-gray-100'
            }`}
          >
            {lang === 'en' ? 'All Products' : 'Tất Cả Sản Phẩm'}
          </button>
          <button
            onClick={() => setSelectedCategory('smartphones')}
            className={`block w-full text-left px-3 py-2 rounded ${
              selectedCategory === 'smartphones' ? 'bg-orange-100 text-[#FF5722]' : 'hover:bg-gray-100'
            }`}
          >
            {t('smartphones', lang)}
          </button>
          <button
            onClick={() => setSelectedCategory('accessories')}
            className={`block w-full text-left px-3 py-2 rounded ${
              selectedCategory === 'accessories' ? 'bg-orange-100 text-[#FF5722]' : 'hover:bg-gray-100'
            }`}
          >
            {t('accessories', lang)}
          </button>
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="text-gray-900 mb-4">{t('brand', lang)}</h3>
        <div className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <Label htmlFor={brand} className="ml-2 cursor-pointer">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-gray-900 mb-4">{t('priceRange', lang)}</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={2000}
            step={50}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      <Button variant="outline" onClick={clearFilters} className="w-full">
        {t('clear', lang)} {t('filters', lang)}
      </Button>
    </div>
  );

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl text-gray-900 mb-2">{t('shop', lang)}</h1>
          <p className="text-gray-600">
            {t('showingResults', lang, { count: filteredProducts.length })}
          </p>
        </div>

        {/* Filters and Sort Bar */}
        <div className="flex items-center justify-between mb-6 gap-4">
          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden gap-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            {t('filters', lang)}
          </Button>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm text-gray-600 hidden sm:block">{t('sortBy', lang)}:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">{t('newest', lang)}</SelectItem>
                <SelectItem value="priceLowToHigh">{t('priceLowToHigh', lang)}</SelectItem>
                <SelectItem value="priceHighToLow">{t('priceHighToLow', lang)}</SelectItem>
                <SelectItem value="topRated">{t('topRated', lang)}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 bg-white p-6 rounded-lg border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg text-gray-900">{t('filters', lang)}</h2>
              </div>
              <FilterSection />
            </div>
          </aside>

          {/* Mobile Filters Overlay */}
          {showFilters && (
            <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
              <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg text-gray-900">{t('filters', lang)}</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowFilters(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <FilterSection />
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">
                  {lang === 'en' ? 'No products found matching your criteria.' : 'Không tìm thấy sản phẩm phù hợp.'}
                </p>
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="mt-4"
                >
                  {t('clear', lang)} {t('filters', lang)}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
