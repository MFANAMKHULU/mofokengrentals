
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface HeroSectionProps {
  backgroundImage: string;
  subtitle?: string;
  title: string;
  description?: string;
  showConsultationButton?: boolean;
  showScrollIndicator?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  subtitle,
  title,
  description,
  showConsultationButton = true,
  showScrollIndicator = true,
}) => {
  return (
    <div 
      className="hero-section min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content text-center text-white max-w-4xl px-4 py-20">
        {subtitle && (
          <p className="mb-4 text-sm md:text-base uppercase tracking-widest animate-fade-in">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-serif animate-fade-in">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in">
            {description}
          </p>
        )}
        {showConsultationButton && (
          <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base animate-fade-in">
            <Link to="/consultation">Consultation</Link>
          </Button>
        )}
        {showScrollIndicator && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
