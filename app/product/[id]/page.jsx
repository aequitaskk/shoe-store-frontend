import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import ProductDetails from "@/components/ProductDetails";
import { fetchDataFromApi } from "@/utils/api";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetailPage = async ({ params }) => {
  const { data: product } = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${params.id}`
  );

  return <ProductDetails product={product} />;
};

export default ProductDetailPage;

export async function generateStaticParams() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  return products.data.map((product) => ({
    params: {
      slug: product.attributes.slug,
    },
  }));
}
