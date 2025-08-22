import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Settings } from 'lucide-react';
import service_img_5 from '../../assets/images/service-img-6.svg';
import service_img_6 from '../../assets/images/service-img-7.svg';
import { SearchContainer } from '../shared/search/SearchContainer';

const menuItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Settings", href: "/settings", icon: Settings },
];

interface SearchFilters {
  location: string;
  price: string;
}

interface DashboardHeroProps {
  title?: string;
  subtitle?: string;
  onSearch?: (query: string, filters: SearchFilters) => void;
}

const DashboardHero = ({
  title = "Find your Perfect Salon",
  subtitle = "Discover and book the best beauty services from top rated salons across Ghana",
  onSearch
}: DashboardHeroProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div 
      className="relative bg-[#1a1a1a] text-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url(${service_img_5}), url(${service_img_6})`,
        backgroundSize: "small, contain",
        backgroundPosition: "left bottom, right center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundAttachment: "scroll, scroll",
      }}
    >

      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="flex justify-between items-center p-6 lg:px-12">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 bg-white backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 ml-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-black hover:text-white" />
            ) : (
              <Menu className="w-5 h-5 text-black hover:text-white" />
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full right-6 lg:right-12 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden"
            >
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:bg-white/50 transition-colors border-b border-gray-100 last:border-b-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <img src="/src/assets/images/Salon Connect-02 1.png" alt="Salon Connect Logo" className="h-20 w-20 mx-auto " />
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>

        <motion.div 
          className="max-w-5xl mx-auto w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SearchContainer onSearch={onSearch} />
        </motion.div>
      </div>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardHero;
