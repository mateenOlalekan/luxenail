"use client";
import { useState } from "react";
import {
  Calendar,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  X,
  Star,
  Gift,
  Crown,
  Diamond,
} from "lucide-react";

interface Package {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  services: string[];
  duration: string;
  popular?: boolean;
  premium?: boolean;
  seasonal?: boolean;
}

export default function EnhancedPackagesSection() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const packages: Package[] = [
    {
      id: 1,
      name: "Classic Mani & Pedi",
      price: "# 45,000",
      description:
        "Perfect for everyday nail care with regular polish and cuticle treatment.",
      services: [
        "Manicure & pedicure",
        "Nail shaping & buffing",
        "Regular polish",
        "Cuticle care",
      ],
      duration: "60 min",
    },
    {
      id: 2,
      name: "Gel Polish Special",
      price: "# 70,000",
      description: "Long-lasting gel polish with relaxing hand massage.",
      services: [
        "Manicure & pedicure",
        "Gel polish application",
        "Hand massage",
        "Moisturizing treatment",
      ],
      duration: "75 min",
    },
    {
      id: 3,
      name: "Spa Package",
      price: "# 100,000",
      originalPrice: "#120",
      description:
        "Relaxing spa experience with paraffin treatment and simple nail art.",
      services: [
        "Spa manicure & pedicure",
        "Gel polish",
        "Paraffin hand treatment",
        "Hand & foot massage",
        "Simple nail art (2 nails)",
      ],
      duration: "90 min",
      popular: true,
    },
    {
      id: 4,
      name: "Luxury Experience",
      price: "# 150,000",
      description: "Complete luxury treatment with extensions and custom nail art.",
      services: [
        "Full spa treatment",
        "Gel extensions available",
        "Custom nail art",
        "Aromatherapy massage",
        "Hot towel & paraffin",
        "Complimentary beverage",
      ],
      duration: "120 min",
      premium: true,
    },
    {
      id: 5,
      name: "Bridal Elegance",
      price: "# 200,000",
      description:
        "Designed for brides and special occasions with exquisite details.",
      services: [
        "Luxury spa treatment",
        "Premium gel extensions",
        "Intricate bridal nail art",
        "Hand & foot aromatherapy",
        "Complimentary champagne",
        "Custom care kit",
      ],
      duration: "150 min",
      premium: true,
    },
    {
      id: 6,
      name: "Seasonal Glow",
      price: "# 85,000",
      description:
        "Celebrate the season with themed nail art and relaxing treatments.",
      services: [
        "Spa manicure & pedicure",
        "Seasonal nail art design",
        "Hand scrub & mask",
        "Hot towel massage",
      ],
      duration: "80 min",
      seasonal: true,
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-pink-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-3 shadow-md border border-gray-200">
            <Sparkles className="w-5 h-5 text-rose-500 mr-2" />
            <span className="text-sm font-semibold text-gray-700 tracking-wide">
              PREMIUM & SEASONAL PACKAGES
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
            Exceptional Nail Care
            <span className="block text-rose-500">Tailored for You</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our curated packages — from simple classics to luxury
            bridal elegance — all designed to make you look and feel your best.
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer #{
                pkg.popular
                  ? "border-pink-400 ring-2 ring-pink-200"
                  : pkg.premium
                  ? "border-yellow-400 ring-2 ring-yellow-200"
                  : pkg.seasonal
                  ? "border-green-400 ring-2 ring-green-200"
                  : "border-gray-100 hover:border-pink-200"
              }`}
              onClick={() => setSelectedPackage(pkg)}
            >
              {/* Badges */}
              {pkg.popular && (
                <div className="absolute -top-3 left-4 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Star className="w-4 h-4 mr-1" /> Most Popular
                </div>
              )}
              {pkg.premium && (
                <div className="absolute -top-3 right-4 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Crown className="w-4 h-4 mr-1" /> Premium
                </div>
              )}
              {pkg.seasonal && (
                <div className="absolute -top-3 left-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Gift className="w-4 h-4 mr-1" /> Seasonal
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-pink-600">
                      {pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-gray-400 line-through ml-2">
                        {pkg.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
                  {pkg.description}
                </p>

                <div className="flex flex-wrap gap-1 justify-center mb-6">
                  {pkg.services.slice(0, 2).map((service, index) => (
                    <span
                      key={index}
                      className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                  {pkg.services.length > 2 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      +{pkg.services.length - 2} more
                    </span>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center group">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 rounded-t-2xl relative">
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-bold mb-2">
                {selectedPackage.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">
                  {selectedPackage.price}
                </span>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{selectedPackage.duration}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {selectedPackage.description}
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-pink-500 mr-2" />
                  What's Included
                </h4>
                <div className="space-y-3">
                  {selectedPackage.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-pink-500 mr-3 flex-shrink-0" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      )}
    </section>
  );
}
