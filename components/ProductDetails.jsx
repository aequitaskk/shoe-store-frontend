"use client";
import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import Link from "next/link";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import ReactMarkDown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToFavorites } from "@/store/cartSlice";

const ProductDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="w-full min-h-screen mt-10 mb-20">
      <div className="lg:flex justify-center max-w-6xl mx-auto">
        {/* Left */}
        <div className="w-[500px] justify-center mx-auto">
          <ProductDetailCarousel images={product[0].attributes.image.data} />
        </div>

        {/* Right */}
        <div className="w-[400px] flex-col mx-auto lg:ml-4 mt-10 lg:mt-0">
          <h2 className="font-semibold text-3xl">
            {product[0].attributes?.name}
          </h2>
          <p>{product[0].attributes?.subtitle}</p>
          {product[0].attributes?.original_price ? (
            <div className="flex">
              <p className="mr-2 line-through">
                ${product[0].attributes?.original_price}
              </p>
              <p>${product[0].attributes?.price}</p>
            </div>
          ) : (
            <p>${product[0].attributes?.price}</p>
          )}

          <div className="mt-10">
            <div className="flex justify-between items-end">
              <p className="font-semibold text-lg">Select Size</p>
              <Link href="/select-guide" className="text-sm text-gray-600">
                Select Guide
              </Link>
            </div>

            <div id="sizeGrid" className="grid grid-cols-2 gap-2 mt-2">
              {product[0].attributes?.size?.data.map((item, i) => (
                <div
                  key={i}
                  className={`border rounded-md text-center py-3 px-4 font-medium ${
                    item.enabled
                      ? "hover:border-black cursor-pointer"
                      : "cursor-not-allowed bg-black/10 opacity-50"
                  } 
                  ${
                    selectedSize === item.size && item.enabled
                      ? "border-black"
                      : ""
                  }
                  `}
                  onClick={() => {
                    setSelectedSize(item.size);
                    setShowError(false);
                  }}
                >
                  {item.size}
                </div>
              ))}
            </div>

            {showError && (
              <p className="text-red-500 text-sm mt-2">Please select a size</p>
            )}

            <div className="flex flex-col text-center mt-5 gap-y-2 ">
              <button
                className="bg-black text-white border border-white py-3 rounded-full hover:bg-white hover:text-black hover:border-black"
                onClick={() => {
                  if (!selectedSize) {
                    setShowError(true);
                    document.getElementById("sizeGrid").scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  } else {
                    dispatch(
                      addToCart({
                        ...product[0],
                        selectedSize,
                        oneQuantityPrice: product[0].attributes?.price,
                      })
                    );
                  }
                }}
              >
                Add to Cart
              </button>
              <button
                className="bg-white text-black border border-black py-3 rounded-full hover:bg-black hover:text-white hover:border-white"
                onClick={() => {
                  dispatch(addToFavorites({ ...product[0] }));
                }}
              >
                <div className="flex items-center justify-center">
                  <p>Wishlist</p>
                  <IoMdHeartEmpty className="inline-block text-lg ml-1" />
                </div>
              </button>
            </div>

            <div className="flex flex-col mt-10">
              <h2 className="font-semibold text-lg">Product Details</h2>
              <div className="text-sm mt-2 markdown">
                <ReactMarkDown>
                  {product[0].attributes?.description}
                </ReactMarkDown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
