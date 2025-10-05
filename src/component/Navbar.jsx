import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Sub-Clubs', href: '#sub-clubs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Join Us', href: '#join' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg' 
          : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#home" className="flex items-center space-x-3 group">
                <img 
                  src=" abhiruchi.png " 
                  alt="Abhiruchi Logo" 
                  className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-slate-800'
                }`}>
                  <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                    Abhiruchi
                  </span>
                  <span className={`text-lg ml-2 ${isScrolled ? 'text-slate-200' : 'text-slate-600'}`}>
                    | The Hobby Club
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                    isScrolled 
                      ? 'text-white hover:text-amber-400' 
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-amber-400' : 'bg-slate-800'
                  }`}></span>
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-white hover:bg-slate-700' 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-white hover:bg-slate-800 hover:text-amber-400'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacing for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}