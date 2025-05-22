
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Home/Hero";
import FeaturedCategories from "@/components/Home/FeaturedCategories";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Testimonials from "@/components/Home/Testimonials";
import { getFeaturedProducts } from "@/data/products";

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts products={featuredProducts} />
      <Testimonials />
    </Layout>
  );
};

export default Index;
