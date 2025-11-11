import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Product } from '../lib/data';
import { Language, t } from '../lib/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  lang: Language;
  onViewDetails: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (productId: string) => void;
}

export function ProductCard({ product, lang, onViewDetails, onAddToCart, isWishlisted = false, onToggleWishlist }: ProductCardProps) {

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <button
        onClick={() => onViewDetails(product.id)}
        className="relative w-full aspect-square overflow-hidden bg-gray-100"
      >
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-[#FF5722] text-white border-0">
              {lang === 'en' ? 'NEW' : 'MỚI'}
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-red-600 text-white border-0">-{discount}%</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        {onToggleWishlist && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                isWishlisted ? 'fill-[#FF5722] text-[#FF5722]' : 'text-gray-600'
              }`}
            />
          </button>
        )}

        {/* Quick Add to Cart - Shows on Hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            {t('addToCart', lang)}
          </Button>
        </div>
      </button>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
        <button
          onClick={() => onViewDetails(product.id)}
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
        <p className={`text-xs ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
          {product.inStock ? t('inStock', lang) : t('outOfStock', lang)}
        </p>
      </div>
    </div>
  );
}
