import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-6 transition-colors duration-300"
    >
      {/* 🔹 Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
            Contact Us
          </span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions, ideas, or feedback? We’d love to hear from you!
          Connect with the Abhiruchi team and let’s create something amazing
          together.
        </p>
      </motion.div>

      {/* 🔹 Contact Info + Form */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Get in Touch
          </h3>
          <div className="flex items-center gap-4 mb-6">
            <Mail className="w-6 h-6 text-orange-500" />
            <p className="text-gray-700 dark:text-gray-300">
              abhiruchi@invertisuniversity.ac.in
            </p>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <Phone className="w-6 h-6 text-orange-500" />
            <p className="text-gray-700 dark:text-gray-300">+91 98765 43210</p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-orange-500" />
            <p className="text-gray-700 dark:text-gray-300">
              Invertis University, Bareilly, Uttar Pradesh, India
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Send a Message
          </h3>

          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition duration-300"
            >
              <Send className="w-5 h-5" /> Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;


dgdg 