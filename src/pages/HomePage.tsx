import Navbar from '../components/Navbar';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import Featured from '../components/home/Featured';
import Testimonials from '../components/home/testimonials';
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
        <ServicesSection/>
        <Featured />
        <Testimonials />
      </motion.main>
      <Footer />
    </>
  );
};

export default HomePage;