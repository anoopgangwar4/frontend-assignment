import React from 'react';
import { Facebook, Twitter, Instagram, Smartphone, Download } from 'lucide-react';
import freshLogo from "../assets/fresh.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-white text-green-500 px-3 py-1 rounded-full font-bold text-lg">
                <img
                src={freshLogo}
                
                alt="Logo"
                className="w-30 h-20 object-contain"
              />
              </div>
            </div>
            <div>
                
                </div>
            <div className="space-y-2 text-green-100">
              <p>🌐 www.freshfood.com</p>
              <p>📧 contact@freshfood.com</p>
              <p>📞 +8801234567890</p>
            </div>
          </div>

          {/* Fresh Food Pages */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Fresh Food Pages</h3>
            <div className="space-y-2 text-green-100">
              <a href="#" className="block hover:text-white transition-colors">Home</a>
              <a href="#" className="block hover:text-white transition-colors">Categories</a>
              <a href="#" className="block hover:text-white transition-colors">Blog</a>
              <a href="#" className="block hover:text-white transition-colors">Terms And Conditions</a>
              <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block hover:text-white transition-colors">Return Policy</a>
              <a href="#" className="block hover:text-white transition-colors">About us</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow us on</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-green-100 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-green-100 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-green-100 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* App Downloads */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Download Our App</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Smartphone className="w-5 h-5" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Download className="w-5 h-5" />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-400 mt-12 pt-8">
          <div className="text-center text-green-100">
            <p>© 2002 - 2022 Fresh Food, LLC. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;