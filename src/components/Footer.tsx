import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Say hello</h3>
            <h5>Email:</h5>
            <a href="mailto:info@four-ages.com" className="underline">
              leon.frontend@gmail.com
            </a>
            <h5>Telegram:</h5>
            <a href="mailto:info@four-ages.com" className="underline">
              https://t.me/timeisup111
            </a>
            <h5>What's app:</h5>
            <a href="mailto:info@four-ages.com" className="underline">
              https://wa.me/380972766294
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Locations</h3>
            <div className="space-y-2">
              <p>Dorohozhytska St. 3, Kyiv, Ukraine, 02000</p>
              <p>Khotynskyi,Chernivetska, Ukraine. 69000</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow us</h3>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 hover:text-gray-300"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p>Copyright © 2025 Kangston Software. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;