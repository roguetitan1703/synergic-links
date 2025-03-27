import { motion } from "framer-motion";
import React, { useState } from "react";

const Develop = require("../devdata/assets/develop.png");
const Deliver = require("../devdata/assets/deliver.png");
const Design = require("../devdata/assets/design.png");
const Research = require("../devdata/assets/research.png");

const steps = [
  {
    title: "Research",
    description: "Analyzing your data needs for optimal solutions.",
    icon: Research,
  },
  {
    title: "Design",
    description: "Crafting powerful and scalable data architectures.",
    icon: Design,
  },
  {
    title: "Develop",
    description: "Building high-performance, secure T-SQL solutions.",
    icon: Develop,
  },
  {
    title: "Deliver",
    description: "Ensuring seamless deployment and ongoing support.",
    icon: Deliver,
  },
];

export default function AIProcess() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-primary text-center">
      <h3 className="text-4xl font-bold text-accent mb-8">
        Our Work Process
        <br />
        How We Working For our Clints or Customers
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center overflow-hidden hover:bg-purple-hover"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Progress Bar (Always Visible) */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gray-400 rounded-t-lg overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <h4 className="text-2xl font-semibold text-white mb-4">
              {step.title}
            </h4>
            <div className="relative w-20 h-20">
              <motion.img
                src={step.icon}
                alt={step.title}
                className="w-full h-full object-contain transition-opacity duration-300"
                animate={{ opacity: hoveredIndex === index ? 0 : 1 }}
              />
            </div>

            {/* Full-card Hover Effect */}
            {hoveredIndex === index && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center bg-accent text-primary font-medium text-lg p-6 rounded-lg"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="text-2xl font-bold">{step.title}</h4>
                <p className="text-center text-primary mt-2">
                  {step.description}
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
