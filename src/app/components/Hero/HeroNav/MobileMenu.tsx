// components/MobileMenu.tsx
'use client';

import Link from 'next/link';
import { Phone, Clock, MapPin, Instagram, Facebook } from 'lucide-react';
import { Service, NavLink } from './types';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLink[];
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
  onClose: () => void;
  onBookAppointment: () => void;
}

export default function MobileMenu({ 
  isOpen, 
  navLinks, 
  activeDropdown, 
  toggleDropdown, 
  onClose, 
  onBookAppointment 
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed top-20 inset-x-0 z-50 bg-white/95 backdrop-blur-md shadow-2xl animate-slideIn border-b border-pink-100 max-h-[80vh] overflow-y-auto">
      <div className="px-4 pt-6 pb-8 space-y-1">
        {navLinks.map((link) => (
          <div key={link.name}>
            {link.dropdown ? (
              <>
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="flex w-full items-center justify-between px-4 py-4 rounded-xl text-base font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all"
                >
                  {link.name}
                  <span className={`transform transition-transform duration-300 ${
                    activeDropdown === link.name ? 'rotate-180 text-pink-600' : ''
                  }`}>▼</span>
                </button>
                
                {activeDropdown === link.name && (
                  <div className="mx-2 mb-3 bg-gradient-to-r from-pink-50/80 to-rose-50/80 rounded-xl border border-pink-100 overflow-hidden">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between p-4 hover:bg-white/80 transition-colors group"
                        onClick={onClose}
                      >
                        <div className="flex items-center">
                          <span className="mr-3 text-pink-500 bg-pink-200/50 p-2 rounded-lg">
                            {item.icon}
                          </span>
                          <div>
                            <div className="font-medium text-gray-800 group-hover:text-pink-600">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                        <div className="text-pink-600 font-semibold text-sm">
                          {item.price}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={link.href}
                className="block px-4 py-4 rounded-xl text-base font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all"
                onClick={onClose}
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
        
        {/* Booking button for mobile */}
        <div className="pt-6 pb-4 border-t border-pink-100 mt-6">
          <button 
            onClick={onBookAppointment}
            className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white flex items-center justify-center p-4 rounded-2xl text-base font-bold transition-all shadow-xl relative overflow-hidden group"
          >
            <span className="relative z-10">Book Your Appointment</span>
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
  );
}