import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white h-16 lg:h-20 pt-4 lg:pt-6 w-full">
      <div className="px-6 lg:px-40 flex items-center justify-between">
        <div className="text-sm">Ⓒ 2023 All Rights Reserved</div>

        <div className="flex space-x-3 text-sm">
          <Link href="/" className="border-2 rounded-full p-2 hover:scale-105">
            <FaFacebookF className=" text-white" />
          </Link>
          <Link href="/" className="border-2 rounded-full p-2 hover:scale-105">
            <FaTwitter className=" text-white" />
          </Link>
          <Link href="/" className="border-2 rounded-full p-2 hover:scale-105">
            <FaInstagram className=" text-white" />
          </Link>
          <Link href="/" className="border-2 rounded-full p-2 hover:scale-105">
            <FaYoutube className=" text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
