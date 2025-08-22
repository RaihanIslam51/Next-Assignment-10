"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-base-200 to-base-300"
    >
      <div className="max-w-4xl mx-auto bg-base-100 rounded-3xl shadow-2xl p-12 border border-gray-200">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-900 dark:text-gray-100">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-center">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website or services.
        </p>

        {/* Sections */}
        {[
          {
            title: "1. Information We Collect",
            content: "We may collect personal information such as your name, email address, and payment information when you use our services. Non-personal information like browser type and IP address may also be collected for analytics purposes."
          },
          {
            title: "2. How We Use Your Information",
            content: "The information we collect helps us improve our services, provide personalized experiences, and ensure security. We do not sell your personal information to third parties."
          },
          {
            title: "3. Cookies",
            content: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and remember your preferences."
          },
          {
            title: "4. Data Security",
            content: "We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure."
          },
          {
            title: "5. Changes to This Policy",
            content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date."
          },
        ].map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              {section.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              {section.content}
            </p>
          </motion.div>
        ))}

        {/* Contact Info */}
        <p className="mt-8 text-gray-600 dark:text-gray-400 text-base text-center">
          By using our services, you agree to this Privacy Policy. If you have any questions, please contact us at{" "}
          <a href="mailto:support@havenworld.com" className="text-blue-500 hover:underline">
            support@havenworld.com
          </a>.
        </p>
      </div>
    </motion.div>
  );
}
