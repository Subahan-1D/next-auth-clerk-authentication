import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-xl text-gray-500">
          Our custom-made 404 page is working perfectly.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default notFound;
