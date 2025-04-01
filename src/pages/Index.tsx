
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  // Using an image that will be similar to the wedding image in the mockup
  const heroImage = 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80';
  
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage={heroImage}
        subtitle="Crafting Memorable Event Experiences"
        title="Your Perfect Day Begins Here"
        description="From enchanting venues to exceptional services, we curate every element to transform your vision into an exquisite celebration of love."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our extensive range of premium rental options designed to elevate your event experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Event Furniture",
                description: "Elegant tables, chairs, lounge furniture, and accessories for any celebration.",
                image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              },
              {
                title: "Decor & Styling",
                description: "Beautiful centerpieces, backdrops, lighting, and decorative elements to create ambiance.",
                image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              },
              {
                title: "Equipment & Essentials",
                description: "Quality sound systems, tents, dinnerware, and everything needed for a seamless event.",
                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              }
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/offerings">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
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
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/approach">Discover Our Approach</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-gray-200 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                alt="Event Setup" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-gray-300 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Create Something Extraordinary?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's start planning your perfect event. Our team is ready to help bring your vision to life with our premium rental collection.
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base">
            <Link to="/consultation">Request a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
