import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  backgroundImage: string;
  subtitle?: string;
  title: string;
  description?: string;
  showScrollIndicator?: boolean;
  showConsultationButton?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  subtitle,
  title,
  description,
  showScrollIndicator = true,
  showConsultationButton = false,
}) => {
  return (
    <div 
      className="hero-section h-[90vh] flex items-center justify-center relative z-0"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-content text-center text-white max-w-4xl px-4 flex flex-col items-center z-10">
        {subtitle && (
          <p className="mb-4 text-sm md:text-base uppercase tracking-widest animate-fade-in">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif animate-fade-in leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in">
            {description}
          </p>
        )}
        {showScrollIndicator && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-10">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
