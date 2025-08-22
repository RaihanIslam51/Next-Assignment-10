"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-700 shadow-xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Sign in to continue to your dashboard
        </p>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 rounded-xl flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-400 hover:shadow-md transition-all bg-white"
        >
          <FcGoogle size={24} />
          <span className="font-medium text-gray-700">Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
