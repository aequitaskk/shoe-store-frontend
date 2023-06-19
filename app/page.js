import HeroBanner from "@/components/HeroBanner";
import ProductList from "@/components/ProductList";

export const metadata = {
  title: "Shoe Ecommerce",
  description: "Shoe ecommerce website built with Next.js and Strapi",
};

export default function Home() {
  return (
    <main>
      <HeroBanner/>
      <ProductList />
    </main>
  );
}
