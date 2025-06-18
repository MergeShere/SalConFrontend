import React from 'react';
import { motion } from 'framer-motion';

interface SalonCardProps {
  image: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  description: string;
  onViewDetails: () => void;
}

const SalonCard: React.FC<SalonCardProps> = ({
  image,
  name,
  location,
  rating,
  reviewCount,
  description,
  onViewDetails,
}) => {
  return (
    <motion.div
      className="salon-card bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          <p className="text-white text-sm font-medium">Explore Now</p>
        </motion.div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

        <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
          <span className="text-red-500">📍</span>
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < Math.round(rating) ? 'text-yellow-500' : 'text-gray-300'}
            >
              ★
            </span>
          ))}
          <span className="text-sm text-gray-700 ml-1">({reviewCount})</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        <button
          className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
          onClick={onViewDetails}
        >
          VIEW MORE DETAILS <span className="ml-2">→</span>
        </button>
      </div>
    </motion.div>
  );
};

export default SalonCard;
