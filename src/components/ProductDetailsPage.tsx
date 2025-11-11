import React from 'react';
import { Star, Minus, Plus, Heart, ShoppingCart, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ProductCard } from './ProductCard';
import { Language, t } from '../lib/translations';
import { Product, products } from '../lib/data';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailsPageProps {
  productId: string;
  lang: Language;
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (product: Product, quantity: number, options: { color?: string; storage?: string }) => void;
  wishlistIds?: string[];
  onToggleWishlist?: (productId: string) => void;
}

export function ProductDetailsPage({ productId, lang, onNavigate, onAddToCart, wishlistIds = [], onToggleWishlist }: ProductDetailsPageProps) {
  const product = products.find((p) => p.id === productId);
  const [selectedColor, setSelectedColor] = React.useState('');
  const [selectedStorage, setSelectedStorage] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);
  const isWishlisted = wishlistIds.includes(productId);

  React.useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0] || '');
      setSelectedStorage(product.storage[0] || '');
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-gray-600">
          {lang === 'en' ? 'Product not found' : 'Không tìm thấy sản phẩm'}
        </p>
        <Button onClick={() => onNavigate('shop')} className="mt-4">
          {lang === 'en' ? 'Back to Shop' : 'Quay Lại Cửa Hàng'}
        </Button>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.brand === product.brand || p.category === product.category))
    .slice(0, 4);

  const handleAddToCart = () => {
    onAddToCart(product, quantity, {
      color: selectedColor,
      storage: selectedStorage,
    });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate('shop')}
            className="gap-2 text-gray-600 hover:text-[#FF5722]"
          >
            <ChevronLeft className="w-4 h-4" />
            {lang === 'en' ? 'Back to Shop' : 'Quay Lại'}
          </Button>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {discount > 0 && (
                <Badge className="absolute top-4 left-4 bg-red-600 text-white border-0 text-lg px-4 py-2">
                  -{discount}%
                </Badge>
              )}
            </div>
            {/* Thumbnail gallery would go here in a real implementation */}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
              <h1 className="text-3xl md:text-4xl text-gray-900 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} {t('reviews', lang)})
                  </span>
                </div>
                <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? t('inStock', lang) : t('outOfStock', lang)}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl text-[#FF5722]">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* SKU */}
              <p className="text-sm text-gray-500 mb-6">
                {t('sku', lang)}: {product.id.toUpperCase()}
              </p>
            </div>

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <Label className="text-gray-900 mb-3 block">{t('selectColor', lang)}</Label>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border-2 rounded-lg transition-colors ${
                        selectedColor === color
                          ? 'border-[#FF5722] bg-orange-50 text-[#FF5722]'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Storage Selection */}
            {product.storage.length > 0 && (
              <div className="mb-6">
                <Label className="text-gray-900 mb-3 block">{t('selectStorage', lang)}</Label>
                <div className="flex gap-2 flex-wrap">
                  {product.storage.map((storage) => (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`px-4 py-2 border-2 rounded-lg transition-colors ${
                        selectedStorage === storage
                          ? 'border-[#FF5722] bg-orange-50 text-[#FF5722]'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <Label className="text-gray-900 mb-3 block">{t('quantity', lang)}</Label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-6 py-2 min-w-[60px] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-6">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-[#FF5722] hover:bg-[#E64A19] text-white py-6 gap-2"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5" />
                {t('addToCart', lang)}
              </Button>
              <Button
                variant="outline"
                onClick={() => onToggleWishlist && onToggleWishlist(product.id)}
                className={`p-6 ${isWishlisted ? 'border-[#FF5722] bg-orange-50' : ''}`}
              >
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted ? 'fill-[#FF5722] text-[#FF5722]' : ''
                  }`}
                />
              </Button>
            </div>

            <Button
              variant="outline"
              className="w-full py-6 border-2 border-[#FF5722] text-[#FF5722] hover:bg-orange-50"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {t('buyNow', lang)}
            </Button>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#FF5722] data-[state=active]:text-[#FF5722] px-6 py-4"
              >
                {t('description', lang)}
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#FF5722] data-[state=active]:text-[#FF5722] px-6 py-4"
              >
                {t('specifications', lang)}
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#FF5722] data-[state=active]:text-[#FF5722] px-6 py-4"
              >
                {t('reviews', lang)} ({product.reviews})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex border-b pb-3">
                    <span className="text-gray-600 capitalize min-w-[120px]">{key}:</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="text-gray-600">
                {lang === 'en'
                  ? 'Customer reviews will be displayed here.'
                  : 'Đánh giá của khách hàng sẽ được hiển thị ở đây.'}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl text-gray-900 mb-6">{t('relatedProducts', lang)}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  lang={lang}
                  onViewDetails={(id) => onNavigate('product', { id })}
                  onAddToCart={(p) => onAddToCart(p, 1, {})}
                  isWishlisted={wishlistIds.includes(relatedProduct.id)}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={className}>{children}</label>;
}
