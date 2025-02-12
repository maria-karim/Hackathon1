import Image from "next/image";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="justify-start">
          <Image src="/logo.jpg" alt="Logo" width={200} height={150} />
          <p className="text-gray-300 mt-2 justify-start">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="flex justify-start gap-4 mt-4">
            <FaTwitter className="text-blue-400 text-xl cursor-pointer" />
            <FaFacebook className="text-blue-600 text-xl cursor-pointer" />
            <FaLinkedin className="text-blue-500 text-xl cursor-pointer" />
          </div>
        </div>

        {/* Category Section */}
        <div>
          <h3 className="text-gray-400 text-lg font-semibold">Category</h3>
          <ul className="text-white space-y-2 mt-2">
            <li>Sofa</li>
            <li>Armchair</li>
            <li>Wing Chair</li>
            <li>Desk Chair</li>
            <li>Wooden Chair</li>
            <li>Park Bench</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-gray-400 text-lg font-semibold">Support</h3>
          <ul className="text-white space-y-2 mt-2">
            <li>Help & Support</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-gray-400 text-lg font-semibold">Newsletter</h3>
          <div className="flex mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded-l-md text-black"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r-md text-white">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </footer>
  );
}
