import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        {/* About Store */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-3">Memo Shop</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Memo Shop is your go-to online store for high-quality, stylish clothing at affordable prices.
            We provide a smooth shopping experience with fast delivery and excellent customer service.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-3">Important Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/product#product" className="hover:text-white">Product</Link></li>
            <li><Link to="/category#category" className="hover:text-white">Category</Link></li>
            <li><Link to="/about_us#about_us" className="hover:text-white">About Us</Link></li>
            <li><Link to="/#home" className="hover:text-white">Home</Link></li>
            <li><Link to="/#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-3">Contact Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/qutaibah-mohamed-188162357/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="https://web.facebook.com/qutaibh.mohamd" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-zinc-700 pt-5">
        © {new Date().getFullYear()} Memo Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
