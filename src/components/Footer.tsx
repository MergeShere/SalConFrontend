import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const linkVariants = {
    hover: {
      scale: 1.05,
      x: 5,
      transition: { duration: 0.2 }
    }
  };

  const iconContainerVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <footer className="flex flex-col bg-black text-white w-full">
      {/* Main footer content */}
      <div className="flex flex-col lg:flex-row justify-between items-start p-8 sm:p-10 lg:p-16 gap-8">
        {/* Left side - Logo and tagline */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            className="flex items-center mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex items-center justify-center">
              <img 
                src="/src/assets/images/Salon Connect-02 1.png" 
                alt="SalonConnect Logo" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain" 
              />
            </div>
          </motion.div>
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-md leading-tight"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1, x: 3 }}
            transition={{ duration: 0.3 }}
          >
            Straight, wavy, or <br className="hidden sm:block" /> 
            curly, if it's healthy, <br className="hidden sm:block" />
            it's beautiful
          </motion.h1>
        </div>

        {/* Right side - Contact information */}
        <div className="mt-6 lg:mt-20 flex flex-col space-y-4 sm:space-y-6 w-full lg:w-auto">
          <motion.div 
            className="flex items-center"
            variants={iconContainerVariants}
            whileHover="hover"
          >
            <MapPin className="mr-4 flex-shrink-0" size={20} />
            <span className="text-sm sm:text-base">Accra, Ghana</span>
          </motion.div>
          <motion.div 
            className="flex items-center"
            variants={iconContainerVariants}
            whileHover="hover"
          >
            <Mail className="mr-4 flex-shrink-0" size={20} />
            <span className="text-sm sm:text-base">support@salonconnect</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom navigation and copyright */}
      <div className="border-t border-gray-500 mt-6 lg:mt-0">
        <div className="flex flex-col sm:flex-row justify-between items-center p-6 sm:p-8 lg:px-16 lg:py-6">
          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-10 mb-4 sm:mb-0 w-full sm:w-auto">
            <motion.a 
              href="#" 
              className="hover:underline text-sm sm:text-base"
              variants={linkVariants}
              whileHover="hover"
            >
              Services
            </motion.a>
            <motion.a 
              href="#featured" 
              className="hover:underline text-sm sm:text-base"
              variants={linkVariants}
              whileHover="hover"
            >
              Features
            </motion.a>
            <motion.a 
              href="#testimonials" 
              className="hover:underline text-sm sm:text-base"
              variants={linkVariants}
              whileHover="hover"
            >
              Testimonials
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:underline text-sm sm:text-base"
              variants={linkVariants}
              whileHover="hover"
            >
              Support
            </motion.a>
          </nav>
          
          {/* Copyright text */}
          <motion.div 
            className="text-xs sm:text-sm mt-4 sm:mt-0"
            whileHover={{ opacity: 0.8 }}
          >
            © Copyright 2025, All Rights Reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;