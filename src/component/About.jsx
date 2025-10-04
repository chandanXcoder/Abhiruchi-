import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-gray-100 text-gray-800 py-16 px-6 md:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
          Abhiruchi – The Hobby Club
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-8">
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Panache */}
        <ClubCard
          title="Panache – The Arts Club"
          desc="Knowledge will only take you from A to Z, but imagination encircles the world. Panache helps students express their creativity through painting, crafts, modeling, and design, shaping the artistic side of every Invertian."
          color="bg-pink-200"
        />

        {/* Rock On */}
        <ClubCard
          title="Rock On – The Cultural Club"
          desc="Joy and happiness come alive through singing and dancing. Rock On encourages students to explore their talents in music and performance, guided by experts in both areas."
          color="bg-red-200"
        />

        {/* I-Tech */}
        <ClubCard
          title="I-Tech – The Technical Club"
          desc="Technology drives the world. I-Tech motivates students to innovate and explore fields like Robotics, IoT, AI, and Ethical Hacking through workshops and projects guided by experts."
          color="bg-blue-200"
        />

        {/* Images */}
        <ClubCard
          title="Images – The Publication Club"
          desc="The pen is mightier than the sword. Images develops writing and communication skills, encouraging students to publish thought-provoking articles in the in-house magazine."
          color="bg-green-200"
        />

        {/* Stride */}
        <ClubCard
          title="Stride – The Sports Club"
          desc="All work and no play makes Jack a dull boy. Stride promotes physical fitness and sportsmanship by organizing indoor and outdoor games, encouraging participation at all levels."
          color="bg-teal-200"
        />

        {/* M-Factor */}
        <ClubCard
          title="M-Factor – The Management Club"
          desc="Strategize, plan, and implement — M-Factor builds managerial and leadership skills through practical learning, teamwork, and management-oriented events."
          color="bg-cyan-200"
        />

        {/* The Responsible Invertian */}
        <ClubCard
          title="The Responsible Invertian – The Social Cause Club"
          desc="This club inspires students to become responsible citizens by organizing social initiatives and activities that contribute toward building a better society."
          color="bg-orange-200"
        />
      </div>
    </section>
  );
};

const ClubCard = ({ title, desc, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`rounded-2xl shadow-md p-6 ${color} hover:shadow-xl transition duration-300`}
  >
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default About;
