import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Approach from "./pages/Approach";
import Offerings from "./pages/Offerings";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import Order from "./pages/Order";
import OrderDisplay from "./pages/OrderDisplay";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import AIAssistant from './components/AIAssistant';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-display" element={<OrderDisplay />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <AIAssistant />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
