
'use client';

import {   Shield,   Sparkles,   Heart,   Clock,   Users,  Gem,   CheckCircle} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {features} from "../../Data/feature"

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-pink-50/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center bg-pink-100/80 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-pink-200/50">
            <Gem className="w-5 h-5 text-pink-600 mr-2" />
            <span className="text-sm font-semibold text-pink-700">PREMIUM EXPERIENCE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Why Choose <span className="text-gray-900">Luxe Nails?</span>
            </span>
            <br />
            
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover the difference that premium quality, expert craftsmanship, and unparalleled 
            customer service can make for your nail care experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-pink-100/50 shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                  {feature.stats}
                </span>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Custom styles */}
      <style jsx>{`
        .shadow-custom {
          box-shadow: 0 10px 40px rgba(236, 72, 153, 0.15);
        }
        
        .hover\\:shadow-custom:hover {
          box-shadow: 0 15px 50px rgba(236, 72, 153, 0.2);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;