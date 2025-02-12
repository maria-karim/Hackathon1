"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto p-6">
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
        <div className="bg-blue-950 text-white p-20 rounded-lg flex-1">
          <h2 className="text-3xl font-bold mb-4">About us - Comforty</h2>
          <p className="mb-6">We provide high-quality, comfortable furniture designed to make your home stylish and relaxing. Our pieces combine modern aesthetics with exceptional comfort to enhance your living space.</p>
          <button className="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-gray-200 transition">View Collection</button>
        </div>
        <div className="flex-1">
          <Image src="/Card 1.jpg" alt="Chair" width={350} height={450} className="rounded-lg" />
        </div>
      </div>

      {/* Brand Difference Section */}
      <h3 className="text-2xl font-bold text-center mb-6">What Makes Our Brand Different</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {Array(4).fill("Our brand focuses on quality, durability, and modern designs to elevate comfort.").map((text, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg text-blue-900 text-center">
            {text}
          </div>
        ))}
      </div>

      {/* Popular Products Section */}
      <h3 className="text-2xl font-bold mb-6">Our Popular Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
        {["/Large.jpg", "/im2.jpg", "/Photo.jpg"].map((src, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image 
              src={src} 
              alt="Fancy Chair" 
              width={index === 0 ? 550 : 200} 
              height={250} 
              className="rounded-lg" 
            />
            <p className="mt-1 font-semibold text-center">Fancy Chair - $199</p>
          </div>
        ))}
      </div>
    </div>
  );
}
