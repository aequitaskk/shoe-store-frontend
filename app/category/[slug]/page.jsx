import { fetchDataFromApi } from "@/utils/api";
import ProductCard from "@/components/ProductCard";

const CategoryPage = async ({ params }) => {
  const { data: categories } = await fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${params.slug}`
  );
  // console.log(categories);

  const { data: products } = await fetchDataFromApi(
    `/api/products?populate=*&categories&filters[categories][slug][$eq]=${params.slug}`
  );

  // console.log(products);

  return (
    <div className="h-screen">
      <h2 className="text-3xl font-semibold my-10 capitalize text-center">
        {params.slug.replace(/-/g, " ")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  my-14 mx-20">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export async function generateStaticParams() {
  const categories = await fetchDataFromApi("/api/categories?populate=*");
  return categories.data.map((category) => ({
    params: {
      slug: category.attributes.slug,
    },
  }));
}
