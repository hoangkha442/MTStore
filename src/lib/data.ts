export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  colors: string[];
  storage: string[];
  inStock: boolean;
  category: string;
  description: string;
  specs: {
    screen: string;
    cpu: string;
    ram: string;
    storage: string;
    camera: string;
    battery: string;
    os: string;
  };
  featured?: boolean;
  isNew?: boolean;
  isDeal?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1680337673571-e194b42583ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYyNTIyNjQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 328,
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    storage: ['256GB', '512GB', '1TB'],
    inStock: true,
    category: 'smartphones',
    description: 'Experience the pinnacle of smartphone innovation with the iPhone 15 Pro Max. Featuring a stunning titanium design, the powerful A17 Pro chip, and an advanced camera system that captures every moment in stunning detail.',
    specs: {
      screen: '6.7" Super Retina XDR OLED',
      cpu: 'A17 Pro Chip',
      ram: '8GB',
      storage: '256GB/512GB/1TB',
      camera: '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      battery: '4422 mAh',
      os: 'iOS 17',
    },
    featured: true,
    isNew: true,
    isDeal: true,
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1690788056245-025bd89708a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1zdW5nJTIwcGhvbmUlMjBtb2JpbGV8ZW58MXx8fHwxNzYyNTg2ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 256,
    colors: ['Titanium Gray', 'Titanium Black', 'Titanium Violet', 'Titanium Yellow'],
    storage: ['256GB', '512GB', '1TB'],
    inStock: true,
    category: 'smartphones',
    description: 'The Samsung Galaxy S24 Ultra pushes the boundaries of mobile technology with its built-in S Pen, incredible camera zoom capabilities, and powerful AI features that make your everyday tasks easier.',
    specs: {
      screen: '6.8" Dynamic AMOLED 2X',
      cpu: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '256GB/512GB/1TB',
      camera: '200MP Main + 12MP Ultra Wide + 50MP Telephoto + 10MP Telephoto',
      battery: '5000 mAh',
      os: 'Android 14, One UI 6.1',
    },
    featured: true,
    isNew: true,
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    price: 999,
    originalPrice: 1099,
    image: 'https://images.unsplash.com/photo-1758348844351-48e1ec64cd96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwZmxhZ3NoaXB8ZW58MXx8fHwxNzYyNTg2ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 189,
    colors: ['Obsidian', 'Porcelain', 'Bay'],
    storage: ['128GB', '256GB', '512GB'],
    inStock: true,
    category: 'smartphones',
    description: 'The Google Pixel 8 Pro delivers the best of Google AI with advanced photo and video capabilities, enhanced security features, and a beautiful design that feels premium in your hand.',
    specs: {
      screen: '6.7" LTPO OLED',
      cpu: 'Google Tensor G3',
      ram: '12GB',
      storage: '128GB/256GB/512GB',
      camera: '50MP Main + 48MP Ultra Wide + 48MP Telephoto',
      battery: '5050 mAh',
      os: 'Android 14',
    },
    featured: true,
    isDeal: true,
  },
  {
    id: '4',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 799,
    image: 'https://images.unsplash.com/photo-1758348844351-48e1ec64cd96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwZmxhZ3NoaXB8ZW58MXx8fHwxNzYyNTg2ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    reviews: 145,
    colors: ['Flowy Emerald', 'Silky Black'],
    storage: ['256GB', '512GB'],
    inStock: true,
    category: 'smartphones',
    description: 'Fast and fluid performance meets stunning design in the OnePlus 12. Enjoy blazing fast charging, a brilliant display, and powerful hardware at an incredible value.',
    specs: {
      screen: '6.82" LTPO AMOLED',
      cpu: 'Snapdragon 8 Gen 3',
      ram: '12GB/16GB',
      storage: '256GB/512GB',
      camera: '50MP Main + 48MP Ultra Wide + 64MP Telephoto',
      battery: '5400 mAh',
      os: 'Android 14, OxygenOS 14',
    },
    isNew: true,
  },
  {
    id: '5',
    name: 'Xiaomi 14 Pro',
    brand: 'Xiaomi',
    price: 899,
    image: 'https://images.unsplash.com/photo-1758348844351-48e1ec64cd96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwZmxhZ3NoaXB8ZW58MXx8fHwxNzYyNTg2ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    reviews: 112,
    colors: ['Black', 'White', 'Titanium'],
    storage: ['256GB', '512GB'],
    inStock: true,
    category: 'smartphones',
    description: 'The Xiaomi 14 Pro combines cutting-edge Leica optics with powerful performance and a sleek design, delivering flagship features at an attractive price point.',
    specs: {
      screen: '6.73" LTPO AMOLED',
      cpu: 'Snapdragon 8 Gen 3',
      ram: '12GB/16GB',
      storage: '256GB/512GB',
      camera: '50MP Main + 50MP Ultra Wide + 50MP Telephoto (Leica)',
      battery: '4880 mAh',
      os: 'Android 14, HyperOS',
    },
  },
  {
    id: '6',
    name: 'iPhone 14',
    brand: 'Apple',
    price: 699,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1680337673571-e194b42583ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYyNTIyNjQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 445,
    colors: ['Midnight', 'Starlight', 'Blue', 'Purple', 'Product RED'],
    storage: ['128GB', '256GB', '512GB'],
    inStock: true,
    category: 'smartphones',
    description: 'A proven powerhouse, the iPhone 14 offers exceptional performance and camera quality with the reliability Apple is known for, now at a great value.',
    specs: {
      screen: '6.1" Super Retina XDR OLED',
      cpu: 'A15 Bionic Chip',
      ram: '6GB',
      storage: '128GB/256GB/512GB',
      camera: '12MP Main + 12MP Ultra Wide',
      battery: '3279 mAh',
      os: 'iOS 17',
    },
    isDeal: true,
  },
  {
    id: '7',
    name: 'AirPods Pro (2nd Gen)',
    brand: 'Apple',
    price: 249,
    image: 'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzYyNTY1NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 567,
    colors: ['White'],
    storage: [],
    inStock: true,
    category: 'accessories',
    description: 'Experience superior audio quality with adaptive transparency, personalized spatial audio, and up to 2x more active noise cancellation than the previous generation.',
    specs: {
      screen: 'N/A',
      cpu: 'H2 Chip',
      ram: 'N/A',
      storage: 'N/A',
      camera: 'N/A',
      battery: 'Up to 6 hours (ANC on)',
      os: 'N/A',
    },
  },
  {
    id: '8',
    name: 'Premium Phone Case',
    brand: 'MT Store',
    price: 29,
    image: 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2V8ZW58MXx8fHwxNzYyNTc4ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.4,
    reviews: 234,
    colors: ['Black', 'Blue', 'Red', 'Clear'],
    storage: [],
    inStock: true,
    category: 'accessories',
    description: 'Protect your phone in style with our premium case featuring military-grade drop protection and a slim, comfortable design.',
    specs: {
      screen: 'N/A',
      cpu: 'N/A',
      ram: 'N/A',
      storage: 'N/A',
      camera: 'N/A',
      battery: 'N/A',
      os: 'N/A',
    },
  },
];

export const categories = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    nameVi: 'Điện Thoại Thông Minh',
    image: 'https://images.unsplash.com/photo-1758348844351-48e1ec64cd96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwZmxhZ3NoaXB8ZW58MXx8fHwxNzYyNTg2ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'refurbished',
    name: 'Refurbished',
    nameVi: 'Đã Tân Trang',
    image: 'https://images.unsplash.com/photo-1680337673571-e194b42583ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYyNTIyNjQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    nameVi: 'Phụ Kiện',
    image: 'https://images.unsplash.com/photo-1566793474285-2decf0fc182a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc2MjU0NTkxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'];
