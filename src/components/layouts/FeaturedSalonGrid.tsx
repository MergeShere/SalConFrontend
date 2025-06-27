import React, { useState } from 'react';
import { Star, MapPin, Clock, Phone, Heart, Award } from 'lucide-react';

const FeaturedSalons = () => {
  const [favorites, setFavorites] = useState(new Set());

  const salons = [
    {
      id: 1,
      name: "Luxe Beauty Studio",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      reviews: 234,
      location: "Manhattan, NY",
      services: ["Hair Styling", "Color", "Extensions"],
      openUntil: "9:00 PM",
      phone: "(555) 123-4567",
      featured: true,
      price: "$$$"
    },
    {
      id: 2,
      name: "Zen Spa & Salon",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      reviews: 189,
      location: "Beverly Hills, CA",
      services: ["Facials", "Massage", "Nails"],
      openUntil: "8:00 PM",
      phone: "(555) 234-5678",
      featured: true,
      price: "$$$$"
    },
    {
      id: 3,
      name: "Modern Cut Co.",
      image: "https://images.unsplash.com/photo-1562322140-8198e7b19ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      reviews: 156,
      location: "Austin, TX",
      services: ["Men's Cuts", "Beard Trim", "Styling"],
      openUntil: "7:00 PM",
      phone: "(555) 345-6789",
      featured: false,
      price: "$$"
    },
    {
      id: 4,
      name: "Glamour Point",
      image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      reviews: 298,
      location: "Miami, FL",
      services: ["Makeup", "Bridal", "Special Events"],
      openUntil: "10:00 PM",
      phone: "(555) 456-7890",
      featured: true,
      price: "$$$"
    },
    {
      id: 5,
      name: "Serenity Wellness",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.6,
      reviews: 142,
      location: "Seattle, WA",
      services: ["Holistic Therapy", "Aromatherapy", "Reflexology"],
      openUntil: "6:00 PM",
      phone: "(555) 567-8901",
      featured: false,
      price: "$$$"
    },
    {
      id: 6,
      name: "Elite Hair Lounge",
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      reviews: 201,
      location: "Chicago, IL",
      services: ["Balayage", "Keratin", "Updos"],
      openUntil: "8:30 PM",
      phone: "(555) 678-9012",
      featured: true,
      price: "$$$$"
    }
  ];

  const toggleFavorite = (salonId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(salonId)) {
        newFavorites.delete(salonId);
      } else {
        newFavorites.add(salonId);
      }
      return newFavorites;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20 px-6">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-medium">Premium Selection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Featured
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Salons
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover exceptional beauty experiences at our hand-picked, top-rated salons
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300/20 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Salons Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {salons.map((salon) => (
            <div
              key={salon.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={salon.image}
                  alt={salon.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Featured Badge */}
                {salon.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Featured
                  </div>
                )}
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(salon.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110"
                >
                  <Heart
                    className={`w-5 h-5 transition-all duration-300 ${
                      favorites.has(salon.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-white hover:text-red-300'
                    }`}
                  />
                </button>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {salon.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {salon.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(salon.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{salon.rating}</span>
                  <span className="text-gray-600">({salon.reviews} reviews)</span>
                </div>

                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                  <span>{salon.location}</span>
                </div>

                {/* Hours */}
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-2 text-green-500" />
                  <span>Open until {salon.openUntil}</span>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {salon.services.map((service, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium border border-indigo-100"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Book Now
                  </button>
                  <button className="flex items-center justify-center w-12 h-12 border-2 border-gray-200 rounded-xl text-gray-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
                    <Phone className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Load More Salons
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSalons;