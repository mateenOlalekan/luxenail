// app/components/PremiumFooter.jsx
'use client';
import Link from 'next/link';
import {   Phone,   Mail,  MapPin,   Clock,   Instagram,   Facebook,   Twitter,  Heart,  Sparkles,  Shield,  Award,  Truck} from 'lucide-react';

const PremiumFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Luxury Manicures', href: '/services/manicures' },
      { name: 'Signature Pedicures', href: '/services/pedicures' },
      { name: 'Nail Art Design', href: '/services/nail-art' },
      { name: 'Gel Extensions', href: '/services/gel-extensions' },
      { name: 'Nail Repair', href: '/services/nail-repair' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cancellation Policy', href: '/cancellation' },
    ]
  };



  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">


      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Luxe Nails
                </span>
                <span className="text-xs text-gray-400 font-light">Premium Salon & Spa</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Experience the ultimate in nail care luxury. Our award-winning salon provides exceptional service using only the finest products in a relaxing, beautiful environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-pink-500">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm flex items-center"
                  >
                    <Sparkles className="w-3 h-3 mr-2 text-pink-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-pink-500">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm flex items-center"
                  >
                    <Heart className="w-3 h-3 mr-2 text-pink-500" fill="currentColor" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-pink-500">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-pink-500 mr-3 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  123 Beauty Street<br />
                  Beverly Hills, CA 90210
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-pink-500 mr-3" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-pink-500 mr-3" />
                <a href="mailto:info@luxenails.com" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  info@luxenails.com
                </a>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-pink-500 mr-3 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Mon-Fri: 9am - 8pm</p>
                  <p>Sat: 10am - 6pm</p>
                  <p>Sun: 11am - 5pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="border-t border-b border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-2xl font-semibold mb-4">Stay Updated with Luxe Nails</h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new services, and beauty tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-pink-500/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Luxe Nails. All rights reserved. Made with <Heart className="w-4 h-4 inline text-pink-500" fill="currentColor" /> by beauty lovers.
          </p>
          <div className="flex space-x-6">
            {footerLinks.support.map((link, index) => (
              <Link 
                key={index}
                href={link.href} 
                className="text-gray-400 text-sm hover:text-pink-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;