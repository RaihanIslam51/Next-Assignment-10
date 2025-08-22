"use client";
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
      src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Summer collection featuring trendy outfits"
    },
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Fashionable clothing in our boutique"
    },
    {
      src: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Special discounts on premium products"
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
    appendDots: dots => (
      <div className="bg-transparent py-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-primary transition-colors cursor-pointer" />
    ),
  };

  // Prevent SSR for slick slider to avoid hydration issues
  if (!isMounted) {
    return (
      <section className="bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="h-12 bg-gray-200 rounded animate-pulse mb-4"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-6"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-8 w-1/2"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="h-12 bg-gray-200 rounded animate-pulse w-32"></div>
              <div className="h-12 bg-gray-200 rounded animate-pulse w-32"></div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md mx-auto">
            <div className="w-full h-80 bg-gray-200 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-primary/5 to-secondary/5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content leading-tight mb-6">
           Amazing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Products
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-base-content/70 max-w-lg mx-auto lg:mx-0">
            Shop the latest products with ease. Enjoy fast checkout, secure
            payment, and exclusive deals tailored just for you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/products"
              className="btn rounded-full btn-primary flex items-center gap-2 group px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <FaShoppingCart /> Shop Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/login"
              className="btn rounded-full btn-outline flex items-center gap-2 group px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-base-content/60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
                  <path fillRule="evenodd" d="M2 7.5h16l-.812 3.26a2.25 2.25 0 01-2.168 1.74H5.18a2.25 2.25 0 01-2.168-1.74L2 7.5zm5.541 1.75a.75.75 0 00-1.414 0l-.5.5a.75.75 0 001.414.5l.5-.5zm1.414 0l.5.5a.75.75 0 001.414-.5l-.5-.5a.75.75 0 00-1.414.5z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Right Slider */}
        <div className="flex-1 w-full max-w-md lg:max-w-2xl mx-auto relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Slider {...sliderSettings}>
              {images.map((image, i) => (
                <div key={i} className="relative">
                  <div className="aspect-square md:aspect-[4/5] lg:aspect-video rounded-2xl overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={800}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      priority={i === 0}
                    />
                  </div>
                  {/* Gradient overlay for text readability if needed */}
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                </div>
              ))}
            </Slider>
          </div>
          
          {/* Decorative shape */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 rounded-full bg-secondary/20 blur-xl"></div>
          <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 rounded-full bg-primary/20 blur-xl"></div>
        </div>
      </div>
    </section>
  );
}