import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const navigateToTab = (tab: string) => {
    navigate(`/offerings?tab=${tab}`);
  };

  return (
    <footer className="bg-orange-50 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-3 text-orange-500">About Us</h4>
            <p className="text-sm">
              Mofokeng Rentals provides premium event and construction equipment rentals, 
              delivering excellence and reliability for all your needs.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-orange-400 hover:text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-orange-400 hover:text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-3 text-orange-500">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
              <li><Link to="/approach" className="hover:text-orange-500">Our Approach</Link></li>
              <li><Link to="/offerings" className="hover:text-orange-500">Offerings</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-3 text-orange-500">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => navigateToTab('furniture')} 
                  className="hover:text-orange-500"
                >
                  Event Furniture
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToTab('tents')} 
                  className="hover:text-orange-500"
                >
                  Tent Hire
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToTab('trailers')} 
                  className="hover:text-orange-500"
                >
                  Trailer Hire
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToTab('equipment')} 
                  className="hover:text-orange-500"
                >
                  Equipment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToTab('toilets')} 
                  className="hover:text-orange-500"
                >
                  Toilets
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToTab('extras')} 
                  className="hover:text-orange-500"
                >
                  Extras
                </button>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-3 text-orange-500">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Standerton, South Africa
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                kalehomofokeng179@gmail.com
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (+27) 73 326 0986
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-orange-100 mt-8 pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Mofokeng Rentals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
