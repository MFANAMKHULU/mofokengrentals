
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll be in touch soon.",
    });
    form.reset();
  }

  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Contact Us"
        description="Reach out to our team for inquiries, bookings, or custom solutions."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're planning a wedding, corporate event, or special celebration,
                our team is ready to assist you with premium rental solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">+27 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p className="text-gray-600">info@mofokengrentals.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Location</h3>
                    <p className="text-gray-600">123 Event Street</p>
                    <p className="text-gray-600">Johannesburg, South Africa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                    <p className="text-gray-600">Saturday: 10am - 2pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="How can we help you?" rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our rental services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How far in advance should I book rentals?",
                  answer: "We recommend booking 3-6 months in advance for large events to ensure availability of our most popular items. For smaller events, 1-2 months is typically sufficient."
                },
                {
                  question: "Do you offer delivery and setup services?",
                  answer: "Yes, we provide delivery, setup, and collection services for all our rentals. Our team ensures everything is properly installed and arranged according to your specifications."
                },
                {
                  question: "What is your cancellation policy?",
                  answer: "Cancellations made 30+ days before your event receive a full refund minus a small administrative fee. Cancellations within 30 days are subject to a percentage fee based on proximity to the event date."
                },
                {
                  question: "Can I see the items before renting?",
                  answer: "Absolutely! We welcome you to schedule a showroom visit to see our inventory in person. This helps ensure the items meet your expectations for quality and style."
                },
                {
                  question: "Do you offer custom packages?",
                  answer: "Yes, we specialize in creating custom rental packages tailored to your specific event needs, theme, and budget. Contact us to discuss your requirements."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
