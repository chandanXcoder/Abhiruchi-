import React from "react";
import { Instagram, Linkedin, Facebook, Twitter, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 py-12 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse-slower"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* 🔹 Logo + Club Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Abhiruchi – The Hobby Club
          </h2>
          <p className="text-gray-400 text-sm max-w-md">
            Unleashing creativity, innovation, and talent beyond academics at Invertis University.
          </p>
        </div>

        {/* 🔹 Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {["Home", "About", "Sub Clubs", "Gallery", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* 🔹 Social Links */}
        <div className="flex justify-center gap-6 text-gray-400">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            <Phone size={22} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            <Facebook size={22} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            <Twitter size={22} />
          </a>
        </div>
      </div>

      {/* 🔹 Bottom Line */}
      <div className="relative z-10 border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Abhiruchi – The Hobby Club | Designed with 💛 by Invertis Students
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }

        @keyframes pulse-slower {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.25; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}



