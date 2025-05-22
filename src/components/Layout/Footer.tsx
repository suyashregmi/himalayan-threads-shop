
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nepal-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NepalThreads</h3>
            <p className="text-gray-300 mb-4">
              Authentic Nepalese clothing bringing tradition and modern style together.
              Handcrafted with care and respect for Nepalese culture.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=traditional" className="text-gray-300 hover:text-white transition">
                  Traditional Wear
                </Link>
              </li>
              <li>
                <Link to="/products?category=casual" className="text-gray-300 hover:text-white transition">
                  Casual Wear
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-gray-300 hover:text-white transition">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products?category=winter" className="text-gray-300 hover:text-white transition">
                  Winter Collection
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-300 not-italic">
              <p className="mb-2">Thamel, Kathmandu</p>
              <p className="mb-2">Nepal</p>
              <p className="mb-2">Phone: +977 1 4123456</p>
              <p>Email: info@nepalthreads.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} NepalThreads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
