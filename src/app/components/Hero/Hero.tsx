// app/components/PremiumHero.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import {   
  Sparkles, 
  Calendar,
  ChevronDown,
  Star,
  Crown,
  Heart,
  Palette,
  Shield,
  Award,
  Clock,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Img01 from "../../../../public/Img/01.png";
import Img02 from "../../../../public/Img/02.png";
import Img03 from "../../../../public/Img/03.jpg";

const PremiumHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [sparkles, setSparkles] = useState<{left: string, top: string, delay: string, duration: string}[]>([]);

  // Generate sparkle positions only on client
  useEffect(() => {
    const generated = [...Array(8)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${i * 0.5}s`,
      duration: `${3 + Math.random() * 2}s`,
    }));
    setSparkles(generated);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Luxury Manicures',
      description: 'Experience our signature manicure with premium products and hand massage',
      image: Img01,
      price: 'From $45',
      duration: '60 min',
      popular: true
    },
    {
      title: 'Signature Pedicures',
      description: 'Relaxing foot treatment with massage, scrub and paraffin wax',
      image: Img02,
      price: 'From $65',
      duration: '90 min',
      popular: false
    },
    {
      title: 'Nail Art Design',
      description: 'Custom artistic nail designs created by our master artists',
      image: Img03,
      price: 'From $25',
      duration: '45 min',
      popular: true
    }
  ];

  const features = [
    { icon: <Crown className="w-5 h-5" />, text: "Premium Products" },
    { icon: <Award className="w-5 h-5" />, text: "Expert Technicians" },
    { icon: <Shield className="w-5 h-5" />, text: "Sanitized Tools" },
    { icon: <Heart className="w-5 h-5" />, text: "Luxury Experience" }
  ];

  return (
    <section className="relative h-fit   overflow-hidden py-14">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50/80"></div>
        {/* Floating sparkles - only render after mount */}
        <div className="absolute inset-0 overflow-hidden">
          {sparkles.map((s, i) => (
            <div
              key={i}
              className="absolute animate-float text-pink-300/60"
              style={{
                left: s.left,
                top: s.top,
                animationDelay: s.delay,
                animationDuration: s.duration
              }}
            >
              <Sparkles className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Section */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Premium Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-rose-100 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 border border-pink-200/50 shadow-md">
              <Crown className="w-5 h-5 text-pink-600 mr-2" />
              <span className="text-xs sm:text-sm font-semibold text-pink-700 tracking-wide">LUXURY NAIL SALON & SPA</span>
              <Sparkles className="w-4 h-4 text-pink-500 ml-2" />
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 sm:mb-4 leading-tight">
              <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 bg-clip-text text-transparent">
                Indulge in
              </span>
              <br />
              <span className="text-gray-900 relative">
                Nail Perfection
                <Heart className="absolute -top-4 -right-6 w-5 sm:w-6 h-5 sm:h-6 text-pink-400 animate-pulse" fill="currentColor" />
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-md md:text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transform your nails into works of art at our award-winning salon. Our master technicians combine 
              <span className="text-pink-600 font-semibold"> premium techniques</span> with 
              <span className="text-purple-600 font-semibold"> luxury products</span> to deliver an unforgettable experience.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-2">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center p-2 sm:p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-pink-100/50 shadow-sm">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full text-pink-600 mb-2">
                    {feature.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start my-5">
              <Link href="/booking" className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Book Your Session
              </Link>
              
              <Link href="/services" className="border-2 border-pink-300 bg-white/90 text-pink-700 px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-md flex items-center justify-center">
                <Palette className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Explore Services
              </Link>
            </div>
          </div>

          {/* Image Slider */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative h-72 sm:h-96 md:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              {services.map((service, index) => (
                <div key={index} className={`absolute inset-0 transition-all duration-1000 ${currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                  <Image src={service.image} alt={service.title} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" />
                        Popular
                      </div>
                    )}
                    <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <h3 className="font-serif text-lg sm:text-2xl font-bold text-gray-900">{service.title}</h3>
                        <div className="text-right">
                          <div className="text-lg sm:text-2xl font-bold text-pink-600">{service.price}</div>
                          <div className="text-xs sm:text-sm text-gray-500 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {service.duration}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed">{service.description}</p>
                      <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-pink-600 font-medium text-sm hover:text-pink-700">
                        Learn More
                        <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
