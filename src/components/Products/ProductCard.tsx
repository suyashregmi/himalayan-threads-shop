
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group product-card bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}% OFF
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1 text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">
                NPR {product.price - (product.price * product.discount / 100)}
              </span>
              
              {product.discount > 0 && (
                <span className="text-sm text-gray-400 line-through">
                  NPR {product.price}
                </span>
              )}
            </div>
            
            <Button 
              size="sm" 
              className="mt-2 transition-all"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
