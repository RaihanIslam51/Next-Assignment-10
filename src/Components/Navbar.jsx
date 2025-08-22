"use client";

import { AnimatePresence, motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/privacy", label: "Privacy" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          Haven World
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${
                  pathname === href
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold border-b-2 border-indigo-600 dark:border-indigo-400 pb-1"
                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Auth Buttons */}
          {!session ? (
            <li>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
              >
                Login
              </Link>
            </li>
          ) : (
            <li className="flex items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Hi, {session.user?.name || "User"}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
              >
                Logout
              </button>
            </li>
          )}

          {/* Theme Toggle */}
          <li><ThemeToggle /></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 text-2xl p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-40"
          >
            <ul className="flex flex-col gap-4 px-6 py-6 font-medium">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200 ${
                      pathname === href ? "font-semibold" : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {!session ? (
                <li>
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg bg-indigo-600 text-white text-center hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li>
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: "/" });
                      setMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </li>
              )}

              <li className="flex justify-center"><ThemeToggle /></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
