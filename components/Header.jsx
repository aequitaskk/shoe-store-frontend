"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMdHeartEmpty, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";
import Sidebar from "@/components/Sidebar";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);
  const { favorites } = useSelector((state) => state.cart);

  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <header className="top-0 sticky z-10 shadow-sm w-full px-4 md:px-10 lg:px-20 py-4 bg-white">
      <div className="flex justify-between items-center">
        {/* Left */}
        <div className="flex items-center">
          <Link href="/" className="flex">
            <Image
              src="/assets/shoes-logo.png"
              alt="Store Logo"
              height="32"
              width="32"
            />
            <span className="self-center whitespace-nowrap pl-3 text-2xl font-bold text-gray-800">
              Shoe E-commerce
            </span>
          </Link>
        </div>

        {/* Middle */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center space-x-10 ">
            <li className="text-gray-600 hover:text-black transition">
              <Link href="/">Home</Link>
            </li>
            <li>
              <button
                onClick={() => setIsActive(!isActive)}
                className="relative"
              >
                <div className="flex items-center gap-1">
                  <p className="text-gray-600 hover:text-black transition">
                    Category
                  </p>
                  <div className="mt-1 text-gray-600 hover:text-black transition">
                    {isActive ? (
                      <IoIosArrowUp className="text-black" />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </div>
                </div>
              </button>
              {isActive && (
                <div className="absolute top-16  py-4 w-[180px] bg-white rounded-lg shadow-md">
                  <ul className="flex flex-col pl-4 space-y-2">
                    {categories.map((category) => (
                      <li key={category._id}>
                        <Link
                          href={`/category/${category.attributes.slug}`}
                          className="text-gray-600 hover:text-black transition"
                        >
                          {category.attributes.name}
                          <span className="text-sm text-gray-600 hover:text-black transition pl-1">
                            ({category.attributes.products.data.length})
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li className="text-gray-600 hover:text-black transition">
              <Link href="/about">About</Link>
            </li>
            <li className="text-gray-600 hover:text-black transition">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <div className="flex items-center">
            <div className="flex items-center space-x-6 pr-6">
              <Link href="/favorites" className="relative">
                <IoMdHeartEmpty className="text-2xl mt-1" />
                {favorites.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 rounded-full text-white text-xs px-1">
                    {favorites.length}
                  </span>
                )}
              </Link>
              <Link href="/cart" className="relative">
                <BsCart className="text-2xl " />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 rounded-full text-white text-xs px-1">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>
            <div className="text-2xl pt-2 lg:hidden">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <AiOutlineMenu />
              </button>
            </div>
            {isSidebarOpen && <Sidebar />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
