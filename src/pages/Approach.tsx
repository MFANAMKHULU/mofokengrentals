import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Approach = () => {
  const philosophyRef = useRef(null);
  const commitmentRef = useRef(null);
  const isPhilosophyInView = useInView(philosophyRef, { once: true, margin: "-100px" });
  const isCommitmentInView = useInView(commitmentRef, { once: true, margin: "-100px" });

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
        duration: 0.5
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        title="Our Approach"
        description="We believe in exceptional quality, personalized service, and meticulous attention to detail."
        showConsultationButton={false}
        showScrollIndicator={true}
      />

      <motion.section 
        className="py-20 bg-white"
        ref={philosophyRef}
        initial="hidden"
        animate={isPhilosophyInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">The Mofokeng Philosophy</h2>
            <p className="text-gray-600">
              At Mofokeng Rentals, we believe that every detail contributes to creating memorable experiences. 
              Our approach is guided by three core principles that ensure excellence in everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Exceptional Quality",
                description: "We source and maintain premium equipment and furnishings that meet the highest standards, ensuring reliability and elegance for your event.",
                icon: (
                  <motion.div
                    className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </motion.svg>
                  </motion.div>
                )
              },
              {
                title: "Personalized Service",
                description: "We understand that every event is unique. Our approach focuses on understanding your vision and adapting our offerings to suit your specific needs.",
                icon: (
                  <motion.div
                    className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </motion.svg>
                  </motion.div>
                )
              },
              {
                title: "Attention to Detail",
                description: "From selection to setup, we meticulously attend to every element, ensuring cohesive aesthetics and flawless functionality on your special day.",
                icon: (
                  <motion.div
                    className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </motion.svg>
                  </motion.div>
                )
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                variants={{
                  ...itemVariants,
                  hover: cardHoverVariants.hover
                }}
                whileHover="hover"
              >
                <Card className="text-center h-full transform transition-all duration-300 hover:shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-8 relative">
                    {pillar.icon}
                    <motion.h3 
                      className="text-2xl font-serif font-bold mb-4 text-black group-hover:text-black/80 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {pillar.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {pillar.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default Approach;
