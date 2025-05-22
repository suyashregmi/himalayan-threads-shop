
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    content: "The quality of these Nepalese clothes is exceptional. I love the vibrant colors and authentic patterns. Will definitely shop here again!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Rajiv Sharma",
    location: "India",
    content: "As someone of Nepalese descent, I'm thrilled to find such authentic clothing online. The attention to detail and craftsmanship is remarkable.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "United Kingdom",
    content: "The pashmina shawl I ordered is absolutely beautiful! The shipping was fast and the packaging was very thoughtful. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-nepal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
