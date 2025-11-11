import React from 'react';
import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import { Language } from '../lib/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  lang: Language;
}

export function AboutPage({ lang }: AboutPageProps) {
  const stats = [
    {
      icon: Users,
      number: '500K+',
      label: lang === 'en' ? 'Happy Customers' : 'Khách Hàng Hài Lòng',
    },
    {
      icon: Award,
      number: '10+',
      label: lang === 'en' ? 'Years Experience' : 'Năm Kinh Nghiệm',
    },
    {
      icon: TrendingUp,
      number: '99%',
      label: lang === 'en' ? 'Satisfaction Rate' : 'Tỷ Lệ Hài Lòng',
    },
    {
      icon: CheckCircle,
      number: '1M+',
      label: lang === 'en' ? 'Products Sold' : 'Sản Phẩm Đã Bán',
    },
  ];

  const values = [
    {
      title: lang === 'en' ? 'Quality First' : 'Chất Lượng Đầu Tiên',
      description:
        lang === 'en'
          ? 'We source only authentic products from trusted manufacturers'
          : 'Chúng tôi chỉ cung cấp sản phẩm chính hãng từ nhà sản xuất uy tín',
    },
    {
      title: lang === 'en' ? 'Customer Focus' : 'Khách Hàng Là Trung Tâm',
      description:
        lang === 'en'
          ? 'Your satisfaction is our top priority with 24/7 support'
          : 'Sự hài lòng của bạn là ưu tiên hàng đầu với hỗ trợ 24/7',
    },
    {
      title: lang === 'en' ? 'Innovation' : 'Đổi Mới',
      description:
        lang === 'en'
          ? 'Always bringing the latest technology to our customers'
          : 'Luôn mang đến công nghệ mới nhất cho khách hàng',
    },
    {
      title: lang === 'en' ? 'Trust & Transparency' : 'Tin Cậy & Minh Bạch',
      description:
        lang === 'en'
          ? 'Honest pricing and clear communication in every transaction'
          : 'Giá cả trung thực và giao tiếp rõ ràng trong mọi giao dịch',
    },
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">
              {lang === 'en' ? 'About MT STORE' : 'Về MT STORE'}
            </h1>
            <p className="text-xl opacity-90">
              {lang === 'en'
                ? 'Your trusted destination for the latest mobile phones and accessories since 2014'
                : 'Điểm đến đáng tin cậy cho điện thoại di động và phụ kiện mới nhất từ năm 2014'}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <stat.icon className="w-8 h-8 text-[#FF5722]" />
                </div>
                <div className="text-3xl md:text-4xl text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
                {lang === 'en' ? 'Our Story' : 'Câu Chuyện Của Chúng Tôi'}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  {lang === 'en'
                    ? 'Founded in 2014, MT STORE started as a small retail shop with a vision to make the latest mobile technology accessible to everyone. Over the years, we have grown into one of the most trusted names in mobile retail.'
                    : 'Được thành lập vào năm 2014, MT STORE bắt đầu như một cửa hàng bán lẻ nhỏ với tầm nhìn làm cho công nghệ di động mới nhất trở nên dễ tiếp cận với mọi người. Qua nhiều năm, chúng tôi đã phát triển thành một trong những cái tên đáng tin cậy nhất trong ngành bán lẻ di động.'}
                </p>
                <p>
                  {lang === 'en'
                    ? 'Today, we serve over 500,000 happy customers across the country, offering authentic products from all major brands including Apple, Samsung, Xiaomi, and more. Our commitment to quality, competitive pricing, and exceptional customer service has made us a preferred choice for tech enthusiasts.'
                    : 'Ngày nay, chúng tôi phục vụ hơn 500.000 khách hàng hài lòng trên toàn quốc, cung cấp sản phẩm chính hãng từ tất cả các thương hiệu lớn bao gồm Apple, Samsung, Xiaomi và nhiều hơn nữa. Cam kết của chúng tôi về chất lượng, giá cả cạnh tranh và dịch vụ khách hàng đặc biệt đã khiến chúng tôi trở thành sự lựa chọn ưu tiên cho những người đam mê công nghệ.'}
                </p>
                <p>
                  {lang === 'en'
                    ? 'We believe in not just selling products, but building lasting relationships with our customers through trust, transparency, and continuous innovation.'
                    : 'Chúng tôi tin vào việc không chỉ bán sản phẩm mà còn xây dựng mối quan hệ lâu dài với khách hàng thông qua sự tin cậy, minh bạch và đổi mới liên tục.'}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&auto=format&fit=crop"
                  alt="MT Store"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              {lang === 'en' ? 'Our Values' : 'Giá Trị Của Chúng Tôi'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {lang === 'en'
                ? 'These core values guide everything we do at MT STORE'
                : 'Những giá trị cốt lõi này định hướng mọi việc chúng tôi làm tại MT STORE'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-[#FF5722] rounded-full"></div>
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              {lang === 'en' ? 'Meet Our Team' : 'Đội Ngũ Của Chúng Tôi'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {lang === 'en'
                ? 'Dedicated professionals committed to bringing you the best service'
                : 'Những chuyên gia tận tâm cam kết mang đến cho bạn dịch vụ tốt nhất'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="bg-gray-200 aspect-square rounded-lg mb-4 overflow-hidden">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${
                      member === 1
                        ? '1560250097-0b93528c311a'
                        : member === 2
                        ? '1573496359142-b8d87734a5a2'
                        : member === 3
                        ? '1519085360753-af0119f7b3cd'
                        : '1573497019940-1c28c88b4f3e'
                    }?w=400&auto=format&fit=crop`}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-gray-900 mb-1">
                  {member === 1
                    ? 'John Smith'
                    : member === 2
                    ? 'Sarah Johnson'
                    : member === 3
                    ? 'Mike Chen'
                    : 'Emily Davis'}
                </h3>
                <p className="text-sm text-gray-600">
                  {member === 1
                    ? lang === 'en'
                      ? 'CEO & Founder'
                      : 'CEO & Nhà Sáng Lập'
                    : member === 2
                    ? lang === 'en'
                      ? 'Head of Sales'
                      : 'Trưởng Phòng Kinh Doanh'
                    : member === 3
                    ? lang === 'en'
                      ? 'Technical Director'
                      : 'Giám Đốc Kỹ Thuật'
                    : lang === 'en'
                    ? 'Customer Service Lead'
                    : 'Trưởng Phòng CSKH'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
