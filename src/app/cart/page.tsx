import Image from "next/image";
import { FaHeart, FaTrash } from "react-icons/fa6";

export default function CartPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Cart Heading */}
      <h2 className="text-3xl font-bold mb-6">Bag</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {[
            { id: 1, image: "/Frame.jpg" },
            { id: 2, image: "/Frame2.jpg" },
          ].map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 bg-gray-100 rounded-lg hover:shadow-md transition-shadow"
            >
              <Image src={item.image} alt="Product" width={100} height={100} className="rounded-md" />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">Library Stool Chair</h3>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>Color: Brown</li>
                  <li>Price: $99</li>
                  <li>Quantity: 1</li>
                </ul>
              </div>
              <div className="flex space-x-3">
                <FaHeart className="text-red-500 cursor-pointer hover:scale-110 transition-transform" />
                <FaTrash className="text-gray-500 cursor-pointer hover:text-red-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-black mb-4">Summary</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex justify-between">
              <span>Subtotal:</span>
              <span>$198</span>
            </li>
            <li className="flex justify-between">
              <span>Estimated Delivery & Handling:</span>
              <span>Free</span>
            </li>
            <li className="flex justify-between font-semibold">
              <span>Total Amount:</span>
              <span>$198</span>
            </li>
          </ul>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
