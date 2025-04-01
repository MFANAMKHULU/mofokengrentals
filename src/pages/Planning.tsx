
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Planning = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1450087532762-e01e58c34677?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Planning Your Event"
        description="We guide you through every step of the planning process to ensure your event is perfectly executed."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">The Planning Process</h2>
            <p className="text-gray-600">
              From initial consultation to final execution, our streamlined planning process ensures nothing is overlooked.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We start with understanding your vision, requirements, and budget constraints."
              },
              {
                step: "2",
                title: "Proposal",
                description: "We create a detailed proposal tailored to your specific event needs."
              },
              {
                step: "3",
                title: "Refinement",
                description: "We work together to refine the details until everything is perfect."
              },
              {
                step: "4",
                title: "Execution",
                description: "Our team handles delivery, setup, and collection with professional precision."
              }
            ].map((phase, index) => (
              <Card key={index} className="relative pt-10">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xl">
                  {phase.step}
                </div>
                <CardContent className="text-center">
                  <h3 className="text-xl font-serif font-bold mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-center">Planning Checklist</h2>
            <p className="text-gray-600 text-center mb-12">
              Use our comprehensive checklist to ensure you cover all bases when planning your event.
            </p>

            <div className="space-y-6">
              {[
                {
                  timeframe: "6-12 Months Before",
                  tasks: [
                    "Establish event vision and theme",
                    "Set your budget",
                    "Create guest list",
                    "Book venue",
                    "Initial consultation with Mofokeng Rentals"
                  ]
                },
                {
                  timeframe: "3-6 Months Before",
                  tasks: [
                    "Finalize rental selections",
                    "Confirm layout and floor plan",
                    "Book additional vendors",
                    "Send invitations",
                    "Plan menu and beverages"
                  ]
                },
                {
                  timeframe: "1-3 Months Before",
                  tasks: [
                    "Confirm final guest count",
                    "Finalize timeline",
                    "Detail meeting with Mofokeng Rentals",
                    "Confirm delivery and pickup times",
                    "Final payments to vendors"
                  ]
                },
                {
                  timeframe: "Week of the Event",
                  tasks: [
                    "Confirm details with all vendors",
                    "Prepare final floor plan",
                    "Delegate responsibilities",
                    "Pack personal items",
                    "Relax and enjoy your event!"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white">
                  <h3 className="text-xl font-serif font-bold mb-4">{section.timeframe}</h3>
                  <ul className="space-y-3">
                    {section.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild className="mr-4">
                <Link to="/consultation">Start Planning</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="#" download>Download Checklist</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Planning;
