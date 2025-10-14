import React from "react";
import { motion } from "framer-motion";

// 🔹 Event Images (अपने path के अनुसार बदलें)
import culturalEvent from "../assets/culturalEvent.png";
import techFest from "../assets/techFest.png";
import sportsDay from "../assets/sportsDay.png";
import writingContest from "../assets/sportsDay.png";
import socialDrive from "../assets/sportsDay.png";
import managementExpo from"../assets/sportsDay.png";

const Event = () => {
  const events = [
    {
      title: "Cultural Fiesta",
      desc: "A vibrant celebration of music, dance, and drama that brings creativity and colors to campus life.",
      date: "March 2025",
      image: culturalEvent,
    },
    {
      title: "TechnoSpark – Technical Fest",
      desc: "A thrilling competition of coding, robotics, and innovation, where bright minds collide to create the future.",
      date: "April 2025",
      image: techFest,
    },
    {
      title: "Stride Championship – Sports Day",
      desc: "An energetic day celebrating teamwork, athleticism, and sportsmanship with full enthusiasm.",
      date: "January 2025",
      image: sportsDay,
    },
    {
      title: "Inkspire – Writing Contest",
      desc: "Where imagination meets expression. Writers pour their creativity into words that inspire change.",
      date: "February 2025",
      image: writingContest,
    },
    {
      title: "Udaan – Social Drive",
      desc: "Students unite for a cause — spreading awareness, compassion, and education across communities.",
      date: "December 2024",
      image: socialDrive,
    },
    {
      title: "BizQuest – Management Expo",
      desc: "A business event for aspiring leaders — pitching startups, solving challenges, and showcasing strategy.",
      date: "May 2025",
      image: managementExpo,
    },
  ];

  return (
    <section
      id="events"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-8 transition-colors duration-300"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
            Events & Highlights
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Discover our most exciting festivals, competitions, and experiences that define the Abhiruchi spirit.
        </p>
      </motion.div>

      {/* 🔹 Sequential Cards */}
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        {events.map((event, index) => (
          <EventCard key={index} {...event} delay={index * 0.2} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

// 🔹 Event Card (Full Image + Sequence Layout)
const EventCard = ({ title, desc, date, image, delay, reverse }) => (
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    className={`flex flex-col sm:flex-row ${
      reverse ? "sm:flex-row-reverse" : ""
    } bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
  >
    {/* 🔹 Image Section */}
    <div className="sm:w-1/2 w-full h-60 sm:h-72 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
      />
    </div>

    {/* 🔹 Text Section */}
    <div className="sm:w-1/2 w-full p-8 flex flex-col justify-center text-center sm:text-left">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
        {desc}
      </p>
      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
        📅 {date}
      </p>
    </div>
  </motion.div>
);

export default Event;
