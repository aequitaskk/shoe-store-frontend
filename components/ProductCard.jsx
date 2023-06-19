import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  
  return (
    <div className="flex flex-col justify-center items-center mx-4 my-4">
      <Link
        href={`/product/${product?.attributes.slug}`}
        className="justify-center flex flex-col hover:scale-105 duration-200"
      >
        <Image
          src={`${product?.attributes?.thumbnail?.data?.attributes?.url}`}
          alt="Product Image"
          width={300}
          height={300}
          className="rounded-md"
        />
        <div className="mt-2">
          <h2 className="flex justify-center mr-2 text-lg">
            {product?.attributes.name}
          </h2>
          <div className="text-center">
            {product?.attributes.original_price ? (
              <div>
                <span className="text-sm mr-2 line-through">
                  ${product?.attributes.original_price}
                </span>
                <span className="text-sm">${product?.attributes.price}</span>
              </div>
            ) : (
              <p className="text-sm">${product?.attributes.price}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
