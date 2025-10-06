import React from "react";
import { motion } from "framer-motion";
import abhiruchiLogo from "../assets/abhiruchi1.png";

const About = () => {
  const clubs = [
    {
      title: "Panache – The Arts Club",
      desc: "Knowledge will only take you from A to Z, but imagination encircles the world. Panache helps students express their creativity through painting, crafts, modeling, and design.",
      gradient: "from-pink-400 to-pink-600",
    },
    {
      title: "Rock On – The Cultural Club",
      desc: "Joy and happiness come alive through singing and dancing. Rock On encourages students to explore their talents in music and performance.",
      gradient: "from-red-400 to-red-600",
    },
    {
      title: "I-Tech – The Technical Club",
      desc: "Technology drives the world. I-Tech motivates students to innovate and explore Robotics, IoT, AI, and Ethical Hacking.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "Images – The Publication Club",
      desc: "The pen is mightier than the sword. Images develops writing and communication skills, encouraging students to publish thought-provoking articles.",
      gradient: "from-green-400 to-green-600",
    },
    {
      title: "Stride – The Sports Club",
      desc: "All work and no play makes Jack a dull boy. Stride promotes physical fitness and sportsmanship by organizing indoor and outdoor games.",
      gradient: "from-emerald-400 to-emerald-600",
    },
    {
      title: "M-Factor – The Management Club",
      desc: "Strategize, plan, and implement — M-Factor builds managerial and leadership skills through practical learning and teamwork.",
      gradient: "from-cyan-400 to-cyan-600",
    },
    {
      title: "The Responsible Invertian – The Social Cause Club",
      desc: "This club inspires students to become responsible citizens by organizing social initiatives that contribute to building a better society.",
      gradient: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-6 transition-colors duration-300"
    >
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
          className="w-56 h-56 sm:w-64 sm:h-64 rounded-full shadow-2xl border-8 border-gray-200 dark:border-gray-700 bg-white p-2 mx-auto mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
            Abhiruchi
          </span>{" "}
          – The Hobby Club
        </h2>

        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-20 max-w-3xl mx-auto">
          <strong>Abhiruchi – The Hobby Club</strong> came into existence on{" "}
          <strong>October 3, 2009</strong>, with the objective to explore
          students’ creativity and innovation for better performance in their
          personal and professional lives. Spearheaded by{" "}
          <strong>Ms. Sonal Gautam</strong>, the Executive Chairperson, this
          club today stands as an integral part of Invertis University. Through
          its events, students showcase their talents beyond academics.
        </p>
      </motion.div>

      {/* 🔹 Club Cards Section (one below another) */}
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {clubs.map((club, index) => (
          <ClubCard
            key={index}
            title={club.title}
            desc={club.desc}
            gradient={club.gradient}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

const ClubCard = ({ title, desc, gradient, reverse }) => (
  <motion.div
    initial={{ opacity: 0, x: reverse ? 100 : -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className={`flex flex-col sm:flex-row items-center ${
      reverse ? "sm:flex-row-reverse" : ""
    } bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700`}
  >
    {/* Header gradient */}
    <div
      className={`sm:w-1/3 w-full h-40 sm:h-60 bg-gradient-to-br ${gradient} flex items-center justify-center`}
    >
      <h3 className="text-2xl font-bold text-white text-center px-6">
        {title}
      </h3>
    </div>

    {/* Description */}
    <div className="sm:w-2/3 w-full p-8">
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default About;
