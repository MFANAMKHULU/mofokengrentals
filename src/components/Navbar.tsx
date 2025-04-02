import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-orange-500 text-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-serif">
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold">Mofokeng</span>
            <span className="text-sm md:text-base">Rentals</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={({ isActive }) => `px-4 py-5 text-white hover:bg-orange-600 transition-colors ${isActive ? 'bg-orange-600' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/approach" className={({ isActive }) => `px-4 py-5 text-white hover:bg-orange-600 transition-colors ${isActive ? 'bg-orange-600' : ''}`}>
            Our Approach
          </NavLink>
          <NavLink to="/offerings" className={({ isActive }) => `px-4 py-5 text-white hover:bg-orange-600 transition-colors ${isActive ? 'bg-orange-600' : ''}`}>
            Offerings
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `px-4 py-5 text-white hover:bg-orange-600 transition-colors ${isActive ? 'bg-orange-600' : ''}`}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="outline" className="bg-white text-orange-500 border-white hover:bg-orange-50">
            <Link to="/consultation">Consultation</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" className="text-white hover:bg-orange-600 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
