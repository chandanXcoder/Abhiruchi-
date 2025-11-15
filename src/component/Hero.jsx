import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const rotatingWords = [
    "Creativity",
    "Passion",
    "Innovation",
    "Talent",
    "Excellence",
    "Dreams",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToJoin = (e) => {
    e.preventDefault();
    const joinSection = document.querySelector("#join");
    if (joinSection) joinSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden"
    >
      {/* 🔹 Soft background blobs */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-24 right-10 w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-50 animate-float-delayed"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Abhiruchi
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700">
            The Hobby Club
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          Discover. Create. Inspire.
        </p>

        {/* Rotating Text Line */}
        <p
          className={`text-lg sm:text-xl text-gray-600 mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          Unleashing{" "}
          <span className="inline-block min-w-[200px] font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent animate-fade-in">
            {rotatingWords[currentWordIndex]}
          </span>{" "}
          at Invertis University
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={scrollToJoin}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Join Now</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>

          <button className="px-8 py-4 border-2 border-orange-400 text-orange-600 font-semibold rounded-full text-lg hover:bg-orange-50 transition-all duration-300 hover:shadow-md">
            Explore Clubs
          </button>
        </div>

        {/* Scroll Arrow */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronDown className="w-8 h-8 text-orange-500 animate-bounce" />
        </div>
      </div>

      {/* 🔹 Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
}
