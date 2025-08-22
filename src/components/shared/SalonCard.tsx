import { motion } from 'framer-motion';
import { Star, MapPin, ArrowRight } from 'lucide-react';

interface SalonCardProps {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  location: string;
  image: string;
  description: string;
  onClick: (id: string) => void;
}

const SalonCard = ({
  id,
  name,
  rating,
  reviewCount,
  location,
  image,
  description,
  onClick
}: SalonCardProps) => {
  const handleCardClick = () => {
    onClick(id);
  };

  const renderStars = () => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    return Array.from({ length: totalStars }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < filledStars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

    const arrowVariants = {
        rest: { x: 0 },
        hover: { 
            x: 4, 
            transition: { type: "spring" as const, stiffness: 300 } 
        },
    };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full cursor-pointer group"
      onClick={handleCardClick}
      whileHover={{ y: -8, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <motion.div initial="rest" whileHover="hover" animate="rest" className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {name}
        </h2>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-base font-semibold text-gray-700">
            {rating.toFixed(1)}
          </span>
          <div className="flex">
            {renderStars()}
          </div>
          <span className="text-base text-gray-500">
            ({reviewCount})
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-gray-400" />
          <span className="text-base text-gray-600">{location}</span>
        </div>

        <p className="text-gray-500 mb-6">
          {description}
        </p>

        <div
          className="flex items-center gap-2 text-sm font-bold text-gray-800"
        >
          VIEW MORE DETAILS
          <motion.span variants={arrowVariants}>
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SalonCard;
