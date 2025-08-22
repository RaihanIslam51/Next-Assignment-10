"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand & Description */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl font-bold text-blue-500 hover:text-blue-400 transition-colors">
              Haven World
            </h1>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Discover the latest smartphones, tablets, and smartwatches from top brands. 
              We make it easy to find your perfect device with expert guidance.
            </p>
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Haven World. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-12 text-center md:text-left">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-blue-500 transition">Home</Link>
              <Link href="/products" className="hover:text-blue-500 transition">Products</Link>
            </div>
            <div className="flex flex-col space-y-2">
              <Link href="/dashboard" className="hover:text-blue-500 transition">Dashboard</Link>
              <Link href="/privacy" className="hover:text-blue-500 transition">Privacy</Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-4 mt-4 md:mt-0">
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1">
              <FaFacebookF size={18} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1">
              <FaTwitter size={18} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:bg-pink-500 hover:text-white transition-all transform hover:-translate-y-1">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm md:text-base">
          Built with <span className="font-semibold text-gray-200">Next.js + TailwindCSS</span>. Developed by{" "}
          <Link 
            href="https://raihanislam.vercel.app" 
            className="text-blue-500 hover:underline transition"
          >
            Md. Raihan Islam
          </Link>
        </div>
      </div>
    </footer>
  );
}
