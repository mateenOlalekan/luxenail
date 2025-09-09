// components/Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import { 
  Phone, 
  Calendar, 
  Sparkles, 
  Menu, 
  X, 
  ChevronDown,  
  Crown, 
  Clock, 
  MapPin, 
  Instagram, 
  Facebook,
} from 'lucide-react';
import BookingModal from './BookingModal';

interface NavLink {
  name: string;
  href: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks: NavLink[] = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Packages', href: 'packages' },
    { name: 'Testimonial', href: 'testimonial' },
  ];

  return (
    <>
      {/* Fixed positioning added for proper navbar behavior */}
      <nav className={` w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-b from-white/98 to-white/95 backdrop-blur-sm'
      } py-3`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-3 group"
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
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <button
                  onClick={() => scrollToSection(link.href)}
                  className={`px-5 py-3 rounded-xl text-sm font-medium transition-all relative overflow-hidden group ${
                    isScrolled ? 'text-gray-700' : 'text-gray-800'
                  } hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-100/0 via-pink-100/50 to-pink-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-pink-200 to-transparent mx-3"></div>
            
            <button 
              onClick={toggleModal}
              className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-pink-400/50 flex items-center space-x-2 relative overflow-hidden group transform hover:scale-105"
            >
              <Calendar className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button 
              onClick={toggleModal}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg flex items-center space-x-1"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </button>

            <button
              onClick={toggleMenu}
              className={`p-2.5 rounded-xl ${
                isScrolled ? 'text-gray-700' : 'text-gray-800'
              } hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all relative overflow-hidden group`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
              <div className="absolute inset-0 bg-pink-100/50 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Updated positioning for fixed navbar */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[80px] inset-x-0 z-40 bg-white/95 backdrop-blur-md shadow-2xl animate-slideIn border-b border-pink-100 max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-6 pb-8 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="block px-4 py-4 rounded-xl text-base font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all w-full text-left"
                >
                  {link.name}
                </button>
              </div>
            ))}
            
            {/* Mobile booking button */}
            <div className="pt-6 pb-4 border-t border-pink-100 mt-6">
              <button 
                onClick={() => {
                  toggleModal();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white flex items-center justify-center p-4 rounded-2xl text-base font-bold transition-all shadow-xl relative overflow-hidden group"
              >
                <Calendar className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Book Your Appointment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>

            {/* Contact info with social links */}
            <div className="px-4 pt-6 border-t border-pink-100 bg-gradient-to-r from-pink-50/50 to-rose-50/50 rounded-2xl mx-2">
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <Phone className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold">(555) 123-4567</div>
                    <div className="text-xs text-gray-500">Call for appointments</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <Clock className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Mon-Sat: 9am-7pm</div>
                    <div className="text-xs text-gray-500">Sunday: Closed</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <MapPin className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold">123 Luxury Ave</div>
                    <div className="text-xs text-gray-500">Downtown District</div>
                  </div>
                </div>
              </div>
              
              {/* Social media links */}
              <div className="flex items-center justify-center space-x-4 pb-4 border-t border-pink-200/50 pt-4">
                <a href="#" className="p-2 bg-pink-200 hover:bg-pink-300 rounded-full transition-colors">
                  <Instagram className="w-4 h-4 text-pink-700" />
                </a>
                <a href="#" className="p-2 bg-pink-200 hover:bg-pink-300 rounded-full transition-colors">
                  <Facebook className="w-4 h-4 text-pink-700" />
                </a>
                <span className="text-xs text-gray-500">Follow us for nail inspiration!</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={toggleModal} />
      

    </>
  );
}