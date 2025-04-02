import React from 'react';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  // Using the local tent image for the hero section
  const heroImage = '/placeholder.svg';
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatAnimation = {
    y: [0, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror" as const
    }
  };

  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage={heroImage}
        subtitle="Premium Event & Equipment Rentals"
        title="Elevate Your Events"
        description="Experience the elegance of our premium stretch tents and event equipment, perfect for any occasion."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our extensive range of premium rental options designed to elevate your event experience.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6 max-w-[1920px] mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Event Furniture",
                description: "Elegant tables, chairs, and accessories for any celebration.",
                image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              },
              {
                title: "Tent Hire",
                description: "High-quality, stylish tents for any celebration.",
                image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              },
              {
                title: "Trailer Hire",
                description: "Reliable trailers for hire, perfect for transporting goods.",
                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              },
              {
                title: "Extras",
                description: "Essential extras: gas stoves, LED lights, and more..",
                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              },
              {
                title: "Equipment",
                description: "Reliable  equipment: scaffolding, power tools, and generators",
                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                animate={floatAnimation}
                style={{ animationDelay: `${index * 0.3}s` }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden group h-full transform transition-all duration-300 hover:shadow-lg bg-white">
                  <div className="h-40 overflow-hidden">
                    <motion.img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <CardContent className="p-4">
                    <motion.h3 
                      className="text-lg font-serif font-bold mb-2"
                      whileHover={{ color: "#f97316" }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
                    <Button asChild variant="outline" className="w-full text-sm py-1 hover:bg-orange-500 hover:text-white border-orange-500 text-orange-500">
                      <Link to="/offerings">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Why Choose Mofokeng Rentals?</h2>
              <p className="text-gray-600 mb-6">
                With years of experience in the event industry, we understand what makes 
                celebrations truly special. Our commitment to excellence ensures that 
                every detail is carefully considered and perfectly executed.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Premium quality rental equipment and furnishings",
                  "Personalized service tailored to your unique event needs",
                  "Professional delivery, setup, and collection",
                  "Extensive inventory to suit various styles and themes",
                  "Dedicated support throughout your planning journey"
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
                <Link to="/approach">Discover Our Approach</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-orange-100 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                alt="Event Setup" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-orange-200 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
