import React from "react";
import { motion } from "framer-motion";

// अपनी images के सही path दो (assets folder के अंदर होने चाहिए)
import img1 from "../assets/techFest.jpg";
import img2 from "../assets/techFest.jpg";
import img3 from "../assets/techFest.jpg";
import img4 from "../assets/techFest.jpg";
import img5 from "../assets/techFest.jpg";
import img6 from "../assets/techFest.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      title: "Art Exhibition",
      caption: "Creative expressions by Panache members.",
      img: img1,
      gradient: "from-pink-400 to-pink-600",
    },
    {
      title: "Cultural Night",
      caption: "Vibrant performances by Rock On club.",
      img: img2,
      gradient: "from-red-400 to-red-600",
    },
    {
      title: "Tech Fair",
      caption: "Innovative projects presented by I-Tech club.",
      img: img3,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "Publication Drive",
      caption: "Students expressing thoughts through words.",
      img: img4,
      gradient: "from-green-400 to-green-600",
    },
    {
      title: "Sports Meet",
      caption: "Energy and enthusiasm by Stride club.",
      img: img5,
      gradient: "from-emerald-400 to-emerald-600",
    },
    {
      title: "Social Awareness",
      caption: "Spreading positivity by The Responsible Invertian.",
      img: img6,
      gradient: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-6 transition-colors duration-300"
    >
      {/* 🔹 Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
            Abhiruchi Gallery
          </span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          A glimpse of creativity, innovation, and joy — captured in the moments
          of Abhiruchi club activities.
        </p>
      </motion.div>

      {/* 🔹 Gallery Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {galleryItems.map((item, index) => (
          <GalleryCard
            key={index}
            title={item.title}
            caption={item.caption}
            img={item.img}
            gradient={item.gradient}
          />
        ))}
      </div>
    </section>
  );
};

// 🔸 Card Component
const GalleryCard = ({ title, caption, img, gradient }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
  >
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-60`}
      ></div>
      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg">
        {title}
      </h3>
    </div>
    <div className="p-6 text-center">
      <p className="text-gray-700 dark:text-gray-300">{caption}</p>
    </div>
  </motion.div>
);

export default Gallery;
