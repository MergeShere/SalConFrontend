import { Provider } from 'react-redux';
import { store } from './store/store';
import Footer from './components/Footer';
import Featured from './components/home/Featured';
import Testimonials from './components/home/Testimonials';
import HeroSection from './components/home/HeroSection';
import Navbar from './components/Navbar';
import ScrollToTop from './components/shared/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <HeroSection />
            <Featured />
            <Testimonials />
          </main>

          <Footer />

          <ScrollToTop />
        </div>
      </AnimatePresence>
    </Provider>
  );
}

export default App;