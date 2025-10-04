import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Users, Award, Calendar, Target, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, Send, Camera, Music, Code, Palette, TrendingUp, Heart, Trophy } from 'lucide-react';

// Navbar Component
function Navbar() {
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
          <div className="flex items-center space-x-4">
            <div className="relative w-14 h-14 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0.5 rounded-full bg-gray-900 flex items-center justify-center border-2 border-orange-500/50">
                <span className="text-orange-500 font-bold text-xl tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>A</span>
              </div>
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

          <div className="hidden lg:flex items-center space-x-1">
            <a href="#home" className="px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-all duration-200 font-medium">
              Home
            </a>
            <a href="#about" className="px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-all duration-200 font-medium">
              About
            </a>
            
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg flex items-center space-x-1 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-all duration-200 font-medium">
                <span>Sub-Clubs</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
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

            <a href="#gallery" className="px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-all duration-200 font-medium">
              Gallery
            </a>
            <a href="#events" className="px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-all duration-200 font-medium">
              Events
            </a>
            <a href="#join" className="ml-2 px-6 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-500 hover:to-orange-400 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-200 transform hover:scale-105">
              Join Us
            </a>
          </div>

          <button onClick={toggleMenu} className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors duration-200">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}>
          <div className="py-4 space-y-2 border-t border-gray-800">
            <a href="#home" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors font-medium" onClick={toggleMenu}>Home</a>
            <a href="#about" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors font-medium" onClick={toggleMenu}>About</a>
            
            <div>
              <button onClick={() => toggleDropdown('subclubs')} className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors font-medium">
                <span>Sub-Clubs</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'subclubs' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'subclubs' ? 'max-h-96 mt-2' : 'max-h-0'}`}>
                {subClubs.map((club, index) => (
                  <a key={index} href={`#${club.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center space-x-3 pl-8 pr-4 py-2.5 rounded-lg text-gray-400 hover:text-orange-400 hover:bg-gray-800/50 transition-colors" onClick={toggleMenu}>
                    <div className={`w-2 h-2 rounded-full ${club.color}`}></div>
                    <div>
                      <div className="font-medium text-sm">{club.name}</div>
                      <div className="text-xs opacity-75">{club.subtitle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <a href="#gallery" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors font-medium" onClick={toggleMenu}>Gallery</a>
            <a href="#events" className="block px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors font-medium" onClick={toggleMenu}>Events</a>
            <a href="#join" className="block px-4 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-500 hover:to-orange-400 transition-all text-center" onClick={toggleMenu}>Join Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Component
function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: "500+", label: "Active Members" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: Calendar, value: "100+", label: "Events Annually" },
    { icon: Target, value: "7", label: "Specialized Clubs" }
  ];

  const clubs = [
    { name: "STRIDE", subtitle: "Sports Club", color: "from-emerald-500 to-emerald-600", position: "top-[8%] left-[15%]" },
    { name: "PANACHE", subtitle: "Art Club", color: "from-pink-500 to-pink-600", position: "top-[8%] right-[15%]" },
    { name: "ROCK ON", subtitle: "Music & Dance", color: "from-red-500 to-red-600", position: "top-[35%] right-[5%]" },
    { name: "I-TECH", subtitle: "Technical Club", color: "from-indigo-600 to-indigo-700", position: "bottom-[20%] right-[8%]" },
    { name: "IMAGES", subtitle: "Publication", color: "from-lime-400 to-lime-500", position: "bottom-[8%] right-[20%]" },
    { name: "M-FACTOR", subtitle: "Management", color: "from-orange-500 to-orange-600", position: "bottom-[8%] left-[20%]" },
    { name: "TRI", subtitle: "Social Responsibility", color: "from-cyan-500 to-cyan-600", position: "top-[35%] left-[5%]" }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/60 backdrop-blur-sm border border-orange-500/30 rounded-full">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm text-gray-300 font-medium">Invertis University, Bareilly</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" style={{ fontFamily: 'Georgia, serif' }}>
                  अभिरुचि
                </span>
                <span className="block text-white mt-2">The Hobby Club</span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed">
                Empowering students through creativity, leadership, and holistic development across seven specialized domains
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#join" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300">
                <span>Join The Club</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-gray-300 font-semibold rounded-lg border-2 border-gray-700 hover:border-orange-500/50 hover:text-white transition-all duration-300">
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="p-4 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
                    <Icon className="w-5 h-5 text-orange-500 mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 p-1 shadow-2xl shadow-orange-500/30">
                
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black p-4">
                  
                  <div className="w-full h-full rounded-full border-4 border-orange-500/40 relative">
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-gray-900 to-black border-4 border-orange-500/60 flex items-center justify-center shadow-2xl shadow-orange-500/30 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{
                          backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop)',
                          filter: 'grayscale(30%)'
                        }}
                      ></div>
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/90"></div>
                      
                      <div className="text-center relative z-10">
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                          अभिरुचि
                        </div>
                        <div className="text-xs text-gray-400 tracking-widest">THE HOBBY CLUB</div>
                      </div>
                    </div>

                    {clubs.map((club, index) => (
                      <div key={index} className={`absolute ${club.position} group cursor-pointer`} style={{ zIndex: 10 }}>
                        <div className="relative w-24 h-24 transition-transform duration-300 hover:scale-110">
                          <div 
                            className={`absolute inset-0 bg-gradient-to-br ${club.color} shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                            style={{
                              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                            }}
                          >
                            <div 
                              className="absolute inset-[3px] bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-2"
                              style={{
                                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                              }}
                            >
                              <div className="text-white text-xs font-bold text-center leading-tight mb-1">
                                {club.name}
                              </div>
                              <div className="text-gray-400 text-[8px] text-center leading-tight">
                                {club.subtitle}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          <div className="bg-gray-800 px-3 py-2 rounded-lg border border-gray-700 shadow-xl">
                            <div className="text-xs text-white font-medium">{club.name}</div>
                            <div className="text-xs text-gray-400">{club.subtitle}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">अभिरुचि</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A vibrant community dedicated to nurturing talents, building skills, and creating memorable experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
            <Target className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-gray-400">
              To provide a platform where students can explore their passions, develop new skills, and transform hobbies into lifelong pursuits of excellence.
            </p>
          </div>

          <div className="p-8 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
            <Users className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Our Community</h3>
            <p className="text-gray-400">
              A diverse family of 500+ passionate members across seven specialized clubs, united by creativity, dedication, and the pursuit of excellence.
            </p>
          </div>

          <div className="p-8 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
            <Trophy className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Our Impact</h3>
            <p className="text-gray-400">
              With 100+ events annually and 50+ awards, we're shaping future leaders who excel not just academically, but in every aspect of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-Clubs Section
function SubClubs() {
  const clubs = [
    { name: "Stride", subtitle: "The Sports Club", icon: Trophy, color: "from-emerald-500 to-emerald-600", desc: "Building champions through athletic excellence and sportsmanship" },
    { name: "Panache", subtitle: "The Art Club", icon: Palette, color: "from-pink-500 to-pink-600", desc: "Unleashing creativity through visual arts and design" },
    { name: "Rock On", subtitle: "Music & Dance Club", icon: Music, color: "from-red-500 to-red-600", desc: "Celebrating rhythm, melody, and movement" },
    { name: "I-Tech", subtitle: "The Technical Club", icon: Code, color: "from-indigo-600 to-indigo-700", desc: "Innovating tomorrow's technology today" },
    { name: "Images", subtitle: "The Publication Club", icon: Camera, color: "from-lime-400 to-lime-500", desc: "Capturing stories through photography and journalism" },
    { name: "M-Factor", subtitle: "The Management Club", icon: TrendingUp, color: "from-orange-500 to-orange-600", desc: "Developing future business leaders and entrepreneurs" },
    { name: "The Responsible Invertian", subtitle: "Social Responsibility Club", icon: Heart, color: "from-cyan-500 to-cyan-600", desc: "Making a difference in society through social initiatives" }
  ];

  return (
    <section id="sub-clubs" className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Sub-Clubs</span>
          </h2>
          <p className="text-xl text-gray-400">
            Seven specialized domains for every passion and interest
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => {
            const Icon = club.icon;
            return (
              <div key={index} className="group p-8 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${club.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{club.name}</h3>
                <p className="text-sm text-orange-400 mb-3">{club.subtitle}</p>
                <p className="text-gray-400">{club.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop"
  ];

  return (
    <section id="gallery" className="relative py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-400">
            Memories from our amazing events and activities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer">
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Club Event {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Events Section
function Events() {
  const events = [
    { title: "Annual Cultural Fest", date: "Dec 15-17, 2024", type: "Cultural", status: "Upcoming" },
    { title: "Sports Championship", date: "Jan 10-12, 2025", type: "Sports", status: "Upcoming" },
    { title: "Tech Innovation Summit", date: "Feb 5, 2025", type: "Technical", status: "Upcoming" },
    { title: "Art Exhibition", date: "Oct 20, 2024", type: "Art", status: "Past" },
    { title: "Music Concert Night", date: "Sep 15, 2024", type: "Cultural", status: "Past" },
    { title: "Social Service Drive", date: "Aug 28, 2024", type: "Social", status: "Past" }
  ];

  return (