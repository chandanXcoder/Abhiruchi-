import React from "react";
import { motion } from "framer-motion";

// Images import
import img1 from "/techFest.png";
import img2 from "/techFest.png";
import img3 from "/techFest.png";
import img4 from "/techFest.png";
import img5 from "/techFest.png";
import img6 from "/techFest.png";

const Gallery = () => {
  const galleryItems = [
    {
      title: "Art Exhibition",
      caption: "Creative expressions by Panache members.",
      img: img1,
      gradient: "from-pink-400 to-pink-500",
    },
    {
      title: "Cultural Night",
      caption: "Vibrant performances by Rock On club.",
      img: img2,
      gradient: "from-red-400 to-red-500 ",
    },
    {
      title: "IOT",
      caption: "Innovative projects presented by I-Tech club.",
      img: img3,
      gradient: "from-blue-400 to-blue-500",
    },
    {
      title: "Publication Drive",
      caption: "Students expressing thoughts through words.",
      img: img4,
      gradient: "from-green-400 to-green-500",
    },
    {
      title: "Sports Meet",
      caption: "Energy and enthusiasm by Stride club.",
      img: img5,
      gradient: "from-emerald-400 to-emerald-500",
    },
    {
      title: "Social Awareness",
      caption: "Awareness programs by The Responsible Invertian.",
      img: img6,
      gradient: "from-orange-400 to-orange-500",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-white py-20 px-6 text-slate-800"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-500">
            Abhiruchi Gallery
          </span>
        </h2>

        <p className="text-lg text-slate-700 max-w-3xl mx-auto">
          A glimpse of creativity, innovation, and joy — captured during club events.
        </p>
      </motion.div>

      {/* Gallery Cards */}
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

// Card Component (About.jsx style)
const GalleryCard = ({ title, caption, img, gradient }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
  >
    {/* Top Gradient Header + Image */}
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-60`}
      ></div>
      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-xl">
        {title}
      </h3>
    </div>

    {/* Caption */}
    <div className="p-6 text-center bg-gray-50">
      <p className="text-slate-700 text-lg">{caption}</p>
    </div>
  </motion.div>
);

export default Gallery;
 