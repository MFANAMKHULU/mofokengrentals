
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

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
      className="hero-section min-h-screen flex items-center justify-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content text-center text-white max-w-4xl px-4 flex flex-col items-center z-10">
        {subtitle && (
          <p className="mb-4 text-sm md:text-base uppercase tracking-widest animate-fade-in">
            {subtitle}
          </p>
        )}
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 font-serif animate-fade-in leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in">
            {description}
          </p>
        )}
        {showConsultationButton && (
          <div className="absolute bottom-10 right-10 z-20 animate-fade-in">
            <Button asChild className="bg-[#e7c0c0] text-black hover:bg-[#d9acac] px-8 py-6 text-base rounded-full">
              <Link to="/consultation">Consultation</Link>
            </Button>
          </div>
        )}
        {showScrollIndicator && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-20">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
