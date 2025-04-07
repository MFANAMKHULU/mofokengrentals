import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, ShoppingCart, Plus } from 'lucide-react';

interface RentalItem {
  title: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

const OrderDisplay = () => {
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState<RentalItem[]>([]);

  // Load order items from localStorage on component mount
  useEffect(() => {
    const savedItems = localStorage.getItem('orderItems');
    if (savedItems) {
      setOrderItems(JSON.parse(savedItems));
    }
  }, []);

  // Save order items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
  }, [orderItems]);

  const removeFromOrder = (index: number) => {
    const newOrderItems = orderItems.filter((_, i) => i !== index);
    setOrderItems(newOrderItems);
  };

  const calculateTotal = () => {
    return orderItems.reduce((total: number, item: RentalItem) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return total + price;
    }, 0);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold">Your Order</span>
              </div>
            </div>

            {orderItems.length === 0 ? (
              <Card className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Your order is empty</h2>
                <p className="text-gray-600 mb-6">Add some items to your order to see them here.</p>
                <Button
                  className="bg-orange-500 text-white hover:bg-orange-600"
                  onClick={() => navigate('/offerings')}
                >
                  Browse Items
                </Button>
              </Card>
            ) : (
              <>
                <div className="space-y-4 mb-8">
                  {orderItems.map((item: RentalItem, index: number) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-20 h-20 object-contain bg-gray-100 rounded-md"
                            />
                            <div>
                              <h3 className="text-lg font-semibold">{item.title}</h3>
                              <p className="text-sm text-gray-600">{item.description}</p>
                              <p className="text-orange-500 font-semibold mt-1">{item.price}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-600"
                            onClick={() => removeFromOrder(index)}
                          >
                            <X className="h-5 w-5" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Order Summary</h3>
                    <span className="text-2xl font-bold text-orange-500">
                      R{calculateTotal()}
                    </span>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>R{calculateTotal()}</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>R{calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-6 bg-orange-500 text-white hover:bg-orange-600"
                    onClick={() => navigate('/checkout')}
                  >
                    Proceed to Checkout
                  </Button>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Floating Add Item Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          className="rounded-full h-14 w-14 bg-orange-500 text-white hover:bg-orange-600 shadow-lg"
          onClick={() => navigate('/offerings')}
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>

      <Footer />
    </>
  );
};

export default OrderDisplay; 