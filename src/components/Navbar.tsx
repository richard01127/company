import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Kangston
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/case-studies" className="text-gray-600 hover:text-gray-900">Case Studies</Link>
          <Link to="/technologies" className="text-gray-600 hover:text-gray-900">Technologies</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
          <button
            onClick={() => navigate('/contact')}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Let's talk!
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 px-6 py-4 bg-white">
          <div className="flex flex-col space-y-4">
            <Link to="/case-studies" className="text-gray-600 hover:text-gray-900">Case Studies</Link>
            <Link to="/technologies" className="text-gray-600 hover:text-gray-900">Technologies</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
            <button
              onClick={() => navigate('/contact')}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Let's talk!
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;