import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, useSearchParams } from 'react-router-dom';

// Define types for our items
interface RentalItem {
  title: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

const Offerings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'furniture';
  const [searchQuery, setSearchQuery] = useState('');

  // Define all items with their categories
  const allItems: RentalItem[] = [
    // Furniture items
    {
      title: "Bar Table",
      description: "Stylish bar tables perfect for cocktail areas and standing receptions.",
      image: "images/furniture/bartable.jpeg",
      price: "R50 per day",
      category: "furniture"
    },
    {
      title: "Jumbo Chair",
      description: "Comfortable oversized chairs for a statement seating arrangement.",
      image: "images/furniture/jumbochair.jpeg",
      price: "R7 per chair per day",
      category: "furniture"
    },
    {
      title: "Plastic Chair",
      description: "Durable and lightweight chairs ideal for outdoor events.",
      image: "images/furniture/plasticchair.jpeg",
      price: "R7 per chair per day",
      category: "furniture"
    },
    {
      title: "Steel Chair",
      description: "Modern and sturdy chairs ideal for outdoor events.",
      image: "images/furniture/steelchair.jpg",
      price: "R25 per chair per day",
      category: "furniture"
    },
    {
      title: "Round Plastic Table",
      description: "Round tables perfect for intimate dining settings seats 8 people.",
      image: "images/furniture/circletable.jpeg",
      price: "R30 per table per day",
      category: "furniture"
    },
    {
      title: "Rectangle Table",
      description: "Versatile rectangular tables for various seating arrangements seats 6 people.",
      image: "images/furniture/recttable.jpg",
      price: "R30 per chair per day",
      category: "furniture"
    },
    {
      title: "Gold Chair",
      description: "Elegant gold-finished chairs for a luxurious touch includes cushion .",
      image: "images/furniture/goldchair.jpg",
      price: "R35 per table per day",
      category: "furniture"
    },
    {
      title: "Small Plastic Chair",
      description: "Compact chairs ideal for space-efficient seating.",
      image: "images/furniture/smallchair.jpeg",
      price: "R7 per chair per day",
      category: "furniture"
    },
    {
      title: "Bride and Groom Chair",
      description: "Specially designed chairs for the bride and groom.",
      image: "images/furniture/bridechair.jpg",
      price: "R450 per chair",
      category: "furniture"
    },

    // Equipment items
    {
      title: "Water Storage Tank",
      description: "Large capacity water storage tank for events and construction sites.",
      image: "images/equipment/waterstoragetank.jpg",
      price: "R800/day",
      category: "equipment"
    },
    {
      title: "Scaffolding",
      description: "Professional grade scaffolding for construction and event setup.",
      image: "images/equipment/scalffolder.jpeg",
      price: "R700/day",
      category: "equipment"
    },
    {
      title: "Jojo Tank",
      description: "Portable water storage solution.",
      image: "images/equipment/jojotank.jpeg",
      price: "R350/day",
      category: "equipment"
    },
    {
      title: "Generator",
      description: "Reliable Petrol Generator delivers consistent and dependable power when you need it most.",
      image: "images/equipment/generator.jpeg",
      price: "R600/day",
      category: "equipment"
    },
    {
      title: "Concrete Mixer",
      description: "Heavy-duty concrete mixer for construction projects.",
      image: "images/equipment/concretemixer.jpg",
      price: "R600/day",
      category: "equipment"
    },
    {
      title: "Band Saw",
      description: "Meat cutting saw for both sheep and cow meat.",
      image: "images/equipment/bandsaw.jpeg",
      price: "R600 for cow meat R300 for sheep per day",
      category: "equipment"
    },

    // Trailers items
    {
      title: "Campmaster 250",
      description: "Compact and versatile trailer perfect for small loads and weekend getaways.",
      image: "images/trailers/campmaster250.jpg",
      price: "R350/day",
      category: "trailers"
    },
    {
      title: "Campmaster 350",
      description: "Medium-sized trailer with increased capacity for larger loads.",
      image: "images/trailers/campmaster350.jpg",
      price: "R350/day",
      category: "trailers"
    },
    {
      title: "Camel 75",
      description: "Perfect for homeowners and light-duty transport designed to handle your everyday hauling needs with ease and reliability.",
      image: "images/trailers/camel75300.jpg",
      price: "R300/day",
      category: "trailers"
    },
    {
      title: "Box Trailer",
      description: "Large capacity box trailer for secure and protected cargo transport.",
      image: "images/trailers/enhanced_500boxtrailer.jpg",
      price: "R500/day",
      category: "trailers"
    },

    // Tents items
    {
      title: "5x10 Tent",
      description: "Perfect for small gatherings and intimate events.",
      image: "images/tents/5x10tent.jpeg",
      price: "R1,200/day",
      category: "tents"
    },
    {
      title: "7x12 Tent",
      description: "Ideal for medium-sized events with comfortable space.",
      image: "images/tents/7x12tent.jpeg",
      price: "R1,100/day",
      category: "tents"
    },
    {
      title: "Window Tent",
      description: "Elegant tent with window panels for natural light.",
      image: "images/tents/windowtent.jpeg",
      price: "R1,500/day",
      category: "tents"
    },
    {
      title: "Stretch Tent",
      description: "Modern and versatile tent for unique event spaces.",
      image: "images/tents/Strecthtent.jpeg",
      price: "R600/day",
      category: "tents"
    },
    {
      title: "Caravan Tent",
      description: "Spacious tent perfect for smaller events and celebrations.",
      image: "images/tents/carbanatent.jpeg",
      price: "R450/day",
      category: "tents"
    },

    // Toilets items
    {
      title: "Standard Mobile Toilet",
      description: "Essential sanitation solution for events. Features a durable construction, proper ventilation, and regular maintenance service.",
      image: "images/toilet/mobiletoilet.jpg",
      price: "R1,150/day",
      category: "toilets"
    },
    {
      title: "Flushable Toilet",
      description: "Durable plastic flushable toilet for easy, hygienic use anywhere. Perfect for camping, events, or job sites.",
      image: "images/toilet/toilet.jpg",
      price: "R450/day",
      category: "toilets"
    },

    // Extras items
    {
      title: "Crafting Dish",
      description: "Professional-grade crafting dish for food preparation and presentation.",
      image: "images/extras/craftingdish.jpeg",
      price: "R200/day",
      category: "extras"
    },
    {
      title: "Infrared Heater",
      description: "Energy-efficient infrared heater for outdoor events and gatherings.",
      image: "images/extras/infaredheater.jpeg",
      price: "R150/day",
      category: "extras"
    },
    {
      title: "Circle Arch",
      description: "Elegant circular arch perfect for event entrances and photo opportunities.",
      image: "images/extras/circlearch.jpeg",
      price: "R450/day",
      category: "extras"
    },
    {
      title: "Patio Heater",
      description: "Portable patio heater for comfortable outdoor temperature control.",
      image: "images/extras/pationheater.jpeg",
      price: "R250/day",
      category: "extras"
    },
    {
      title: "Artificial Red Grass",
      description: "Vibrant red artificial grass for decorative purposes and event flooring.",
      image: "images/extras/artificialredgrass.jpeg",
      price: "R150/day",
      category: "extras"
    },
    {
      title: "Artificial Grass",
      description: "High-quality artificial grass for event flooring and decoration.",
      image: "images/extras/Artificialgrass.jpeg",
      price: "R150/day",
      category: "extras"
    },
    {
      title: "Skottel Braai",
      description: "Traditional South African cooking equipment for outdoor events.",
      image: "images/extras/skottelbraai.jpeg",
      price: "R350/day",
      category: "extras"
    },
    {
      title: "One Plate Gas",
      description: "Compact single-plate gas stove for convenient cooking.",
      image: "images/extras/oneplategas.jpeg",
      price: "R200/day",
      category: "extras"
    },
    {
      title: "Gas Stove",
      description: "Full-size gas stove for professional cooking needs.",
      image: "images/extras/gasstove.jpg",
      price: "R400/day",
      category: "extras"
    },
    {
      title: "Gas Cylinder",
      description: "Standard gas cylinder for various cooking and heating applications.",
      image: "images/extras/gascylinder.jpg",
      price: "R150/day",
      category: "extras"
    }
  ];

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery) return allItems;
    
    const query = searchQuery.toLowerCase();
    return allItems.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group items by category
  const itemsByCategory = useMemo(() => {
    return filteredItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, RentalItem[]>);
  }, [filteredItems]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        title="Our Offerings"
        description="Discover our premium selection of event rentals designed to transform your vision into reality."
      />

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search for items..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Button 
                className="bg-orange-500 text-white hover:bg-orange-600"
                onClick={() => setSearchQuery('')}
              >
                {searchQuery ? 'Clear' : 'Search'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Premium Rental Collection</h2>
            <p className="text-gray-600">
              Browse our extensive inventory of high-quality rental items for any occasion.
            </p>
          </div>

          {searchQuery ? (
            // Show all search results when searching
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-serif font-bold mb-6">Search Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-contain bg-gray-100 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-serif font-bold">{item.title}</h3>
                        <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3 text-sm">{item.description}</p>
                      <div className="flex justify-end items-center">
                        <span className="text-orange-500 font-semibold">{item.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {filteredItems.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-600">No items found matching your search.</p>
                    </div>
              )}
              </div>
          ) : (
            // Show tabs when not searching
            <Tabs defaultValue={defaultTab} className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-6 mb-10">
                <TabsTrigger value="trailers">Trailers</TabsTrigger>
                <TabsTrigger value="furniture">Furniture</TabsTrigger>
                <TabsTrigger value="tents">Tents</TabsTrigger>
                <TabsTrigger value="equipment">Equipment</TabsTrigger>
                <TabsTrigger value="toilets">Toilets</TabsTrigger>
                <TabsTrigger value="extras">Extras</TabsTrigger>
              </TabsList>

              {Object.entries(itemsByCategory).map(([category, items]) => (
                <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-contain bg-gray-100 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-serif font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-3 text-sm">{item.description}</p>
                          <div className="flex justify-end items-center">
                        <span className="text-orange-500 font-semibold">{item.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
              ))}
          </Tabs>
          )}
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
                title: "Combo 1",
                description: "Free-spirited designs with eclectic touches for a relaxed yet stylish celebration.",
                image: "https://images.unsplash.com/photo-1569948840386-254febeee3a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                price: "From R9,600"
              },
              {
                title: "Combo 2",
                description: "Opulent textures, rich colors, and dramatic lighting for a high-end experience.",
                image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                price: "From R15,500"
              },
              {
                title: "Combo 3",
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
