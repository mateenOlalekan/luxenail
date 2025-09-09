
'use client';

import {   Phone,   Mail,  MapPin,   Clock,   Instagram,   Facebook,   Twitter,  Heart,  Sparkles,Crown} from 'lucide-react';

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
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
    ]
  };



  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">


      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
          <a
            href="/"
            className="flex items-center space-x-3 group pb-6"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-14 h-14 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 bg-gradient-to-br from-pink-400 via-rose-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-pink-400/40 transition-all duration-500 group-hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Sparkles className="w-7 h-7 max-md:w-6 max-md:h-6 max-sm:w-5 max-sm:h-5 text-white drop-shadow-sm" fill="currentColor" />
                <div className="absolute top-1 right-1 w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping"></div>
              </div>
              
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <Crown className="w-3 h-3 text-white" fill="currentColor" />
              </div>
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-400/20 to-purple-600/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 bg-clip-text text-transparent tracking-tight">
                DaGirl Nails
              </span>
              <span className="text-xs text-gray-500 font-light tracking-wide uppercase">
                Premium Salon & Spa
              </span>
            </div>
          </a>
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
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm flex items-center"
                  >
                    <Sparkles className="w-3 h-3 mr-2 text-pink-500" />
                    {link.name}
                  </a>
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
                  <a
                    href={link.href} 
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm flex items-center"
                  >
                    <Heart className="w-3 h-3 mr-2 text-pink-500" fill="currentColor" />
                    {link.name}
                  </a>
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
                  09135661234
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



      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Luxe Nails. All rights reserved. Made with <Heart className="w-4 h-4 inline text-pink-500" fill="currentColor" /> by beauty lovers.
          </p>
          <div className="flex space-x-6">
            {footerLinks.support.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-gray-400 text-sm hover:text-pink-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;