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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent animate-pulse-slower"></div>
      </div>

      {/* Optional: Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main Headline with Fade-in Animation */}
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Welcome to{' '}
          <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
            Abhiruchi
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            The Hobby Club
          </span>
        </h1>

        {/* Subtitle with Delayed Fade-in */}
        <p 
          className={`text-lg sm:text-xl md:text-2xl text-slate-300 mb-4 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Unleashing{' '}
          <span className="inline-block min-w-[200px] text-center">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-bold animate-fade-in">
              {rotatingWords[currentWordIndex]}
            </span>
          </span>
          {' '}at Invertis University
        </p>
        
        <p 
          className={`text-base sm:text-lg text-slate-400 mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          The Hobby Club
        </p>

        {/* Join Now Button with Delayed Fade-in */}
        <div 
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={scrollToJoin}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-amber-700"
          >
            <span>Join Now</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Decorative Elements */}
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

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.25;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
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