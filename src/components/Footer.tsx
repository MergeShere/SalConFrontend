import React from 'react';
import { MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col bg-black text-white w-full">
      {/* Main footer content */}
      <div className="flex flex-col lg:flex-row justify-between items-start p-4 sm:p-6 lg:p-10 gap-8">
        {/* Left side - Logo and tagline */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center">
              <img 
                src="/src/assets/images/Salon Connect-02 1.png" 
                alt="SalonConnect Logo" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain" 
              />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-md leading-tight">
            Straight, wavy, or <br className="hidden sm:block" /> 
            curly, if it's healthy, <br className="hidden sm:block" />
            it's beautiful
          </h1>
        </div>

        {/* Right side - Contact information */}
        <div className="mt-6 lg:mt-20 flex flex-col space-y-4 sm:space-y-6 w-full lg:w-auto">
          <div className="flex items-center">
            <MapPin className="mr-2 flex-shrink-0" size={20} />
            <span className="text-sm sm:text-base">Accra, Ghana</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2 flex-shrink-0" size={20} />
            <span className="text-sm sm:text-base">support@salonconnect</span>
          </div>
        </div>
      </div>

      {/* Bottom navigation and copyright */}
      <div className="border-t border-gray-600 mt-6 lg:mt-0">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 lg:px-10 lg:py-4">
          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 mb-4 sm:mb-0 w-full sm:w-auto">
            <a href="#" className="hover:underline text-sm sm:text-base">Services</a>
            <a href="#" className="hover:underline text-sm sm:text-base">Features</a>
            <a href="#" className="hover:underline text-sm sm:text-base">Testimonials</a>
            <a href="#" className="hover:underline text-sm sm:text-base">Support</a>
          </nav>
          
          {/* Copyright text */}
          <div className="text-xs sm:text-sm mt-2 sm:mt-0">
            © Copyright 2025, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;