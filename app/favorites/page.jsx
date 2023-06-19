"use client";

import { useSelector } from "react-redux";
import ProductCard from "@/components/ProductCard";

const FavoritesPage = () => {
  const { favorites } = useSelector((state) => state.cart);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 h-screen">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-10 md:mb-12 text-center text-2xl font-bold text-gray-800 lg:text-3xl">
          Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  my-14 mx-20">
          {favorites?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
