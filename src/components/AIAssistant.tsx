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
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI assistant. How can I help you navigate through our rental system today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Navigation help
    if (lowerMessage.includes('offerings') || lowerMessage.includes('rent') || lowerMessage.includes('equipment')) {
      return 'You can find our rental offerings by clicking on the "Offerings" link in the navigation menu. There you\'ll find categories like furniture, equipment, trailers, and tents.';
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('phone')) {
      return 'You can contact us through the "Contact" page. Our phone number is (+27) 73 326 0986, and our email is katlehomofokeng179@gmail.com. We\'re located in Standerton, South Africa.';
    }
    
    if (lowerMessage.includes('consultation') || lowerMessage.includes('book') || lowerMessage.includes('schedule')) {
      return 'To request a consultation, click on the "Consultation" link in the navigation menu. You can fill out the form there with your event details, and our team will get back to you.';
    }
    
    if (lowerMessage.includes('approach') || lowerMessage.includes('how') || lowerMessage.includes('work')) {
      return 'Our approach focuses on exceptional quality, personalized service, and attention to detail. You can learn more about our philosophy on the "Our Approach" page.';
    }
    
    if (lowerMessage.includes('order') || lowerMessage.includes('cart') || lowerMessage.includes('checkout')) {
      return 'To place an order, browse our offerings and click "Add to Order" on the items you want. You can then view your order by clicking the floating cart button at the bottom right of the screen.';
    }
    
    // Default response
    return 'I can help you navigate our rental system. You can ask me about our offerings, how to place an order, contact information, or request a consultation. What would you like to know?';
  };

  return (
    <>
      {/* Floating button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-24 rounded-full p-3 shadow-lg transition-all duration-300",
          isOpen ? "bg-gray-500 hover:bg-gray-600" : "bg-orange-500 hover:bg-orange-600"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-24 w-80 md:w-96 h-[500px] flex flex-col shadow-xl">
          <CardContent className="p-4 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Bot className="h-6 w-6 text-orange-500" />
                <h3 className="font-bold">AI Assistant</h3>
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