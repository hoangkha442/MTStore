import React from 'react';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Language, t } from '../lib/translations';
import { Product } from '../lib/data';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star } from 'lucide-react';

interface WishlistPageProps {
  lang: Language;
  wishlistItems: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onNavigate: (page: string, params?: any) => void;
}

export function WishlistPage({
  lang,
  wishlistItems,
  onRemoveFromWishlist,
  onAddToCart,
  onNavigate,
}: WishlistPageProps) {
  if (wishlistItems.length === 0) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl text-gray-900 mb-8">{t('wishlist', lang)}</h1>
          <div className="max-w-md mx-auto text-center">
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl text-gray-900 mb-4">
              {lang === 'en' ? 'Your Wishlist is Empty' : 'Danh Sách Yêu Thích Trống'}
            </h2>
            <p className="text-gray-600 mb-6">
              {lang === 'en'
                ? 'Save your favorite products to your wishlist and shop them later!'
                : 'Lưu các sản phẩm yêu thích vào danh sách để mua sau!'}
            </p>
            <Button
              onClick={() => onNavigate('shop')}
              className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-8"
            >
              {lang === 'en' ? 'Start Shopping' : 'Bắt Đầu Mua Sắm'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl text-gray-900 mb-2">{t('wishlist', lang)}</h1>
            <p className="text-gray-600">
              {wishlistItems.length} {lang === 'en' ? 'items saved' : 'sản phẩm đã lưu'}
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => onNavigate('shop')}
            className="border-2"
          >
            {lang === 'en' ? 'Continue Shopping' : 'Tiếp Tục Mua Sắm'}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <button
                onClick={() => onNavigate('product', { id: product.id })}
                className="relative w-full aspect-square overflow-hidden bg-gray-100"
              >
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Remove Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFromWishlist(product.id);
                  }}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-5 h-5 text-red-600" />
                </button>

                {/* Badges */}
                {product.isNew && (
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#FF5722] text-white text-xs px-3 py-1 rounded">
                      {lang === 'en' ? 'NEW' : 'MỚI'}
                    </span>
                  </div>
                )}

                {product.originalPrice && (
                  <div className="absolute top-10 left-2">
                    <span className="bg-red-600 text-white text-xs px-3 py-1 rounded">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </div>
                )}
              </button>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                <button
                  onClick={() => onNavigate('product', { id: product.id })}
                  className="block mb-2 hover:text-[#FF5722] transition-colors"
                >
                  <h3 className="line-clamp-2 text-left">{product.name}</h3>
                </button>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#FF5722]">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                <p className={`text-xs mb-3 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? t('inStock', lang) : t('outOfStock', lang)}
                </p>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => onAddToCart(product)}
                  disabled={!product.inStock}
                  className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  {t('addToCart', lang)}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
