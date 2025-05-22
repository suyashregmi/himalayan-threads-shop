
import Layout from "@/components/Layout/Layout";

const OurStory = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Our Story</h1>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            NepalThreads began as a dream shared by two friends, Anisha and Rajesh, during a trek through the Himalayan 
            foothills in 2015. While staying in remote villages, they were captivated by the incredible textile traditions 
            being practiced—techniques passed down through generations that were in danger of being lost as younger people 
            moved to cities for more predictable livelihoods.
          </p>
          
          <div className="rounded-lg overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1602335305484-17c7a2ee53f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Himalayan landscape" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">From Inspiration to Reality</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            In one particular village, they met Maya, an elderly weaver whose intricate dhaka patterns were sought after 
            throughout the region. Despite the beauty of her work, she worried that no one would continue the tradition 
            after her. This encounter became the catalyst for NepalThreads.
          </p>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            Anisha, with her background in fashion design, and Rajesh, with experience in social entrepreneurship, returned 
            to Kathmandu with a mission: to create a brand that would honor Nepal's textile heritage while creating sustainable 
            livelihoods for artisans like Maya.
          </p>
          
          <div className="rounded-lg overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1621176572490-a021dad187e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Traditional textile weaving" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Growing Through Challenges</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The early days weren't easy. Less than a year after founding NepalThreads, the devastating 2015 earthquake struck 
            Nepal. Many of our artisan partners lost homes and workshops. Instead of giving up, we pivoted our resources to 
            help with rebuilding efforts, strengthening our bonds with the communities we work with.
          </p>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            Through perseverance and the incredible resilience of our artisan partners, we slowly rebuilt and expanded. What 
            started as a small collection of traditional scarves has grown into a full range of clothing and accessories that 
            blend traditional techniques with contemporary designs.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Today and Tomorrow</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Today, NepalThreads works with over 200 artisans across Nepal, providing fair wages, safe working conditions, 
            and a platform for their craftsmanship to reach a global audience. We've established training programs to pass 
            these skills to younger generations, ensuring these techniques won't be lost.
          </p>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            As we look to the future, we're expanding our sustainability initiatives, exploring innovative natural materials, 
            and continuing to find new ways to honor Nepal's rich textile heritage while creating contemporary pieces that 
            resonate with customers worldwide.
          </p>
          
          <div className="rounded-lg overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1523282310917-57c94215f54f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Modern Nepalese fashion" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <p className="text-lg font-medium text-center">
            When you purchase from NepalThreads, you're not just buying a garment—you're supporting a vision for a more 
            equitable and sustainable fashion industry, one that honors tradition while embracing the future.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default OurStory;
