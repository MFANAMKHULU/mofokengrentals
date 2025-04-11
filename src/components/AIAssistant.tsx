import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, X, Send, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initialMessage = {
    role: 'assistant',
    content: 'Hello! I\'m Mofokeng Rental assistant. How can I help you today?'
  };
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Add useEffect to reset messages when chat is closed
  useEffect(() => {
    if (!isOpen) {
      setMessages([initialMessage]);
      setInput('');
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const getBusinessStatus = (): { status: string; nextOpen?: string } => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hour + minutes / 60;

    const hours = {
      weekday: { open: 8, close: 17 },
      saturday: { open: 8, close: 15 },
      sunday: { open: 8, close: 13 }
    };

    const getNextOpeningTime = () => {
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowDay = tomorrow.getDay();

      let openingTime: string;
      if (tomorrowDay >= 1 && tomorrowDay <= 5) {
        openingTime = '08:00';
      } else if (tomorrowDay === 6) {
        openingTime = '08:00';
      } else {
        openingTime = '08:00';
      }

      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return `${days[tomorrowDay]} at ${openingTime}`;
    };

    // Check current status
    let currentHours;
    if (day >= 1 && day <= 5) {
      currentHours = hours.weekday;
    } else if (day === 6) {
      currentHours = hours.saturday;
    } else {
      currentHours = hours.sunday;
    }

    // Opening soon (within 1 hour of opening)
    if (currentTime < currentHours.open && currentTime >= currentHours.open - 1) {
      return { status: 'Opening soon' };
    }
    
    // Closing soon (within 1 hour of closing)
    if (currentTime < currentHours.close && currentTime >= currentHours.close - 1) {
      return { status: 'Closing soon' };
    }
    
    // Currently open
    if (currentTime >= currentHours.open && currentTime < currentHours.close) {
      return { status: 'Open' };
    }
    
    // Closed
    return { 
      status: 'Closed',
      nextOpen: getNextOpeningTime()
    };
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Event Planning Assistance
    if (lowerMessage.includes('event') || lowerMessage.includes('party') || lowerMessage.includes('wedding') || lowerMessage.includes('funeral')) {
      if (lowerMessage.includes('wedding')) {
        return 'For weddings, we recommend:\n\n' +
          'Essential Package:\n' +
          '- Gold Chairs (for ceremony)\n' +
          '- Round Tables (for reception)\n' +
          '- Tent options (based on guest count)\n' +
          '- Bride and Groom Chairs\n' +
          '- Circle Arch (for photos)\n\n' +
          'Visit our Offerings page to see all items and calculate costs. We also offer free consultation to help plan your perfect wedding setup.';
      }
      if (lowerMessage.includes('funeral')) {
        return 'For funeral services, we typically recommend:\n\n' +
          'Standard Setup:\n' +
          '- Tent (size based on attendance)\n' +
          '- Plastic Chairs\n' +
          '- Tables for catering\n' +
          '- Mobile Toilets\n\n' +
          'We understand the sensitivity of these events and provide priority setup and breakdown services. Contact us for immediate assistance.';
      }
      return 'We can help plan your event setup. Common requirements include:\n\n' +
        '1. Seating & Tables:\n' +
        '   - Various chair options (R7-R35 per chair)\n' +
        '   - Tables (R30 per table)\n\n' +
        '2. Shelter:\n' +
        '   - Different tent sizes available\n' +
        '   - Setup included\n\n' +
        '3. Facilities:\n' +
        '   - Mobile toilets\n' +
        '   - Power solutions\n\n' +
        'Would you like to schedule a free consultation to discuss your specific needs?';
    }

    // Package Deals
    if (lowerMessage.includes('package') || lowerMessage.includes('deal') || lowerMessage.includes('discount') || lowerMessage.includes('combo')) {
      return 'We offer several package deals:\n\n' +
        '1. Small Event Package:\n' +
        '   - 1 Tent (5x10)\n' +
        '   - 50 Plastic Chairs\n' +
        '   - 6 Round Tables\n' +
        '   Contact us for package pricing\n\n' +
        '2. Large Event Package:\n' +
        '   - 1 Tent (7x12)\n' +
        '   - 100 Chairs\n' +
        '   - 12 Tables\n' +
        '   - 2 Mobile Toilets\n' +
        '   Contact us for package pricing\n\n' +
        '3. Construction Package:\n' +
        '   - Scaffolding\n' +
        '   - Concrete Mixer\n' +
        '   - Water Tank\n' +
        '   Special weekly rates available\n\n' +
        'Custom packages can be arranged based on your needs.';
    }

    // Special Requirements
    if (lowerMessage.includes('special') || lowerMessage.includes('custom') || lowerMessage.includes('specific')) {
      return 'We can accommodate special requirements:\n\n' +
        '1. Extended Rental Periods:\n' +
        '   - Weekly rates available\n' +
        '   - Long-term rental discounts\n\n' +
        '2. Custom Setups:\n' +
        '   - Mixed chair types\n' +
        '   - Special arrangements\n' +
        '   - Specific layout requests\n\n' +
        '3. Priority Services:\n' +
        '   - Early setup\n' +
        '   - Late collection\n' +
        '   - Emergency delivery\n\n' +
        'Contact us to discuss your specific requirements.';
    }

    // Seasonal Information
    if (lowerMessage.includes('season') || lowerMessage.includes('holiday') || lowerMessage.includes('december') || lowerMessage.includes('christmas')) {
      return 'Important seasonal information:\n\n' +
        '1. Peak Seasons (Book Early):\n' +
        '   - December holidays\n' +
        '   - Easter weekend\n' +
        '   - Long weekends\n\n' +
        '2. Holiday Period:\n' +
        '   - Special operating hours may apply\n' +
        '   - Early booking recommended\n' +
        '   - Holiday rates may apply\n\n' +
        '3. Weather Considerations:\n' +
        '   - All tents are waterproof\n' +
        '   - Heaters available for winter\n\n' +
        'Contact us well in advance for holiday period bookings.';
    }

    // Navigation Help
    if (lowerMessage.includes('where') || lowerMessage.includes('find') || lowerMessage.includes('how to') || lowerMessage.includes('where is')) {
      if (lowerMessage.includes('furniture') || lowerMessage.includes('chair') || lowerMessage.includes('table')) {
        return 'You can find our furniture items in the "Offerings" page. Click on the "Offerings" link in the navigation menu, then select the "Furniture" tab. There you\'ll find all our chairs, tables, and other furniture items with prices and details.';
      }
      if (lowerMessage.includes('equipment') || lowerMessage.includes('generator') || lowerMessage.includes('mixer')) {
        return 'Our equipment is listed in the "Offerings" page. Click on the "Offerings" link, then select the "Equipment" tab to see all our available equipment with prices and specifications.';
      }
      if (lowerMessage.includes('tent') || lowerMessage.includes('marquee')) {
        return 'Our tent selection is available in the "Offerings" page. Click on the "Offerings" link, then select the "Tents" tab to view all our tent options with sizes and pricing.';
      }
      if (lowerMessage.includes('trailer')) {
        return 'You can find our trailers in the "Offerings" page. Click on the "Offerings" link, then select the "Trailers" tab to see all available trailer options and their specifications.';
      }
      if (lowerMessage.includes('toilet') || lowerMessage.includes('bathroom')) {
        return 'Our portable toilet options are listed in the "Offerings" page. Click on the "Offerings" link, then select the "Toilets" tab to view our available options.';
      }
    }

    // Specific Item Queries
    if (lowerMessage.includes('chair')) {
      return 'Yes, we have several types of chairs available in our Offerings under the Furniture tab:\n\n' +
        '- Plastic Chairs: R7 per chair per day (durable and lightweight)\n' +
        '- Steel Chairs: R25 per chair per day (modern and sturdy)\n' +
        '- Gold Chairs: R35 per chair per day (elegant with cushion)\n' +
        '- Jumbo Chairs: R7 per chair per day (oversized comfort)\n' +
        '- Small Plastic Chairs: R7 per chair per day (space-efficient)\n' +
        '- Bride and Groom Chairs: R450 per chair (specially designed)\n\n' +
        'To rent chairs:\n1. Go to the Offerings page\n2. Select the Furniture tab\n3. Choose your preferred chair type\n4. Add to your order';
    }

    if (lowerMessage.includes('table')) {
      return 'Yes, we have several table options available in our Offerings under the Furniture tab:\n\n' +
        '- Round Plastic Tables: R30 per day (seats 8 people)\n' +
        '- Rectangle Tables: R30 per day (seats 6 people)\n' +
        '- Bar Tables: R50 per day (perfect for cocktail areas)\n\n' +
        'To rent tables:\n1. Visit the Offerings page\n2. Select the Furniture tab\n3. Choose your preferred table type\n4. Add to your order';
    }

    // FAQ Preview
    if (lowerMessage.includes('faq') || lowerMessage.includes('frequently asked') || lowerMessage.includes('common questions')) {
      return 'Here are our Frequently Asked Questions:\n\n' +
        '1. What are your operating hours?\n' +
        '   - Mon-Fri: 8:00-17:00\n' +
        '   - Sat: 8:00-15:00\n' +
        '   - Sun: 8:00-13:00\n\n' +
        '2. Do you offer delivery?\n' +
        '   - Yes, we deliver in Standerton and surrounding areas\n' +
        '   - Delivery fees vary by location and items\n\n' +
        '3. How do I make a booking?\n' +
        '   - Browse items on our Offerings page\n' +
        '   - Add items to your order\n' +
        '   - Complete checkout\n' +
        '   - Pay deposit to secure booking\n\n' +
        '4. What payment methods do you accept?\n' +
        '   - We accept cash and bank transfers\n' +
        '   - Deposit required for bookings\n\n' +
        '5. Do you provide setup services?\n' +
        '   - Yes, we provide setup for tents and large equipment\n' +
        '   - Setup fees are included in tent rentals\n\n' +
        '6. What is your cancellation policy?\n' +
        '   - Please contact us at least 48 hours before your rental date\n' +
        '   - Cancellation fees may apply\n\n' +
        '7. Do you offer consultations?\n' +
        '   - Yes, we offer free consultations\n' +
        '   - We can help plan your event setup\n\n' +
        '8. What is the minimum rental period?\n' +
        '   - Most items are rented per day\n' +
        '   - Special rates available for longer periods\n\n' +
        'You can ask me for more details about any of these topics!';
    }
    
    // Operating Hours
    if (lowerMessage.includes('hours') || lowerMessage.includes('open') || lowerMessage.includes('time')) {
      const status = getBusinessStatus();
      let statusMessage = `Current Status: ${status.status}`;
      if (status.status === 'Closed' && status.nextOpen) {
        statusMessage += `\nNext Opening: ${status.nextOpen}`;
      }

      return 'Our operating hours are:\n' +
        'Monday - Friday: 08:00 - 17:00\n' +
        'Saturday: 08:00 - 15:00\n' +
        'Sunday: 08:00 - 13:00\n\n' +
        statusMessage + '\n\n' +
        'You can visit us at our location in Standerton, South Africa, or browse our complete catalog on the Offerings page.';
    }
    
    // Contact Information
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return 'You can reach us through:\n\nPhone: (+27) 73 326 0986\nEmail: katlehomofokeng179@gmail.com\nLocation: Standerton, South Africa\n\nYou can also:\n1. Visit our Contact page for more details\n2. Fill out our contact form\n3. Schedule a consultation\n\nOur team is ready to assist you!';
    }

    // Furniture Pricing and Information
    if (lowerMessage.includes('furniture') || lowerMessage.includes('chair') || lowerMessage.includes('table')) {
      return 'We offer various furniture options:\n- Plastic Chairs: R7 per chair per day\n- Steel Chairs: R25 per chair per day\n- Gold Chairs (with cushion): R35 per chair per day\n- Round Plastic Tables (seats 8): R30 per table per day\n- Rectangle Tables (seats 6): R30 per table per day\n- Bar Tables: R50 per day\n- Bride and Groom Chairs: R450 per chair\nAll our furniture is well-maintained and perfect for events.';
    }

    // Equipment Information
    if (lowerMessage.includes('equipment') || lowerMessage.includes('generator') || lowerMessage.includes('mixer') || lowerMessage.includes('scaffold')) {
      return 'Our equipment rentals include:\n- Water Storage Tank: R800/day\n- Scaffolding: R700/day\n- Jojo Tank: R350/day\n- Generator: R600/day\n- Concrete Mixer: R600/day\n- Band Saw: R600 for cow meat, R300 for sheep per day\nAll equipment comes with basic operating instructions.';
    }

    // Trailer Information
    if (lowerMessage.includes('trailer') || lowerMessage.includes('transport')) {
      return 'Available trailers:\n- Campmaster 250 & 350: R350/day\n- Camel 75: R300/day\n- Box Trailer: R500/day\nAll trailers are well-maintained and come with necessary safety features.';
    }

    // Tent Information
    if (lowerMessage.includes('tent') || lowerMessage.includes('marquee')) {
      return 'Our tent options include:\n- 5x10 Tent: R1,200/day\n- 7x12 Tent: R1,100/day\n- Window Tent: R1,500/day\n- Stretch Tent: R600/day\n- Caravan Tent: R450/day\nAll tents are waterproof and come with setup service.';
    }

    // Toilet Facilities
    if (lowerMessage.includes('toilet') || lowerMessage.includes('bathroom') || lowerMessage.includes('restroom')) {
      return 'We offer two types of portable toilets:\n- Standard Mobile Toilet: R1,150/day (includes ventilation and maintenance)\n- Flushable Toilet: R450/day\nAll toilets are regularly serviced and maintained for hygiene.';
    }

    // Extra Items
    if (lowerMessage.includes('extra') || lowerMessage.includes('additional') || lowerMessage.includes('heater') || lowerMessage.includes('arch')) {
      return 'Additional items available:\n- Crafting Dish: R200/day\n- Infrared Heater: R150/day\n- Circle Arch: R450/day\nPerfect for enhancing your event setup.';
    }

    // Booking and Payment
    if (lowerMessage.includes('book') || lowerMessage.includes('reserve') || lowerMessage.includes('payment')) {
      return 'To make a booking:\n1. Browse our offerings and select your items\n2. Add items to your order\n3. Go to checkout to complete your booking\n4. We\'ll confirm availability and provide payment details\nWe require a deposit to secure your booking.';
    }

    // Delivery Information
    if (lowerMessage.includes('delivery') || lowerMessage.includes('transport') || lowerMessage.includes('pickup')) {
      return 'We offer delivery and pickup services within Standerton and surrounding areas. Delivery fees depend on location and items rented. Please contact us for specific delivery quotes.';
    }

    // Consultation
    if (lowerMessage.includes('consultation') || lowerMessage.includes('advice') || lowerMessage.includes('recommend')) {
      return 'We offer free consultations to help plan your event. Our team can recommend the right equipment and setup based on your event type, guest count, and venue. Visit our Consultation page to schedule a meeting.';
    }
    
    // Default response with navigation
    return 'I can help you navigate our rental system and find what you need. Here are some options:\n\n' +
      '1. Browse Our Categories (in Offerings page):\n' +
      '   - Furniture (chairs, tables)\n' +
      '   - Equipment (generators, mixers)\n' +
      '   - Tents (various sizes)\n' +
      '   - Trailers (different capacities)\n' +
      '   - Toilets (portable options)\n' +
      '   - Extras (heaters, arches)\n\n' +
      '2. Quick Actions:\n' +
      '   - View prices and availability\n' +
      '   - Make a booking\n' +
      '   - Get contact information\n' +
      '   - Schedule a consultation\n\n' +
      'What would you like to know more about?';
  };

  return (
    <>
      {/* Floating button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-4 right-4 md:bottom-6 md:right-24 rounded-full p-3 shadow-lg transition-all duration-300 z-[100]",
          isOpen ? "bg-gray-500 hover:bg-gray-600" : "bg-orange-500 hover:bg-orange-600"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 md:bottom-24 md:right-24 w-[calc(100%-2rem)] md:w-96 h-[60vh] md:h-[500px] flex flex-col shadow-xl z-[100]">
          <CardContent className="p-4 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Bot className="h-6 w-6 text-orange-500" />
                <h3 className="font-bold">Mofokeng Rental</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-3 rounded-lg max-w-[80%]",
                    message.role === 'user'
                      ? "bg-orange-100 ml-auto"
                      : "bg-gray-100"
                  )}
                >
                  {message.content}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-gray-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIAssistant; 