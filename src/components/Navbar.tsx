import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <span className={`text-2xl md:text-3xl font-bold ${isScrolled ? 'text-orange-500' : 'text-white'}`}>
                Mofokeng
              </span>
              <span className={`text-sm md:text-base ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
                Rentals
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => `
                px-4 py-2 rounded-full transition-all duration-300
                ${isScrolled 
                  ? `${isActive ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'}`
                  : `${isActive ? 'bg-white/20 text-white' : 'text-white hover:bg-white/10'}`
                }
              `}
            >
              Home
            </NavLink>
            <NavLink 
              to="/approach" 
              className={({ isActive }) => `
                px-4 py-2 rounded-full transition-all duration-300
                ${isScrolled 
                  ? `${isActive ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'}`
                  : `${isActive ? 'bg-white/20 text-white' : 'text-white hover:bg-white/10'}`
                }
              `}
            >
              Our Approach
            </NavLink>
            <NavLink 
              to="/offerings" 
              className={({ isActive }) => `
                px-4 py-2 rounded-full transition-all duration-300
                ${isScrolled 
                  ? `${isActive ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'}`
                  : `${isActive ? 'bg-white/20 text-white' : 'text-white hover:bg-white/10'}`
                }
              `}
            >
              Offerings
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `
                px-4 py-2 rounded-full transition-all duration-300
                ${isScrolled 
                  ? `${isActive ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'}`
                  : `${isActive ? 'bg-white/20 text-white' : 'text-white hover:bg-white/10'}`
                }
              `}
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Consultation Button */}
          <div className="hidden md:block">
            <Button 
              asChild 
              className={`
                rounded-full transition-all duration-300
                ${isScrolled 
                  ? 'bg-orange-500 text-white hover:bg-orange-600' 
                  : 'bg-white text-orange-500 hover:bg-white/90'
                }
              `}
            >
              <Link to="/consultation">Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              className={`
                p-2 rounded-full transition-all duration-300
                ${isScrolled ? 'text-gray-700 hover:bg-orange-100' : 'text-white hover:bg-white/10'}
              `}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-container md:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => `
                    px-4 py-3 rounded-lg transition-colors
                    ${isActive ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'}
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/approach" 
                  className={({ isActive }) => `
                    px-4 py-3 rounded-lg transition-colors
                    ${isActive ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'}
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Approach
                </NavLink>
                <NavLink 
                  to="/offerings" 
                  className={({ isActive }) => `
                    px-4 py-3 rounded-lg transition-colors
                    ${isActive ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'}
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Offerings
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => `
                    px-4 py-3 rounded-lg transition-colors
                    ${isActive ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'}
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </NavLink>
                <div className="pt-2">
                  <Button 
                    asChild 
                    className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-lg"
                  >
                    <Link to="/consultation" onClick={() => setIsMobileMenuOpen(false)}>
                      Consultation
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
