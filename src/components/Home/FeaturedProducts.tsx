
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProductGrid from "../Products/ProductGrid";
import { Product } from "@/types";

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Button asChild variant="outline">
            <Link to="/products">View All</Link>
          </Button>
        </div>
        
        <ProductGrid products={products} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
