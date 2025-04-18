import { motion } from 'framer-motion';
import { FaFacebook, FaSquareInstagram } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { FeaturedCardProps } from '../../types';

const FeaturedCard = ({ name, title, image }: FeaturedCardProps) => {
  const iconVariants = {
    hover: {
      scale: 1.2,
      color: '#000',
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="bg-white shadow-md overflow-hidden rounded-lg"
      whileHover={{ 
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="mb-4 overflow-hidden">
        <motion.img 
          className="w-full object-cover h-64 transition-all duration-500"
          src={image} 
          alt={name} 
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.5 }
          }}
        />
      </div>

      <div className="p-4 md:p-6">
        <motion.h1 
          className="text-base text-dark-gray-clr md:text-xl font-semibold"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1, scale: 1.01 }}
        >
          {name}
        </motion.h1>
        
        <motion.h2 
          className="text-sm text-dark-gray-clr mb-4"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          {title}
        </motion.h2>

        <div className="flex gap-6 text-xl text-gray-500">
          <motion.div 
            whileHover="hover"
            className="cursor-pointer"
          >
            <motion.div variants={iconVariants}>
              <FaFacebook />
            </motion.div>
          </motion.div>
          
          <motion.div 
            whileHover="hover"
            className="cursor-pointer"
          >
            <motion.div variants={iconVariants}>
              <FaSquareInstagram />
            </motion.div>
          </motion.div>
          
          <motion.div 
            whileHover="hover"
            className="cursor-pointer"
          >
            <motion.div variants={iconVariants}>
              <IoMail />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCard;