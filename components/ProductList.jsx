import ProductCard from "./ProductCard";
import { fetchDataFromApi } from "@/utils/api";

const ProductList = async () => {
  const { data: products } = await fetchDataFromApi("/api/products?populate=*");

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-10 md:mb-12 text-center text-2xl font-bold text-gray-800 lg:text-3xl">
          Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  my-14 mx-20">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
