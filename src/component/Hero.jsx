import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const rotatingWords = ['Creativity', 'Passion', 'Innovation', 'Talent', 'Excellence', 'Dreams'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  const scrollToJoin = (e) => {
    e.preventDefault();
    const joinSection = document.querySelector('#join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 overflow-hidden"
    >
      {/* Decorative Background Shapes (soft, light theme) */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-40 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 animate-float-delayed"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-800 mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Welcome to{' '}
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
            Abhiruchi
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-700">
            The Hobby Club
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Unleashing{' '}
          <span className="inline-block min-w-[200px] text-center font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent animate-fade-in">
            {rotatingWords[currentWordIndex]}
          </span>{' '}
          at Invertis University
        </p>

        {/* Description */}
        <p
          className={`text-base sm:text-lg text-slate-500 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Where talent meets opportunity — discover your passion, polish your skills, and grow with us.
        </p>

        {/* Join Now Button */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={scrollToJoin}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Join Now</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Decorative Dots */}
        <div
          className={`mt-20 flex justify-center gap-2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse delay-150"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
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
        .delay-75 {
          animation-delay: 75ms;
        }
        .delay-150 {
          animation-delay: 150ms;
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
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}
