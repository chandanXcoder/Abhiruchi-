import React from "react";
import { motion } from "framer-motion";
import abhiruchiLogo from "../assets/abhiruchi1.png"; // <-- अपनी इमेज path

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-6 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* 🔹 Abhiruchi Logo */}
        <div className="flex justify-center mb-10">
          <motion.img
            src={abhiruchiLogo}
            alt="Abhiruchi Logo"
            className="w-64 h-64 sm:w-72 sm:h-72 rounded-full shadow-2xl border-8 border-gray-200 dark:border-gray-700 bg-white p-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* 🔹 Heading */}
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
            Abhiruchi
          </span>{" "}
          – The Hobby Club
        </h2>

        {/* 🔹 Description */}
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-14 max-w-3xl mx-auto">
          <strong>Abhiruchi – The Hobby Club</strong> came into existence on
          <strong> October 3, 2009</strong>, with the objective to explore
          students’ creativity and innovation for better performance in their
          personal and professional lives. Spearheaded by{" "}
          <strong>Ms. Sonal Gautam</strong>, the Executive Chairperson, this
          club today stands as an integral part of Invertis University. Through
          the events of Abhiruchi, students showcase their talents, knowledge,
          and skills beyond academics. The club also teaches students the art of
          organization and management of various events throughout the year.
        </p>
      </motion.div>

      {/* 🔹 Sub-Clubs Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-12">
        <ClubCard
          title="Panache – The Arts Club"
          desc="Knowledge will only take you from A to Z, but imagination encircles the world. Panache helps students express their creativity through painting, crafts, modeling, and design."
          color="bg-pink-500"
          gradient="from-pink-400 to-pink-600"
        />

        <ClubCard
          title="Rock On – The Cultural Club"
          desc="Joy and happiness come alive through singing and dancing. Rock On encourages students to explore their talents in music and performance."
          color="bg-red-500"
          gradient="from-red-400 to-red-600"
        />

        <ClubCard
          title="I-Tech – The Technical Club"
          desc="Technology drives the world. I-Tech motivates students to innovate and explore Robotics, IoT, AI, and Ethical Hacking."
          color="bg-blue-500"
          gradient="from-blue-400 to-blue-600"
        />

        <ClubCard
          title="Images – The Publication Club"
          desc="The pen is mightier than the sword. Images develops writing and communication skills, encouraging students to publish thought-provoking articles."
          color="bg-green-500"
          gradient="from-green-400 to-green-600"
        />

        <ClubCard
          title="Stride – The Sports Club"
          desc="All work and no play makes Jack a dull boy. Stride promotes physical fitness and sportsmanship by organizing indoor and outdoor games."
          color="bg-emerald-500"
          gradient="from-emerald-400 to-emerald-600"
        />

        <ClubCard
          title="M-Factor – The Management Club"
          desc="Strategize, plan, and implement — M-Factor builds managerial and leadership skills through practical learning and teamwork."
          color="bg-cyan-500"
          gradient="from-cyan-400 to-cyan-600"
        />

        <ClubCard
          title="The Responsible Invertian – The Social Cause Club"
          desc="This club inspires students to become responsible citizens by organizing social initiatives that contribute to building a better society."
          color="bg-orange-500"
          gradient="from-orange-400 to-orange-600"
        />
      </div>
    </section>
  );
};

const ClubCard = ({ title, desc, color, gradient }) => (
  <motion.div
    whileHover={{
      scale: 1.05,
      y: -5,
    }}
    transition={{ duration: 0.3 }}
    className={`relative rounded-2xl overflow-hidden shadow-lg group transform transition-all duration-500`}
  >
    {/* Gradient Header */}
    <div
      className={`h-28 bg-gradient-to-br ${gradient} flex items-center justify-center`}
    >
      <h3 className="text-2xl font-bold text-white text-center px-4">
        {title}
      </h3>
    </div>

    {/* Card Body */}
    <div className="bg-white dark:bg-gray-800 p-6">
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
        {desc}
      </p>
    </div>

    {/* Bottom Border Glow */}
    <div
      className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${gradient} transition-all duration-500 group-hover:h-2`}
    ></div>
  </motion.div>
);

export default About;
