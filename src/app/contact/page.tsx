import { FaPhone, FaClock, FaShieldAlt, FaHeadset } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="container mx-auto p-6">
      {/* Main Heading */}
      <h2 className="text-3xl font-bold text-center mb-4">Get in touch with us</h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
        For more information feel free to contact us, email us, or call us for placing an order. Submit the form below with a proper address carefully. Please do not hesitate to ask any queries regarding the order.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-gray-700">238B SE Avenue, New York, NT0000, United States</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FaPhone /> Phone
            </h3>
            <p className="text-gray-700">Mobile: 841646-6789</p>
            <p className="text-gray-700">Landline: +1141 4566-8889</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FaClock /> Working Time
            </h3>
            <p className="text-gray-700">Monday - Friday: 9:00 - 22:00</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-md" />
            <input type="email" placeholder="Email Address" className="w-full p-2 border rounded-md" />
            <input type="text" placeholder="Subject" className="w-full p-2 border rounded-md" />
            <textarea placeholder="Message" className="w-full p-2 border rounded-md h-24"></textarea>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex justify-center gap-8 mt-10 text-xl text-gray-700">
        <div className="flex flex-col items-center">
          <FaShieldAlt className="text-3xl" />
          <p>High Quality</p>
        </div>
        <div className="flex flex-col items-center">
          <FaShieldAlt className="text-3xl" />
          <p>Warranty Protection</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHeadset className="text-3xl" />
          <p>24/7 Support</p>
        </div>
      </div>
    </div>
  );
}
