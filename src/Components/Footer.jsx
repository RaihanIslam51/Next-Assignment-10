import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand Section */}
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-2xl font-bold text-blue-700">Haven World</h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              We provide the latest smartphones, tablets, and smartwatches from top brands, 
              helping you find the perfect device with expert guidance.
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Haven World. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:justify-center space-y-3 md:space-y-0 md:space-x-8 text-center md:text-left font-medium">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
            <Link href="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
            <Link href="/privacy" className="hover:text-blue-600 transition">Privacy</Link>
          </div>

          {/* Social Media */}
          <div className="flex justify-center md:justify-end space-x-5">
            <a href="#" target="_blank" rel="noopener noreferrer" 
              className="p-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" 
              className="p-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" 
              className="p-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white transition">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" 
              className="p-2 rounded-full border border-gray-300 hover:bg-pink-600 hover:text-white transition">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Built with <span className="font-semibold">Next.js + TailwindCSS</span>. Developed by{" "}
          <Link 
            href="https://raihanislam.vercel.app" 
            className="text-blue-600 hover:underline"
          >
            Md. Raihan Islam
          </Link>
        </div>
      </div>
    </footer>
  );
}
