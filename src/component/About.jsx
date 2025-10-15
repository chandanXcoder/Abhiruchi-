import React from "react";
import { motion } from "framer-motion";

// 🔹 Logos import
import abhiruchiLogo from "../assets/abhiruchi1.png";
import panacheLogo from "../assets/panache.png";
import rockonLogo from "../assets/rockon.png";
import itechLogo from "../assets/itech.png";
import imagesLogo from "../assets/images.png";
import strideLogo from "../assets/stride.png";
import mfactorLogo from "../assets/mfactor.png";
import triLogo from "../assets/tri.png";

const About = () => {
  const clubs = [
    {
      title: "Panache – The Arts Club",
      desc: "Knowledge will only take you from A to Z, but imagination encircles the world. Panache helps students express their creativity through painting, crafts, modeling, and design.",
      gradient: "from-pink-400 to-pink-500",
      logo: panacheLogo,
    },
    {
      title: "Rock On – The Cultural Club",
      desc: "Joy and happiness come alive through singing and dancing. Rock On encourages students to explore their talents in music and performance.",
      gradient: "from-red-400 to-red-500",
      logo: rockonLogo,
    },
    {
      title: "I-Tech – The Technical Club",
      desc: "Technology drives the world. I-Tech motivates students to innovate and explore Robotics, IoT, AI, and Ethical Hacking.",
      gradient: "from-blue-400 to-blue-500",
      logo: itechLogo,
    },
    {
      title: "Images – The Publication Club",
      desc: "The pen is mightier than the sword. Images develops writing and communication skills, encouraging students to publish thought-provoking articles.",
      gradient: "from-green-400 to-green-500",
      logo: imagesLogo,
    },
    {
      title: "Stride – The Sports Club",
      desc: "All work and no play makes Jack a dull boy. Stride promotes physical fitness and sportsmanship by organizing indoor and outdoor games.",
      gradient: "from-emerald-400 to-emerald-500",
      logo: strideLogo,
    },
    {
      title: "M-Factor – The Management Club",
      desc: "Strategize, plan, and implement — M-Factor builds managerial and leadership skills through practical learning and teamwork.",
      gradient: "from-cyan-400 to-cyan-500",
      logo: mfactorLogo,
    },
    {
      title: "The Responsible Invertian – The Social Cause Club",
      desc: "This club inspires students to become responsible citizens by organizing social initiatives that contribute to building a better society.",
      gradient: "from-orange-400 to-orange-500",
      logo: triLogo,
    },
  ];

  return (
    <section id="about" className="bg-white py-20 px-6 text-slate-800 transition-colors duration-300">
      {/* 🔹 Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.img
          src={abhiruchiLogo}
          alt="Abhiruchi Logo"
          className="w-72 h-72 sm:w-80 sm:h-80 rounded-full shadow-2xl bg-white p-2 mx-auto mb-8 object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-500">
            Abhiruchi
          </span>{" "}
          – The Hobby Club
        </h2>

        <p className="text-lg sm:text-xl leading-relaxed text-slate-700 mb-20 max-w-3xl mx-auto">
          <strong>Abhiruchi – The Hobby Club</strong> came into existence on{" "}
          <strong>October 3, 2009</strong>, with the objective to explore
          students’ creativity and innovation for better performance in their
          personal and professional lives. Spearheaded by{" "}
          <strong>Ms. Sonal Gautam</strong>, the Executive Chairperson, this
          club today stands as an integral part of Invertis University. Through
          its events, students showcase their talents beyond academics.
        </p>
      </motion.div>

      {/* 🔹 Club Cards Section */}
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {clubs.map((club, index) => (
          <ClubCard
            key={index}
            title={club.title}
            desc={club.desc}
            gradient={club.gradient}
            logo={club.logo}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

// 🔹 ClubCard Component (Updated for bigger logo and border-free)
const ClubCard = ({ title, desc, gradient, logo, reverse }) => (
  <motion.div
    initial={{ opacity: 0, x: reverse ? 100 : -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className={`flex flex-col sm:flex-row items-center ${
      reverse ? "sm:flex-row-reverse" : ""
    } bg-white rounded-3xl shadow-lg overflow-hidden`}
  >
    {/* Logo + Gradient Header */}
    <div
      className={`sm:w-1/3 w-full h-48 sm:h-72 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-4`}
    >
      <img
        src={logo}
        alt={`${title} Logo`}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-md bg-white p-2"
      />
      <h3 className="text-2xl font-bold text-white text-center px-6">{title}</h3>
    </div>

    {/* Description */}
    <div className="sm:w-2/3 w-full p-8 bg-gray-50">
      <p className="text-slate-700 text-lg leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default About;

