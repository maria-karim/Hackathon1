"use client";

import Image from "next/image";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function Products() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const products = [
    { image: "/image (3).jpg", name: "Library Style Chair", price: "$20" },
    { image: "/Products (1).jpg", name: "Modern Office Chair", price: "$25" },
    { image: "/Products (2).jpg", name: "Wooden Dining Chair", price: "$30" },
    { image: "/products (3).jpg", name: "Lounge Armchair", price: "$40" },
    { image: "/Products (7).jpg", name: "Classic Rocking Chair", price: "$35" },
    { image: "/Products (5).jpg", name: "Ergonomic Desk Chair", price: "$45" },
    { image: "/Products (6).jpg", name: "Minimalist Accent Chair", price: "$28" },
    { image: "/im2.jpg", name: "Outdoor Patio Chair", price: "$32" },
    { image: "/Products (4).jpg", name: "Leather Recliner", price: "$50" },
    { image: "/Image (2).jpg", name: "Folding Camping Chair", price: "$22" },
    { image: "/image.jpg", name: "Velvet Lounge Chair", price: "$38" },
    { image: "/category.jpg", name: "Contemporary Bar Stool", price: "$27" },
  ];

  const instagramImages = [
    { image: "/Products (5).jpg"},
    { image: "/Products (3).jpg"},
    { image: "/Products (2).jpg"},
    { image: "/Products (1).jpg"},
    { image: "/Products (7).jpg"},
    { image: "/Products (4).jpg"},
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-left mb-6">All Products</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {products.map((product, index) => (
          <div key={index} className="relative bg-white p-4 rounded-lg shadow-lg text-center">
            <Image
              src={product.image}
              alt={product.name}
              width={313}
              height={313}
              className="rounded-md"
            />
            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <FiShoppingCart
              className={`absolute top-4 right-4 text-xl cursor-pointer transition-colors ${hoveredIndex === index ? "text-blue-500" : "text-gray-700"}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 p-6 text-center rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">Or Subscribe to the Newsletter</h2>
        <div className="flex justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-400 rounded-md w-64"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Submit
          </button>
        </div>
      </div>

      {/* Instagram Section */}
      <h2 className="text-2xl font-bold text-center mb-6">
        Follow Product and Discounts on Instagram
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
        {instagramImages.map((insta, index) => (
          <Image
            key={index}
            src={insta.image}
            alt="Instagram Product"
            width={165}
            height={165}
            className="rounded-lg transition transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
}
