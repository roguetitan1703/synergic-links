import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FallingCardsSection = ({ services }) => {
  // ServiceCard component created to encapsulate hover state and tooltip logic
  const ServiceCard = ({ service, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
      <motion.div
        key={index}
        className="relative bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-start justify-center cursor-pointer transition-all"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeInOut" }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <div className="flex items-center mb-4">
          <FontAwesomeIcon
            icon={service.icon}
            className="text-5xl text-accent mr-3"
          />
          <h3 className="text-xl font-semibold">{service.title}</h3>
        </div>
        <p className="text-sm text-gray-300">{service.description}</p>
        {/* Tooltip using AnimatePresence for smooth entrance/exit */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 bg-darkBg/30 backdrop-blur-md flex items-center justify-center text-white text-center p-4 rounded-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {service.hoverText}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="text-white py-16 px-6 min-h-screen flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-4xl font-extrabold text-center text-accent mb-12"
      >
        Our Services
      </motion.h1>
      {/* Grid layout to show two cards per row on medium+ screens */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {services.map((service, index) => (
          <ServiceCard service={service} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FallingCardsSection;
