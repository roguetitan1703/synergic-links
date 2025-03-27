import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FallingCardsSection = ({ services }) => {
  return (
    <div className="text-white py-16 px-6 min-h-screen flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-center text-accent mb-12"
      >
        Our Services
      </motion.h1>
      <div className="w-full max-w-4xl  space-y-6 p-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
            className="relative w-full bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-accent transition-all"
          >
            <FontAwesomeIcon
              icon={service.icon}
              className="text-5xl text-accent mb-4"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center text-white text-center p-4 rounded-2xl opacity-0 transition-all"
            >
              {service.description}
            </motion.div>
            <h3 className="text-lg font-semibold text-center">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FallingCardsSection;
