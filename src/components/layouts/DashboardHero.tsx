import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Menu, ArrowRight, Unlock } from 'lucide-react';
import service_img_5 from '../../assets/images/service-img-6.svg';
import service_img_6 from '../../assets/images/service-img-7.svg';
interface SearchFilters {
  location: string;
  price: string;
}

interface DashboardHeroProps {
  title?: string;
  subtitle?: string;
  onSearch?: (query: string, filters: SearchFilters) => void;
}

const DashboardHero: React.FC<DashboardHeroProps> = ({
  title = "Find your Perfect Salon",
  subtitle = "Discover and book the best beauty services from top rated salons across Ghana",
  onSearch
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  const locations = [
    'Accra', 'Kumasi', 'Tamale', 'Cape Coast', 'Takoradi', 'Ho', 'Koforidua', 'Sunyani'
  ];

  const priceRanges = [
    'Under GHS 50', 'GHS 50 - 100', 'GHS 100 - 200', 'GHS 200 - 500', 'Above GHS 500'
  ];

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' }
  ];

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery, { location, price });
    }
  };

  const handleToggleShow = () => {
    setShowToggle(prev => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    setShowToggle(false);
    if (sectionId === 'services') {
      return;
    }
    sectionId = sectionId.replace('/', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="flex justify-between items-center p-6 lg:px-12">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
          </motion.div>

          {/* Menu Button */}
          <motion.button
            onClick={handleToggleShow}
            className="w-12 h-12 text-black bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-black/20 transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-5 h-5 text-black" />
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <img src="/src/assets/images/Abstraction.png" alt="Salon Connect Logo" className="h-30 w-20 mx-auto mt-4" />
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>

        {/* Search Interface */}
        <motion.div 
          className="bg-white rounded-full p-1 shadow-2xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center">
            {/* Search Input */}
            <div className="flex-1 px-6 py-4">
              <input
                type="text"
                placeholder="Search for Salon"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-gray-800 bg-transparent border-0 outline-none placeholder-gray-500 text-base font-medium"
              />
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsLocationOpen(!isLocationOpen);
                  setIsPriceOpen(false);
                }}
                className="flex items-center justify-between px-4 py-4 text-gray-600 hover:text-gray-800 transition-colors border-l border-gray-200 min-w-[120px]"
              >
                <span className="text-sm font-medium">
                  {location || 'Location'}
                </span>
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isLocationOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLocationOpen && (
                <motion.div 
                  className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-[200px]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-2 max-h-48 overflow-y-auto">
                    {locations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setLocation(loc);
                          setIsLocationOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Price Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsPriceOpen(!isPriceOpen);
                  setIsLocationOpen(false);
                }}
                className="flex items-center justify-between px-4 py-4 text-gray-600 hover:text-gray-800 transition-colors border-l border-gray-200 min-w-[100px]"
              >
                <span className="text-sm font-medium">
                  {price ? price.split(' ')[0] === 'Under' ? 'Under 50' : price.includes('-') ? price.split(' ')[1] + '-' + price.split(' ')[3] : 'Above 500' : 'Price'}
                </span>
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isPriceOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPriceOpen && (
                <motion.div 
                  className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-[180px]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-2 max-h-48 overflow-y-auto">
                    {priceRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() => {
                          setPrice(range);
                          setIsPriceOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Search Button */}
            <motion.button
              onClick={handleSearch}
              className="bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-colors ml-1 mr-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {showToggle && (
        <motion.div 
          className='fixed h-[100vh] bg-[#fff] w-[70%] sm:w-[50%] z-50 top-0 right-0 border border-t-0 border-l-0 border-zinc-800'
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        >
          <div className='flex flex-col items-center text-[18px] capitalize mt-20'>
            {navLinks.map((item, index) => (
              <motion.button
                onClick={() => scrollToSection(item.href)}
                className="py-3 px-6 border-zinc-800 first:border-zinc-800 w-full hover:bg-gray-50"
                key={index}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}

            <div className="space-y-5 mt-6">
              <motion.button 
                className="flex items-center justify-center space-x-2 bg-transparent text-black text-[20px] hover:bg-transparent py-2 px-4"
                whileHover={{ scale: 1.05 }}
              >
                <Unlock className="w-5 h-5" />
                <span>sign in</span>
              </motion.button>
              
              <motion.button 
                className="flex items-center justify-center space-x-2 bg-transparent text-black text-[15px] lg:text-[20px] border-4 border-black hover:bg-transparent py-2 px-4"
                whileHover={{ scale: 1.05 }}
              >
                <span>sign up</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Click outside to close dropdowns */}
      {(isLocationOpen || isPriceOpen || showToggle) && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsLocationOpen(false);
            setIsPriceOpen(false);
            setShowToggle(false);
          }}
        />
      )}
    </div>
  );
};

export default DashboardHero;