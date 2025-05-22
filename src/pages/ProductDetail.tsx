
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/data/products";
import ProductGrid from "@/components/Products/ProductGrid";
import { getFeaturedProducts } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = getFeaturedProducts().filter(p => p.id !== id).slice(0, 4);
  
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes && product.sizes.length > 0 ? product.sizes[0] : undefined
  );
  
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colors && product.colors.length > 0 ? product.colors[0] : undefined
  );
  
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, the product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/products")}>
            Back to Products
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  };
  
  const discountedPrice = product.price - (product.price * product.discount / 100);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover" 
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-lg text-gray-500 mb-6 capitalize">{product.category}</p>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-primary">
                NPR {discountedPrice}
              </span>
              
              {product.discount > 0 && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    NPR {product.price}
                  </span>
                  <span className="bg-primary text-white px-2 py-1 rounded text-sm font-semibold">
                    {product.discount}% OFF
                  </span>
                </>
              )}
            </div>
            
            <p className="text-gray-700 mb-8">{product.description}</p>
            
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Size</h3>
                <RadioGroup 
                  value={selectedSize} 
                  onValueChange={setSelectedSize}
                  className="flex flex-wrap gap-3"
                >
                  {product.sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <RadioGroupItem id={`size-${size}`} value={size} />
                      <Label htmlFor={`size-${size}`}>{size}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
            
            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Color</h3>
                <RadioGroup 
                  value={selectedColor} 
                  onValueChange={setSelectedColor}
                  className="flex flex-wrap gap-3"
                >
                  {product.colors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <RadioGroupItem id={`color-${color}`} value={color} />
                      <Label htmlFor={`color-${color}`}>{color}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
            
            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button 
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
              
              <Button 
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
            
            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Category:</span> {product.category}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Availability:</span> {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
