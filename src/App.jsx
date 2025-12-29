import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import MLAIPage from './pages/MLAIPage';
import FullStackPage from './pages/FullStackPage';
import FirmwarePage from './pages/FirmwarePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      <ScrollToTop />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/mlai" element={<MLAIPage />} />
          <Route path="/fullstack" element={<FullStackPage />} />
          <Route path="/firmware" element={<FirmwarePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default App;
