'use client';
import Image from "next/image";
import { useState } from 'react';
import { Sparkles, Heart, Star } from 'lucide-react';
import Image1 from "../../../../public/Img/01.png";
import Image2 from "../../../../public/Img/nail01.jpg";
import Image3 from "../../../../public/Img/nail02.png";
import Image5 from "../../../../public/Img/nail04.jpg";
import Image4 from "../../../../public/Img/nail05.jpg";


const BeautyGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [clickedItem, setClickedItem] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: Image1,
      title: 'Glamour Portrait',
      description: 'Sophisticated evening makeup with bold eyes and glossy lips',
      category: 'Portrait',
    },
    {
      id: 2,
      src: Image2,
      title: 'Natural Beauty',
      description: 'Fresh, dewy skin with subtle highlighting and nude tones',
      category: 'Natural',
    },
    {
      id: 3,
      src: Image3,
      title: 'Creative Art',
      description: 'Avant-garde makeup design with vibrant colors and textures',
      category: 'Artistic',
    },
    {
      id: 4,
      src: Image4,
      title: 'Bridal Elegance',
      description: 'Timeless bridal look with soft, romantic features',
      category: 'Bridal',
      colSpan: 'lg:col-span-2', // special span
    },
    {
      id: 5,
      src:Image5,
      title: 'Fashion Forward',
      description: 'Editorial style makeup with dramatic contouring',
      category: 'Editorial',
    },
  ];

  const handleBookSession = () => {
    alert('Booking system would be integrated here!');
  };

  const isVisible = (id: number) => {
    // hide text if hovered OR clicked
    return hoveredItem !== id && clickedItem !== id;
  };

  return (
    <div id="gallery" className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-16 px-4">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-left mb-12">
          <p className="text-pink-600 uppercase tracking-widest text-sm font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-500" />
            Nail Art Inspiration
          </p>

          <h2 className="text-3xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
            <Heart className="w-7 h-7 text-pink-500" />
            Our <span className="text-pink-500">Nail Gallery</span>
            <Star className="w-7 h-7 text-yellow-500" />
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Explore our collection of stunning nail designs, from timeless classics 
            to bold seasonal trends.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => setClickedItem(clickedItem === item.id ? null : item.id)}
              className={`relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer transition ${item.colSpan || ''}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
                priority
              />
              {/* Overlay text (hidden when hovered/clicked) */}
              {isVisible(item.id) && (
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 flex flex-col justify-end items-start text-center text-white p-4 transition">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                  <button
                    onClick={handleBookSession}
                    className="mt-4 px-5 py-2 w-fit bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-md transition"
                  >
                    Book Session
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeautyGallery;
