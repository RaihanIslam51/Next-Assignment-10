"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1470&q=80",
      alt: "Summer collection featuring trendy outfits",
    },
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1470&q=80",
      alt: "Fashionable clothing in our boutique",
    },
    {
      src: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=1470&q=80",
      alt: "Special discounts on premium products",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    fade: true,
    adaptiveHeight: true,
    appendDots: (dots) => (
      <div className="bg-transparent py-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-indigo-500 cursor-pointer transition-colors" />
    ),
  };

  if (!isMounted) return <div className="h-[600px] bg-gray-100 animate-pulse" />;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Amazing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
              Products
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
            Discover the latest products with fast checkout, secure payment, and exclusive deals tailored just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/products"
              className="btn rounded-full bg-indigo-600 text-white px-8 py-3 flex items-center gap-2 text-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <FaShoppingCart /> Shop Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/login"
              className="btn rounded-full border border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-3 flex items-center gap-2 text-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-500 dark:text-gray-400">
            {[
              { label: "Secure Payment", icon: "✔" },
              { label: "Free Shipping", icon: "🚚" },
              { label: "24/7 Support", icon: "💬" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Slider */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-lg lg:max-w-2xl mx-auto relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Slider {...sliderSettings}>
              {images.map((image, i) => (
                <div key={i} className="relative">
                  <div className="aspect-[4/5] lg:aspect-video rounded-2xl overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={800}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      priority={i === 0}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Decorative Shapes */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 rounded-full bg-purple-200 blur-xl opacity-40"></div>
          <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 rounded-full bg-indigo-200 blur-xl opacity-40"></div>
        </motion.div>
      </div>
    </section>
  );
}
