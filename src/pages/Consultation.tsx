
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  eventDate: z.string().min(1, { message: 'Please select an event date.' }),
  eventType: z.string().min(1, { message: 'Please select an event type.' }),
  guests: z.string().min(1, { message: 'Please indicate number of guests.' }),
  location: z.string().min(1, { message: 'Please provide your event location.' }),
  rentalNeeds: z.array(z.string()).min(1, { message: 'Please select at least one rental need.' }),
  budget: z.string().min(1, { message: 'Please select a budget range.' }),
  additionalInfo: z.string().optional(),
});

const Consultation = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      guests: '',
      location: '',
      rentalNeeds: [],
      budget: '',
      additionalInfo: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Consultation Request Submitted!",
      description: "Thank you for your request. Our team will contact you shortly to discuss your event needs.",
    });
    form.reset();
  }

  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        title="Request a Consultation"
        description="Tell us about your event, and our experts will create a personalized rental plan."
        showConsultationButton={false}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Let's Plan Together</h2>
              <p className="text-gray-600">
                Fill out the form below to help us understand your event needs. A member of our team will reach out to schedule a personalized consultation.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name*</FormLabel>
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
                            <FormLabel>Email Address*</FormLabel>
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
                            <FormLabel>Phone Number*</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="eventDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Date*</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Type*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select event type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="wedding">Wedding</SelectItem>
                                <SelectItem value="corporate">Corporate Event</SelectItem>
                                <SelectItem value="social">Social Gathering</SelectItem>
                                <SelectItem value="birthday">Birthday Party</SelectItem>
                                <SelectItem value="anniversary">Anniversary</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Guests*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select guest count" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-50">1-50</SelectItem>
                                <SelectItem value="51-100">51-100</SelectItem>
                                <SelectItem value="101-200">101-200</SelectItem>
                                <SelectItem value="201-300">201-300</SelectItem>
                                <SelectItem value="301+">301+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Location*</FormLabel>
                          <FormControl>
                            <Input placeholder="Venue or address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="rentalNeeds"
                      render={() => (
                        <FormItem>
                          <div className="mb-2">
                            <FormLabel>What are you interested in renting?*</FormLabel>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                              { value: "furniture", label: "Tables & Chairs" },
                              { value: "decor", label: "Decor & Styling" },
                              { value: "tableware", label: "Tableware & Linens" },
                              { value: "lighting", label: "Lighting" },
                              { value: "tents", label: "Tents & Structures" },
                              { value: "av", label: "Audio Visual" },
                              { value: "staging", label: "Staging & Dance Floor" },
                              { value: "package", label: "Complete Package" },
                              { value: "other", label: "Other" }
                            ].map((item) => (
                              <FormField
                                key={item.value}
                                control={form.control}
                                name="rentalNeeds"
                                render={({ field }) => {
                                  return (
                                    <FormItem key={item.value} className="flex flex-row items-start space-x-3 space-y-0">
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(item.value)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, item.value])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item.value
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal cursor-pointer">
                                        {item.label}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Approximate Budget Range*</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              {[
                                { value: "under-5000", label: "Under R5,000" },
                                { value: "5000-10000", label: "R5,000 - R10,000" },
                                { value: "10000-20000", label: "R10,000 - R20,000" },
                                { value: "20000-50000", label: "R20,000 - R50,000" },
                                { value: "50000+", label: "R50,000+" },
                              ].map((budget) => (
                                <FormItem key={budget.value} className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value={budget.value} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    {budget.label}
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more about your event, vision, or specific requirements."
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">Submit Consultation Request</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">What to Expect</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Our consultation process is designed to understand your unique needs and create a rental plan that exceeds your expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Initial Contact",
                  description: "Within 24 hours of your submission, a member of our team will reach out to schedule your consultation.",
                  number: "01"
                },
                {
                  title: "Personalized Meeting",
                  description: "We'll discuss your vision, requirements, and budget to create a tailored rental plan for your event.",
                  number: "02"
                },
                {
                  title: "Detailed Proposal",
                  description: "You'll receive a comprehensive proposal outlining our recommended rentals, services, and pricing.",
                  number: "03"
                }
              ].map((step, index) => (
                <Card key={index} className="relative pt-10 text-center h-full">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <CardContent>
                    <h3 className="text-xl font-serif font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
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

export default Consultation;
