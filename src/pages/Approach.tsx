
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Approach = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Our Approach"
        description="Bringing together style, quality, and exceptional service for unforgettable events."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">The Mofokeng Philosophy</h2>
            <p className="text-gray-600">
              At Mofokeng Rentals, we believe that every detail contributes to creating memorable experiences. 
              Our approach is guided by three core principles that ensure excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Exceptional Quality",
                description: "We source and maintain premium equipment and furnishings that meet the highest standards, ensuring reliability and elegance for your event.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )
              },
              {
                title: "Personalized Service",
                description: "We understand that every event is unique. Our approach focuses on understanding your vision and adapting our offerings to suit your specific needs.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )
              },
              {
                title: "Attention to Detail",
                description: "From selection to setup, we meticulously attend to every element, ensuring cohesive aesthetics and flawless functionality on your special day.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                )
              }
            ].map((pillar, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  {pillar.icon}
                  <h3 className="text-xl font-serif font-bold mb-3">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
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
              <img 
                src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Our Team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Our Commitment</h2>
              <p className="text-gray-600 mb-6">
                With over a decade of experience in the events industry, Mofokeng Rentals has built a reputation for reliability, 
                creativity, and exceptional service. We understand that each event tells a unique story, and our commitment 
                is to provide the perfect elements to help tell yours.
              </p>
              <p className="text-gray-600 mb-8">
                We invest in maintaining and updating our inventory, training our staff, and refining our processes 
                to ensure we consistently deliver beyond expectations. Our dedication to excellence means you can 
                trust us with the important details of your special occasion.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/offerings">View Our Offerings</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">What Our Clients Say</h2>
            <p className="text-gray-600">
              We're proud of the experiences we've helped create and the relationships we've built with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & David",
                event: "Wedding",
                testimonial: "Mofokeng Rentals transformed our venue into the wedding of our dreams. Their attention to detail and quality furnishings made all the difference."
              },
              {
                name: "Corporate Events Ltd",
                event: "Annual Gala",
                testimonial: "Working with the Mofokeng team made our event planning seamless. Their professionalism and premium inventory elevated our corporate gathering."
              },
              {
                name: "Thabo Nkosi",
                event: "50th Birthday",
                testimonial: "I couldn't be happier with the service provided. From selection to setup, everything was handled with care and exceeded my expectations."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border-none shadow-sm">
                <CardContent className="p-8">
                  <svg className="text-gray-300 mb-4" width="45" height="36" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0C6.04762 0 0 6.04762 0 13.5C0 20.9524 6.04762 27 13.5 27C20.9524 27 27 20.9524 27 13.5C27 6.04762 20.9524 0 13.5 0ZM13.5 21.8571C8.88095 21.8571 5.14286 18.119 5.14286 13.5C5.14286 8.88095 8.88095 5.14286 13.5 5.14286C18.119 5.14286 21.8571 8.88095 21.8571 13.5C21.8571 18.119 18.119 21.8571 13.5 21.8571Z"/>
                    <path d="M31.5 0C24.0476 0 18 6.04762 18 13.5C18 20.9524 24.0476 27 31.5 27C38.9524 27 45 20.9524 45 13.5C45 6.04762 38.9524 0 31.5 0ZM31.5 21.8571C26.881 21.8571 23.1429 18.119 23.1429 13.5C23.1429 8.88095 26.881 5.14286 31.5 5.14286C36.119 5.14286 39.8571 8.88095 39.8571 13.5C39.8571 18.119 36.119 21.8571 31.5 21.8571Z"/>
                  </svg>
                  <p className="text-gray-600 mb-6 italic">{testimonial.testimonial}</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Approach;
