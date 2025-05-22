
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import ProductGrid from "@/components/Products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products, getProductsByCategory } from "@/data/products";
import { Product } from "@/types";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const [sortOption, setSortOption] = useState("featured");
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter((product) => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (product) => 
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term)
      );
    }
    
    // Sort products
    switch (sortOption) {
      case "price-low":
        result = result.sort((a, b) => 
          (a.price - (a.price * a.discount / 100)) - 
          (b.price - (b.price * b.discount / 100))
        );
        break;
      case "price-high":
        result = result.sort((a, b) => 
          (b.price - (b.price * b.discount / 100)) - 
          (a.price - (a.price * a.discount / 100))
        );
        break;
      case "newest":
        // In a real app, this would sort by date
        result = result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case "featured":
      default:
        result = result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm, sortOption, categoryParam]);
  
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };
  
  const handleSortChange = (value: string) => {
    setSortOption(value);
  };
  
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "traditional", name: "Traditional Wear" },
    { id: "casual", name: "Casual Wear" },
    { id: "accessories", name: "Accessories" },
    { id: "winter", name: "Winter Collection" }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Shop Nepalese Clothing</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="md:col-span-4 flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow"
              />
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={sortOption} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter to find what you're looking for.</p>
              <Button onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
