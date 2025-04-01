
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-serif mb-4">Mofokeng Rentals</h3>
            <p className="mb-4 text-gray-400">
              Exceptional event rentals and services to make your celebration unforgettable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/planning" className="text-gray-400 hover:text-white">Planning</Link></li>
              <li><Link to="/approach" className="text-gray-400 hover:text-white">Our Approach</Link></li>
              <li><Link to="/offerings" className="text-gray-400 hover:text-white">Offerings</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Event Equipment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Furniture Rentals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Decor & Styling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Setup & Breakdown</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Event Street</p>
              <p className="mb-2">Johannesburg, South Africa</p>
              <p className="mb-2">+27 123 456 7890</p>
              <p className="mb-2">info@mofokengrentals.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mofokeng Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
