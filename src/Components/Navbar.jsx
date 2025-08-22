"use client";
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-background-light dark:bg-background-dark shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
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
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "hover:text-blue-500 dark:hover:text-blue-400"
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
                className="px-4 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
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
                className="px-4 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700"
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
          className="md:hidden text-gray-700 dark:text-gray-200 text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-background-light dark:bg-background-dark shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6 font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block ${
                  pathname === href
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "hover:text-blue-500 dark:hover:text-blue-400"
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
                className="block px-4 py-2 rounded-lg bg-blue-600 text-white text-center"
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
                className="w-full px-4 py-2 rounded-lg bg-red-600 text-white"
              >
                Logout
              </button>
            </li>
          )}

          <li className="flex justify-center"><ThemeToggle /></li>
        </ul>
      </div>
    </nav>
  );
}
