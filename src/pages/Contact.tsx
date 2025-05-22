
import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    console.log("Form values:", values);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your message has been sent. We'll get back to you soon!");
      form.reset();
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Contact Us</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Have questions about our products, shipping, or sustainability practices? Want to collaborate or visit our workshop?
                We'd love to hear from you! Reach out using the form or contact us directly using the information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Visit Our Store</h3>
                    <address className="not-italic text-gray-600">
                      NepalThreads Flagship Store<br />
                      Thamel, JP Road<br />
                      Kathmandu, Nepal
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@nepalthreads.com" className="hover:underline">info@nepalthreads.com</a><br />
                      <a href="mailto:support@nepalthreads.com" className="hover:underline">support@nepalthreads.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-gray-600">
                      +977 1 4123456<br />
                      +977 9841234567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Store Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: 12:00 PM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-medium mb-3">We're Located Here</h3>
                <div className="aspect-[4/3] bg-gray-200 rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2599282913747!2d85.3104198!3d27.7155891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4f7%3A0x7ed6c864d1b71fd0!2sThamel%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1715932814968!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NepalThreads Store Location"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
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
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter subject" {...field} />
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
                          <Textarea 
                            placeholder="Enter your message..." 
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
