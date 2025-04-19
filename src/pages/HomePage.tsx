import Navbar from '../components/Navbar';
import HeroSection from '../components/home/HeroSection';
import Featured from '../components/home/Featured';
import Testimonials from '../components/home/Testimonials';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <>
      <Navbar />
      
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        
        <Featured />
        
        <Testimonials />
      </motion.main>
      
      <Footer />
    </>
  );
};

export default HomePage;