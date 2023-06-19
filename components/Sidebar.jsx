import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "@/utils/api";
import { GoTriangleDown, GoTriangleLeft } from "react-icons/go";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [isSelected, setIsSelected] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="relative lg:hidden">
      <div className="flex flex-col absolute top-10 right-0 w-[200px] ">
        <div className="bg-white h-full p-4 rounded-lg shadow-lg">
          <ul>
            <li className="text-gray-600 hover:text-black transition font-semibold">
              <Link href="/">Home</Link>
            </li>
          </ul>

          <button
            className="flex items-center text-gray-600 hover:text-black transition font-semibold"
            onClick={() => setIsSelected(!isSelected)}
          >
            Category
            {isSelected ? (
              <GoTriangleDown className="text-gray-400 pl-1" />
            ) : (
              <GoTriangleLeft className="text-gray-400" />
            )}
          </button>

          {isSelected && (
            <ul className="flex flex-col pl-4">
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
          )}

          <ul className="flex flex-col font-semibold text-gray-600 hover:text-black transition">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
