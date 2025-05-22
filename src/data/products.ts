
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Traditional Dhaka Topi",
    price: 1500,
    description: "Authentic Nepalese Dhaka Topi, handcrafted with traditional patterns. Perfect for formal occasions and festivals.",
    image: "https://images.unsplash.com/photo-1551833726-b6e7210a2f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "traditional",
    discount: 0,
    inStock: true,
    featured: true,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "2",
    name: "Pashmina Shawl",
    price: 3500,
    description: "Premium quality pashmina shawl made from the finest Himalayan goat wool. Warm, soft, and luxurious.",
    image: "https://images.unsplash.com/photo-1598532213305-8802ee31d234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80",
    category: "accessories",
    discount: 10,
    inStock: true,
    featured: true,
    colors: ["Red", "Blue", "Black", "Green"]
  },
  {
    id: "3",
    name: "Cotton Kurta",
    price: 2200,
    description: "Comfortable cotton kurta with traditional Nepalese embroidery. Perfect for everyday wear.",
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=709&q=80",
    category: "casual",
    discount: 0,
    inStock: true,
    featured: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Black"]
  },
  {
    id: "4",
    name: "Dhaka Pattern Jacket",
    price: 4500,
    description: "Modern jacket featuring traditional Dhaka patterns. A perfect blend of Nepalese heritage and contemporary style.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
    category: "winter",
    discount: 15,
    inStock: true,
    featured: true,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "5",
    name: "Handwoven Nepali Hat",
    price: 1200,
    description: "Traditional handwoven hat from Nepal, perfect for keeping warm during cold weather.",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "winter",
    discount: 0,
    inStock: true,
    featured: false,
    sizes: ["One Size"]
  },
  {
    id: "6",
    name: "Handmade Yak Wool Sweater",
    price: 5500,
    description: "Premium quality sweater made from Himalayan yak wool. Extremely warm and durable for cold weather.",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "winter",
    discount: 0,
    inStock: true,
    featured: true,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "7",
    name: "Traditional Nepali Dress",
    price: 6500,
    description: "Beautiful traditional Nepali dress with intricate embroidery, perfect for special occasions.",
    image: "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "traditional",
    discount: 5,
    inStock: true,
    featured: true,
    sizes: ["S", "M", "L"]
  },
  {
    id: "8",
    name: "Dhaka Pattern Scarf",
    price: 1800,
    description: "Beautiful scarf with traditional Dhaka patterns. Lightweight and versatile for all seasons.",
    image: "https://images.unsplash.com/photo-1575467678930-c7acd65d2c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
    category: "accessories",
    discount: 0,
    inStock: true,
    featured: false
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
