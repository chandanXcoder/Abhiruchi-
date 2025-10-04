import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">Abhiruchi</span> – The Hobby Club
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
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

      {/* Sub-Clubs Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
        {/* Panache */}
        <ClubCard
          title="Panache – The Arts Club"
          desc="Knowledge will only take you from A to Z, but imagination encircles the world. Panache helps students express their creativity through painting, crafts, modeling, and design, shaping the artistic side of every Invertian."
          color="from-pink-100 to-pink-200"
        />

        {/* Rock On */}
        <ClubCard
          title="Rock On – The Cultural Club"
          desc="Joy and happiness come alive through singing and dancing. Rock On encourages students to explore their talents in music and performance, guided by experts in both areas."
          color="from-red-100 to-red-200"
        />

        {/* I-Tech */}
        <ClubCard
          title="I-Tech – The Technical Club"
          desc="Technology drives the world. I-Tech motivates students to innovate and explore fields like Robotics, IoT, AI, and Ethical Hacking through workshops and projects guided by experts."
          color="from-blue-100 to-blue-200"
        />

        {/* Images */}
        <ClubCard
          title="Images – The Publication Club"
          desc="The pen is mightier than the sword. Images develops writing and communication skills, encouraging students to publish thought-provoking articles in the in-house magazine."
          color="from-green-100 to-green-200"
        />

        {/* Stride */}
        <ClubCard
          title="Stride – The Sports Club"
          desc="All work and no play makes Jack a dull boy. Stride promotes physical fitness and sportsmanship by organizing indoor and outdoor games, encouraging participation at all levels."
          color="from-teal-100 to-teal-200"
        />

        {/* M-Factor */}
        <ClubCard
          title="M-Factor – The Management Club"
          desc="Strategize, plan, and implement — M-Factor builds managerial and leadership skills through practical learning, teamwork, and management-oriented events."
          color="from-cyan-100 to-cyan-200"
        />

        {/* The Responsible Invertian */}
        <ClubCard
          title="The Responsible Invertian – The Social Cause Club"
          desc="This club inspires students to become responsible citizens by organizing social initiatives and activities that contribute toward building a better society."
          color="from-orange-100 to-orange-200"
        />
      </div>
    </section>
  );
};

const ClubCard = ({ title, desc, color }) => (
  <motion.div
    whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
    transition={{ duration: 0.3 }}
    className={`relative rounded-xl p-8 bg-gradient-to-br ${color} shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700`}
  >
    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-800 leading-snug">{title}</h3>
    <p className="text-gray-700 dark:text-gray-600 text-base leading-relaxed">{desc}</p>
  </motion.div>
);

export default About;
