import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Language } from '../lib/translations';
import { toast } from 'sonner@2.0.3';

interface ContactPageProps {
  lang: Language;
}

export function ContactPage({ lang }: ContactPageProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      lang === 'en'
        ? 'Thank you! We will get back to you soon.'
        : 'Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm.',
      { duration: 3000 }
    );
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: lang === 'en' ? 'Address' : 'Địa Chỉ',
      details: ['123 Tech Street, District 1', 'Ho Chi Minh City, Vietnam'],
    },
    {
      icon: Phone,
      title: lang === 'en' ? 'Phone' : 'Điện Thoại',
      details: ['+84 123 456 789', '+84 987 654 321'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['support@mtstore.com', 'sales@mtstore.com'],
    },
    {
      icon: Clock,
      title: lang === 'en' ? 'Working Hours' : 'Giờ Làm Việc',
      details: [
        lang === 'en' ? 'Mon - Sat: 9:00 AM - 9:00 PM' : 'Thứ 2 - Thứ 7: 9:00 - 21:00',
        lang === 'en' ? 'Sunday: 10:00 AM - 6:00 PM' : 'Chủ Nhật: 10:00 - 18:00',
      ],
    },
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">
              {lang === 'en' ? 'Contact Us' : 'Liên Hệ'}
            </h1>
            <p className="text-xl opacity-90">
              {lang === 'en'
                ? 'We\'re here to help! Reach out to us anytime.'
                : 'Chúng tôi luôn sẵn sàng hỗ trợ bạn!'}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-[#FF5722]" />
                </div>
                <h3 className="text-lg text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">
                {lang === 'en' ? 'Send Us a Message' : 'Gửi Tin Nhắn'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="mb-2 block">
                    {lang === 'en' ? 'Full Name' : 'Họ Tên'} *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder={lang === 'en' ? 'Enter your name' : 'Nhập họ tên của bạn'}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder={
                        lang === 'en' ? 'Enter your email' : 'Nhập email của bạn'
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 block">
                      {lang === 'en' ? 'Phone' : 'Số Điện Thoại'}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder={
                        lang === 'en' ? 'Enter your phone' : 'Nhập số điện thoại'
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="mb-2 block">
                    {lang === 'en' ? 'Subject' : 'Tiêu Đề'} *
                  </Label>
                  <Input
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, subject: e.target.value }))
                    }
                    placeholder={lang === 'en' ? 'What is this about?' : 'Nội dung liên quan đến?'}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="mb-2 block">
                    {lang === 'en' ? 'Message' : 'Tin Nhắn'} *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder={
                      lang === 'en' ? 'Write your message here...' : 'Viết tin nhắn của bạn...'
                    }
                  />
                </div>
                <Button type="submit" className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white">
                  <Send className="w-4 h-4 mr-2" />
                  {lang === 'en' ? 'Send Message' : 'Gửi Tin Nhắn'}
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">
                {lang === 'en' ? 'Visit Our Store' : 'Ghé Thăm Cửa Hàng'}
              </h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-6 h-[300px] lg:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6306196311896!2d106.69975131471941!3d10.762622992324445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2sDistrict%201%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MT Store Location"
                ></iframe>
              </div>
              <div className="bg-orange-50 border-l-4 border-[#FF5722] p-6 rounded">
                <h3 className="text-lg text-gray-900 mb-3">
                  {lang === 'en' ? 'Quick Response' : 'Phản Hồi Nhanh'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {lang === 'en'
                    ? 'Our customer support team typically responds within 2-4 hours during business hours. For urgent matters, please call us directly.'
                    : 'Đội ngũ hỗ trợ khách hàng của chúng tôi thường phản hồi trong vòng 2-4 giờ trong giờ làm việc. Đối với các vấn đề khẩn cấp, vui lòng gọi trực tiếp cho chúng tôi.'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="border-2 border-[#FF5722] text-[#FF5722]">
                    <Phone className="w-4 h-4 mr-2" />
                    {lang === 'en' ? 'Call Now' : 'Gọi Ngay'}
                  </Button>
                  <Button variant="outline" className="border-2">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-8 text-center">
              {lang === 'en' ? 'Frequently Asked Questions' : 'Câu Hỏi Thường Gặp'}
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: lang === 'en' ? 'What are your shipping options?' : 'Các tùy chọn giao hàng là gì?',
                  a:
                    lang === 'en'
                      ? 'We offer standard (3-5 days) and express (1-2 days) shipping nationwide.'
                      : 'Chúng tôi cung cấp giao hàng tiêu chuẩn (3-5 ngày) và nhanh (1-2 ngày) trên toàn quốc.',
                },
                {
                  q:
                    lang === 'en'
                      ? 'Do you offer warranty on products?'
                      : 'Sản phẩm có được bảo hành không?',
                  a:
                    lang === 'en'
                      ? 'Yes, all products come with manufacturer warranty ranging from 12-24 months.'
                      : 'Có, tất cả sản phẩm đều có bảo hành từ nhà sản xuất từ 12-24 tháng.',
                },
                {
                  q:
                    lang === 'en'
                      ? 'Can I return or exchange a product?'
                      : 'Tôi có thể trả lại hoặc đổi sản phẩm không?',
                  a:
                    lang === 'en'
                      ? 'Yes, we accept returns within 7 days if the product is unopened and in original condition.'
                      : 'Có, chúng tôi chấp nhận trả hàng trong vòng 7 ngày nếu sản phẩm chưa mở và còn nguyên trạng thái ban đầu.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border">
                  <h3 className="text-lg text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
