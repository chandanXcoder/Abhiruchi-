import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const subClubs = [
    { name: 'Stride', subtitle: 'Sports Club', color: 'bg-emerald-500' },
    { name: 'Panache', subtitle: 'Art Club', color: 'bg-pink-500' },
    { name: 'Rock On', subtitle: 'Music & Dance', color: 'bg-red-500' },
    { name: 'I-Tech', subtitle: 'Technical Club', color: 'bg-indigo-600' },
    { name: 'Images', subtitle: 'Publication Club', color: 'bg-lime-400' },
    { name: 'M-Factor', subtitle: 'Management Club', color: 'bg-orange-500' },
    { name: 'The Responsible Invertian', subtitle: 'Social Responsibility', color: 'bg-cyan-500' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl py-3'
          : 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900/90 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative w-14 h-14 flex-shrink-0">
              {/* Circular logo with Abhiruchi branding */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0.5 rounded-full bg-gray-900 flex items-center justify-center border-2 border-orange-500/50">
                <span className="text-orange-500 font-bold text-xl tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>A</span>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-1 rounded-full border-2 border-orange-500/20"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" style={{ fontFamily: 'Georgia, serif' }}>
                अभिरुचि
              </h1>
              <p className="text-xs text-gray-400 tracking-wide">
                The Hobby Club
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <a
              href="#home"
              className="px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-all duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-all duration-200 font-medium"
            >
              About
            </a>
            
            {/* Sub-Clubs Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg flex items-center space-x-1 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-all duration-200 font-medium">
                <span>Sub-Clubs</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 overflow-hidden">
                <div className="py-2">
                  {subClubs.map((club, index) => (
                    <a
                      key={index}
                      href={`#${club.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-700/50 transition-all duration-200 group/item"
                    >
                      <div className={`w-2 h-2 rounded-full ${club.color} group-hover/item:scale-150 transition-transform duration-200`}></div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-100 group-hover/item:text-orange-400 transition-colors">
                          {club.name}
                        </div>
                        <div className="text-xs text-gray-400">{club.subtitle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#gallery"
              className="px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-all duration-200 font-medium"
            >
              Gallery
            </a>
            <a
              href="#events"
              className="px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-all duration-200 font-medium"
            >
              Events
            </a>
            <a
              href="#join"
              className="ml-2 px-6 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-500 hover:to-orange-400 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-200 transform hover:scale-105"
            >
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-screen mt-4' : 'max-h-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-800">
            <a
              href="#home"
              className="block px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors font-medium"
              onClick={toggleMenu}
            >
              About
            </a>
            
            {/* Mobile Sub-Clubs Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('subclubs')}
                className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors font-medium"
              >
                <span>Sub-Clubs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'subclubs' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === 'subclubs' ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                {subClubs.map((club, index) => (
                  <a
                    key={index}
                    href={`#${club.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center space-x-3 pl-8 pr-4 py-2.5 rounded-lg text-gray-400 hover:text-orange-400 hover:bg-gray-800/50 transition-colors"
                    onClick={toggleMenu}
                  >
                    <div className={`w-2 h-2 rounded-full ${club.color}`}></div>
                    <div>
                      <div className="font-medium text-sm">{club.name}</div>
                      <div className="text-xs opacity-75">{club.subtitle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#gallery"
              className="block px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Gallery
            </a>
            <a
              href="#events"
              className="block px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Events
            </a>
            <a
              href="#join"
              className="block px-4 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-500 hover:to-orange-400 transition-all text-center"
              onClick={toggleMenu}
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}