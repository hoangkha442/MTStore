import React from 'react';
import { User, Package, MapPin, Settings, Heart, LogOut, ChevronRight, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Language, t } from '../lib/translations';

interface AccountPageProps {
  lang: Language;
  onNavigate: (page: string, params?: any) => void;
}

export function AccountPage({ lang, onNavigate }: AccountPageProps) {
  const [activeTab, setActiveTab] = React.useState('profile');
  const [profileData, setProfileData] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
  });

  const [addresses, setAddresses] = React.useState([
    {
      id: '1',
      label: lang === 'en' ? 'Home' : 'Nhà',
      name: 'John Doe',
      address: '123 Main Street',
      city: 'New York',
      country: 'USA',
      zipCode: '10001',
      phone: '+1 234 567 8900',
      isDefault: true,
    },
    {
      id: '2',
      label: lang === 'en' ? 'Office' : 'Văn Phòng',
      name: 'John Doe',
      address: '456 Business Ave',
      city: 'New York',
      country: 'USA',
      zipCode: '10002',
      phone: '+1 234 567 8900',
      isDefault: false,
    },
  ]);

  const orders = [
    {
      id: 'MT1730845200000',
      date: '2025-11-05',
      status: 'delivered',
      total: 1299.99,
      items: 2,
    },
    {
      id: 'MT1730758800000',
      date: '2025-11-01',
      status: 'shipped',
      total: 899.00,
      items: 1,
    },
    {
      id: 'MT1730586000000',
      date: '2025-10-28',
      status: 'processing',
      total: 1549.50,
      items: 3,
    },
  ];

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    alert(lang === 'en' ? 'Profile updated successfully!' : 'Cập nhật hồ sơ thành công!');
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      delivered: {
        bg: 'bg-green-100',
        text: 'text-green-700',
        label: lang === 'en' ? 'Delivered' : 'Đã Giao',
      },
      shipped: {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        label: lang === 'en' ? 'Shipped' : 'Đang Giao',
      },
      processing: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-700',
        label: lang === 'en' ? 'Processing' : 'Đang Xử Lý',
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <span className={`px-3 py-1 rounded-full text-xs ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl text-gray-900 mb-8">{t('account', lang)}</h1>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border rounded-lg p-6 sticky top-24">
              {/* User Info */}
              <div className="text-center mb-6 pb-6 border-b">
                <div className="w-20 h-20 bg-[#FF5722] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl text-white">
                    {profileData.firstName[0]}{profileData.lastName[0]}
                  </span>
                </div>
                <h3 className="text-gray-900 mb-1">
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p className="text-sm text-gray-600">{profileData.email}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-orange-50 text-[#FF5722]'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span>{lang === 'en' ? 'Profile' : 'Hồ Sơ'}</span>
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'orders'
                      ? 'bg-orange-50 text-[#FF5722]'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Package className="w-5 h-5" />
                  <span>{lang === 'en' ? 'My Orders' : 'Đơn Hàng'}</span>
                </button>
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'addresses'
                      ? 'bg-orange-50 text-[#FF5722]'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  <span>{lang === 'en' ? 'Addresses' : 'Địa Chỉ'}</span>
                </button>
                <button
                  onClick={() => onNavigate('wishlist')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  <span>{t('wishlist', lang)}</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-orange-50 text-[#FF5722]'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span>{lang === 'en' ? 'Settings' : 'Cài Đặt'}</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-4">
                  <LogOut className="w-5 h-5" />
                  <span>{lang === 'en' ? 'Logout' : 'Đăng Xuất'}</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white border rounded-lg p-6">
                <h2 className="text-2xl text-gray-900 mb-6">
                  {lang === 'en' ? 'Profile Information' : 'Thông Tin Hồ Sơ'}
                </h2>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="mb-2 block">
                        {lang === 'en' ? 'First Name' : 'Tên'}
                      </Label>
                      <Input
                        id="firstName"
                        value={profileData.firstName}
                        onChange={(e) =>
                          setProfileData((prev) => ({ ...prev, firstName: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="mb-2 block">
                        {lang === 'en' ? 'Last Name' : 'Họ'}
                      </Label>
                      <Input
                        id="lastName"
                        value={profileData.lastName}
                        onChange={(e) =>
                          setProfileData((prev) => ({ ...prev, lastName: e.target.value }))
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 block">
                      {t('email', lang)}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData((prev) => ({ ...prev, email: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 block">
                      {t('phone', lang)}
                    </Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) =>
                        setProfileData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                    />
                  </div>
                  <Button type="submit" className="bg-[#FF5722] hover:bg-[#E64A19] text-white">
                    {lang === 'en' ? 'Save Changes' : 'Lưu Thay Đổi'}
                  </Button>
                </form>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white border rounded-lg p-6">
                <h2 className="text-2xl text-gray-900 mb-6">
                  {lang === 'en' ? 'My Orders' : 'Đơn Hàng Của Tôi'}
                </h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-gray-900">
                              {t('orderNumber', lang)}: {order.id}
                            </h3>
                            {getStatusBadge(order.status)}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>
                              {lang === 'en' ? 'Date' : 'Ngày'}: {order.date}
                            </span>
                            <span>•</span>
                            <span>
                              {order.items} {lang === 'en' ? 'items' : 'sản phẩm'}
                            </span>
                            <span>•</span>
                            <span className="text-[#FF5722]">${order.total.toFixed(2)}</span>
                          </div>
                        </div>
                        <Button variant="outline" className="border-2">
                          {lang === 'en' ? 'View Details' : 'Xem Chi Tiết'}
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white border rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl text-gray-900">
                    {lang === 'en' ? 'Saved Addresses' : 'Địa Chỉ Đã Lưu'}
                  </h2>
                  <Button className="bg-[#FF5722] hover:bg-[#E64A19] text-white">
                    {lang === 'en' ? 'Add New' : 'Thêm Mới'}
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className={`border-2 rounded-lg p-4 ${
                        address.isDefault ? 'border-[#FF5722] bg-orange-50' : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-gray-900 mb-1">{address.label}</h3>
                          {address.isDefault && (
                            <span className="text-xs text-[#FF5722]">
                              {lang === 'en' ? 'Default' : 'Mặc Định'}
                            </span>
                          )}
                        </div>
                        <button className="text-[#FF5722] hover:text-[#E64A19]">
                          {lang === 'en' ? 'Edit' : 'Sửa'}
                        </button>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{address.name}</p>
                        <p>{address.address}</p>
                        <p>
                          {address.city}, {address.country} {address.zipCode}
                        </p>
                        <p>{address.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white border rounded-lg p-6">
                <h2 className="text-2xl text-gray-900 mb-6">
                  {lang === 'en' ? 'Account Settings' : 'Cài Đặt Tài Khoản'}
                </h2>
                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <h3 className="text-gray-900 mb-2">
                      {lang === 'en' ? 'Change Password' : 'Đổi Mật Khẩu'}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {lang === 'en'
                        ? 'Update your password to keep your account secure'
                        : 'Cập nhật mật khẩu để bảo mật tài khoản'}
                    </p>
                    <Button variant="outline" className="border-2">
                      {lang === 'en' ? 'Change Password' : 'Đổi Mật Khẩu'}
                    </Button>
                  </div>
                  <div className="border-b pb-6">
                    <h3 className="text-gray-900 mb-2">
                      {lang === 'en' ? 'Email Notifications' : 'Thông Báo Email'}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {lang === 'en'
                        ? 'Manage your email notification preferences'
                        : 'Quản lý tùy chọn thông báo email'}
                    </p>
                    <Button variant="outline" className="border-2">
                      {lang === 'en' ? 'Manage Notifications' : 'Quản Lý Thông Báo'}
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">
                      {lang === 'en' ? 'Delete Account' : 'Xóa Tài Khoản'}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {lang === 'en'
                        ? 'Permanently delete your account and all data'
                        : 'Xóa vĩnh viễn tài khoản và tất cả dữ liệu'}
                    </p>
                    <Button variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-50">
                      {lang === 'en' ? 'Delete Account' : 'Xóa Tài Khoản'}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout - Tabs */}
        <div className="lg:hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full grid grid-cols-4 h-auto p-1 bg-gray-100 rounded-lg mb-6">
              <TabsTrigger value="profile" className="py-3 text-xs">
                <User className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">{lang === 'en' ? 'Profile' : 'Hồ Sơ'}</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="py-3 text-xs">
                <Package className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">{lang === 'en' ? 'Orders' : 'Đơn'}</span>
              </TabsTrigger>
              <TabsTrigger value="addresses" className="py-3 text-xs">
                <MapPin className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">{lang === 'en' ? 'Address' : 'Địa Chỉ'}</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="py-3 text-xs">
                <Settings className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">{lang === 'en' ? 'Settings' : 'Cài Đặt'}</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="bg-white border rounded-lg p-4 md:p-6">
                <h2 className="text-xl md:text-2xl text-gray-900 mb-6">
                  {lang === 'en' ? 'Profile Information' : 'Thông Tin Hồ Sơ'}
                </h2>
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName-mobile" className="mb-2 block">
                        {lang === 'en' ? 'First Name' : 'Tên'}
                      </Label>
                      <Input
                        id="firstName-mobile"
                        value={profileData.firstName}
                        onChange={(e) =>
                          setProfileData((prev) => ({ ...prev, firstName: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName-mobile" className="mb-2 block">
                        {lang === 'en' ? 'Last Name' : 'Họ'}
                      </Label>
                      <Input
                        id="lastName-mobile"
                        value={profileData.lastName}
                        onChange={(e) =>
                          setProfileData((prev) => ({ ...prev, lastName: e.target.value }))
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email-mobile" className="mb-2 block">
                      {t('email', lang)}
                    </Label>
                    <Input
                      id="email-mobile"
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData((prev) => ({ ...prev, email: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone-mobile" className="mb-2 block">
                      {t('phone', lang)}
                    </Label>
                    <Input
                      id="phone-mobile"
                      value={profileData.phone}
                      onChange={(e) =>
                        setProfileData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white">
                    {lang === 'en' ? 'Save Changes' : 'Lưu Thay Đổi'}
                  </Button>
                </form>
              </div>
            </TabsContent>

            <TabsContent value="orders">
              <div className="bg-white border rounded-lg p-4 md:p-6">
                <h2 className="text-xl md:text-2xl text-gray-900 mb-6">
                  {lang === 'en' ? 'My Orders' : 'Đơn Hàng Của Tôi'}
                </h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-sm text-gray-900 mb-1">#{order.id}</h3>
                          <p className="text-xs text-gray-600">{order.date}</p>
                        </div>
                        {getStatusBadge(order.status)}
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t">
                        <span className="text-sm text-gray-600">
                          {order.items} {lang === 'en' ? 'items' : 'sản phẩm'}
                        </span>
                        <span className="text-[#FF5722]">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="addresses">
              <div className="bg-white border rounded-lg p-4 md:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl md:text-2xl text-gray-900">
                    {lang === 'en' ? 'Saved Addresses' : 'Địa Chỉ Đã Lưu'}
                  </h2>
                  <Button className="bg-[#FF5722] hover:bg-[#E64A19] text-white text-sm px-4">
                    {lang === 'en' ? 'Add' : 'Thêm'}
                  </Button>
                </div>
                <div className="space-y-4">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className={`border-2 rounded-lg p-4 ${
                        address.isDefault ? 'border-[#FF5722] bg-orange-50' : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-gray-900 mb-1">{address.label}</h3>
                          {address.isDefault && (
                            <span className="text-xs text-[#FF5722]">
                              {lang === 'en' ? 'Default' : 'Mặc Định'}
                            </span>
                          )}
                        </div>
                        <button className="text-sm text-[#FF5722] hover:text-[#E64A19]">
                          {lang === 'en' ? 'Edit' : 'Sửa'}
                        </button>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{address.name}</p>
                        <p>{address.address}</p>
                        <p>
                          {address.city}, {address.country} {address.zipCode}
                        </p>
                        <p>{address.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="bg-white border rounded-lg p-4 md:p-6">
                <h2 className="text-xl md:text-2xl text-gray-900 mb-6">
                  {lang === 'en' ? 'Account Settings' : 'Cài Đặt Tài Khoản'}
                </h2>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="text-gray-900 mb-2">
                      {lang === 'en' ? 'Change Password' : 'Đổi Mật Khẩu'}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {lang === 'en'
                        ? 'Update your password to keep your account secure'
                        : 'Cập nhật mật khẩu để bảo mật tài khoản'}
                    </p>
                    <Button variant="outline" className="w-full border-2">
                      {lang === 'en' ? 'Change Password' : 'Đổi Mật Khẩu'}
                    </Button>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="text-gray-900 mb-2">
                      {lang === 'en' ? 'Email Notifications' : 'Thông Báo Email'}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {lang === 'en'
                        ? 'Manage your email notification preferences'
                        : 'Quản lý tùy chọn thông báo email'}
                    </p>
                    <Button variant="outline" className="w-full border-2">
                      {lang === 'en' ? 'Manage Notifications' : 'Quản Lý Thông Báo'}
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">
                      {lang === 'en' ? 'Delete Account' : 'Xóa Tài Khoản'}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {lang === 'en'
                        ? 'Permanently delete your account and all data'
                        : 'Xóa vĩnh viễn tài khoản và tất cả dữ liệu'}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-red-600 text-red-600 hover:bg-red-50">
                      {lang === 'en' ? 'Delete Account' : 'Xóa Tài Khoản'}
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
