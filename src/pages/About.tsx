
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">About NepalThreads</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              At NepalThreads, we envision a world where traditional Nepalese craftsmanship and modern fashion sensibilities 
              coexist in harmony, creating unique garments that tell stories of heritage while embracing contemporary style.
            </p>
            <p className="text-gray-700">
              We strive to be the bridge that connects Nepal's rich textile traditions with global markets, ensuring that 
              artisans receive fair compensation and recognition for their incredible skills and creativity.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1580181461767-781cabe5326a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Nepalese textile artisan at work" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1590153716161-4f59e2d96157?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Sustainable Practices" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Commitment to Sustainability</h2>
            <p className="text-gray-700 mb-4">
              Sustainability isn't just a buzzword for us—it's at the core of everything we do. We use eco-friendly, 
              locally-sourced materials and traditional techniques that have minimal environmental impact.
            </p>
            <p className="text-gray-700">
              From natural dyes extracted from local plants to water conservation practices in our production process, 
              we're committed to preserving Nepal's pristine natural beauty for generations to come.
            </p>
          </div>
        </div>

        <div className="bg-nepal-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Authenticity</h3>
                <p className="text-gray-700">
                  We honor traditional Nepalese craftsmanship and ensure our products truly represent the rich cultural heritage of Nepal.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Ethical Production</h3>
                <p className="text-gray-700">
                  We believe in fair wages, safe working conditions, and empowering the communities we work with through education and opportunities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Quality & Innovation</h3>
                <p className="text-gray-700">
                  We blend time-honored techniques with contemporary design to create pieces that are both timeless and relevant.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Join Our Journey</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Every NepalThreads purchase is more than just buying clothing—it's joining a movement that celebrates craftsmanship, 
            preserves cultural heritage, and creates sustainable livelihoods.
          </p>
          <a href="/our-story" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-colors">
            Read Our Story
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default About;
