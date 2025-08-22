"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { FaHome, FaBoxOpen, FaUser, FaSignOutAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardLayout({ children }) {
  const { data: session } = useSession();
  const [open, setOpen] = useState(true);

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <p className="text-gray-800 dark:text-gray-200 font-medium">
          You must login to access dashboard.
        </p>
      </div>
    );
  }

  const menuItems = [
    { name: "Home", icon: <FaHome />, href: "/dashboard" },
    { name: "Add Product", icon: <FaBoxOpen />, href: "/dashboard/add-product" },
    { name: "Profile", icon: <FaUser />, href: "/dashboard/profile" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white dark:bg-gray-800 w-64 shadow-lg flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <Link
                href="/"
                className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
              >
                Haven World
              </Link>
              <button
                className="md:hidden text-gray-500 dark:text-gray-200 hover:text-gray-700"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <ul className="mt-6 flex-1">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    {item.icon} {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => signOut()}
                className="flex items-center gap-3 w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar Toggle for Mobile */}
      {!open && (
        <button
          className="fixed top-4 left-4 z-50 md:hidden bg-indigo-600 text-white p-2 rounded-lg shadow-lg"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
