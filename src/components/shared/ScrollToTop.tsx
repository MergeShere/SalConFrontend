import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);

      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollPosition = window.scrollY;
      const footerOffset = 300;

      const nearFooter = documentHeight - (scrollPosition + windowHeight) < footerOffset;
      setIsNearFooter(nearFooter);
    };

    window.addEventListener('scroll', checkScrollPosition);

    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800"
          style={{
            right: '2rem'
          }}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, bottom: isNearFooter ? '5rem' : '2rem' }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            bottom: isNearFooter ? '5rem' : '2rem',
            transition: { duration: 0.3 }
          }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "loop", 
              duration: 1.5 
            }}
          >
            <ArrowUp size={24} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;