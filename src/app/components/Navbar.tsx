import Link from "next/link";
export default function Navbar() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-purple-900 h-3 flex justify-start items-center px-4 text-white text-xs">
        Free Shipping on orders over $50
      </div>

      {/* Logo Bar */}
      <div className="bg-green-100 h-8 flex justify-start px-6">
        <div className="flex items-center space-x-2">
          <img src="/Logo.jpg" alt="Logo 1" className="h-6" />
        </div>
      </div>
      
      
      

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-start items-center p-4">
          <ul className="flex space-x-6 text-gray-700 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/product" },
              { name: "Cart", path: "/cart" },
              { name: "About Us", path: "/about" },
              { name: "Contacts", path: "/contact" },
              { name: "FAQ", path: "/faq" },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <span className="cursor-pointer hover:text-teal-500 transition-colors">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
