
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const Offerings = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        title="Our Offerings"
        description="Discover our premium selection of event rentals designed to transform your vision into reality."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Premium Rental Collection</h2>
            <p className="text-gray-600">
              Browse our extensive inventory of high-quality rental items for any occasion.
            </p>
          </div>

          <Tabs defaultValue="furniture" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-10">
              <TabsTrigger value="furniture">Furniture</TabsTrigger>
              <TabsTrigger value="decor">Decor</TabsTrigger>
              <TabsTrigger value="tableware">Tableware</TabsTrigger>
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="furniture" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Seating Options",
                    items: ["Chiavari Chairs", "Cross-Back Chairs", "Ghost Chairs", "Lounge Furniture", "Benches"],
                    image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80"
                  },
                  {
                    title: "Tables",
                    items: ["Round Tables", "Rectangular Tables", "Cocktail Tables", "Farm Tables", "Sweetheart Tables"],
                    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  },
                  {
                    title: "Specialty Items",
                    items: ["Bars", "Buffet Tables", "Display Units", "Stages", "Dance Floors"],
                    image: "https://images.unsplash.com/photo-1538688693259-47214e48f4db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                ].map((category, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-serif font-bold mb-3">{category.title}</h3>
                      <ul className="space-y-1 mb-4">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="decor" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Backdrops & Arches",
                    items: ["Floral Walls", "Geometric Designs", "Fabric Draping", "Wooden Arches", "Custom Builds"],
                    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                  },
                  {
                    title: "Lighting",
                    items: ["String Lights", "Uplighting", "Chandeliers", "Candles", "Lanterns"],
                    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  },
                  {
                    title: "Decorative Elements",
                    items: ["Vases & Containers", "Signage", "Table Numbers", "Photo Props", "Floral Arrangements"],
                    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                ].map((category, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-serif font-bold mb-3">{category.title}</h3>
                      <ul className="space-y-1 mb-4">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tableware" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Dinnerware",
                    items: ["Fine China", "Modern Collections", "Charger Plates", "Rustic Options", "Specialty Plates"],
                    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80"
                  },
                  {
                    title: "Glassware",
                    items: ["Wine Glasses", "Champagne Flutes", "Water Goblets", "Specialty Cocktail", "Vintage Crystal"],
                    image: "https://images.unsplash.com/photo-1603570116320-bb174ad19db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  },
                  {
                    title: "Flatware & Linens",
                    items: ["Gold Flatware", "Silver Flatware", "Table Runners", "Napkins", "Tablecloths"],
                    image: "https://images.unsplash.com/photo-1570631810246-de071fe2d252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                ].map((category, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-serif font-bold mb-3">{category.title}</h3>
                      <ul className="space-y-1 mb-4">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="equipment" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Tents & Structures",
                    items: ["Marquee Tents", "Clear-Top Tents", "Sailcloth Tents", "Pole Tents", "Frame Tents"],
                    image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  },
                  {
                    title: "Audio Visual",
                    items: ["Sound Systems", "Projectors", "Screens", "Microphones", "Lighting Equipment"],
                    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  },
                  {
                    title: "Climate Control",
                    items: ["Heaters", "Fans", "Air Conditioners", "Misters", "Fire Pits"],
                    image: "https://images.unsplash.com/photo-1582037928769-383b5abe7fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                ].map((category, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-serif font-bold mb-3">{category.title}</h3>
                      <ul className="space-y-1 mb-4">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Packages & Themes</h2>
            <p className="text-gray-600">
              Explore our curated collections designed to simplify your planning process while ensuring a cohesive look.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Minimalist",
                description: "Clean lines, neutral tones, and elegant simplicity for the contemporary celebration.",
                image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                price: "From R8,500"
              },
              {
                title: "Rustic Elegance",
                description: "Blend natural textures with refined elements for a sophisticated yet warm atmosphere.",
                image: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                price: "From R10,200"
              },
              {
                title: "Classic Romance",
                description: "Timeless elements that create an atmosphere of traditional luxury and sentimentality.",
                image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                price: "From R12,800"
              },
              {
                title: "Bohemian Chic",
                description: "Free-spirited designs with eclectic touches for a relaxed yet stylish celebration.",
                image: "https://images.unsplash.com/photo-1569948840386-254febeee3a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                price: "From R9,600"
              },
              {
                title: "Glamorous Luxe",
                description: "Opulent textures, rich colors, and dramatic lighting for a high-end experience.",
                image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                price: "From R15,500"
              },
              {
                title: "Garden Party",
                description: "Fresh, vibrant, and nature-inspired elements for outdoor celebrations.",
                image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                price: "From R11,300"
              }
            ].map((theme, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={theme.image} 
                    alt={theme.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-serif font-bold">{theme.title}</h3>
                    <span className="text-sm font-semibold bg-black text-white px-3 py-1 rounded-full">{theme.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{theme.description}</p>
                  <Button asChild className="w-full">
                    <Link to="/consultation">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Custom Solutions Available</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Don't see exactly what you're looking for? We specialize in creating custom rental packages
            tailored to your specific vision and requirements.
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base">
            <Link to="/consultation">Request a Custom Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Offerings;
