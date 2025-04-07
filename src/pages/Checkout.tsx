import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface RentalItem {
  title: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderItems, setOrderItems] = useState<RentalItem[]>([]);
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  // Load order items from localStorage
  useEffect(() => {
    const savedItems = localStorage.getItem('orderItems');
    if (savedItems) {
      setOrderItems(JSON.parse(savedItems));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    return orderItems.reduce((total: number, item: RentalItem) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return total + price;
    }, 0);
  };

  const sendOrderEmail = async () => {
    const orderDetails = {
      customerInfo: formData,
      items: orderItems,
      total: calculateTotal(),
      orderDate: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          template_id: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          user_id: 'YOUR_USER_ID', // Replace with your EmailJS user ID
          template_params: {
            to_email: 'katlehomofokeng179@gmail.com',
            customer_name: `${formData.firstName} ${formData.lastName}`,
            customer_email: formData.email,
            customer_phone: formData.phone,
            order_items: orderItems.map(item => `${item.title} - ${item.price}`).join('\n'),
            total_amount: `R${calculateTotal()}`,
            order_date: new Date().toLocaleString(),
          }
        }),
      });

      if (response.ok) {
        toast({
          title: "Order Submitted Successfully",
          description: "Your order details have been sent. We'll contact you shortly.",
        });
        // Clear the cart
        localStorage.removeItem('orderItems');
        navigate('/');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error Submitting Order",
        description: "There was a problem submitting your order. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      sendOrderEmail();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      navigate('/order-display');
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName.trim() !== '';
      case 2:
        return formData.lastName.trim() !== '';
      case 3:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      case 4:
        return /^\d{10}$/.test(formData.phone);
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">What's your first name?</h2>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
              className="w-full"
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">What's your last name?</h2>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              className="w-full"
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">What's your email address?</h2>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className="w-full"
            />
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">What's your phone number?</h2>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full"
              maxLength={10}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="p-6">
              <div className="mb-8">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full mx-1 ${
                        step === currentStep
                          ? 'bg-orange-500'
                          : step < currentStep
                          ? 'bg-orange-200'
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                {renderStep()}
              </div>
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="bg-orange-500 text-white hover:bg-orange-600 flex items-center gap-2"
                >
                  {currentStep === 4 ? 'Complete Order' : 'Next'}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout; 