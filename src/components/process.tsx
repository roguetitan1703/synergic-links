import { motion } from "framer-motion";
import React, { useState } from "react";

const Planning = require("../devdata/assets/planning.png");
const ProblemAnalysis = require("../devdata/assets/problem_analysis.png");
const SolveProblems = require("../devdata/assets/solve_problems.png");
const Deliver = require("../devdata/assets/deliver-to-customers.png");

const steps = [
  {
    number: "01",
    title: "Planning",
    description:
      "We collaborate closely with you to understand your specific database needs and goals. We define clear project objectives and develop a customized strategy for optimal results.",
    icon: Planning,
  },
  {
    number: "02",
    title: "Problem Analysis",
    description:
      "Our skilled team meticulously assesses your existing database infrastructure. We identify any security vulnerabilities, performance bottlenecks, or compliance gaps.",
    icon: ProblemAnalysis,
  },
  {
    number: "03",
    title: "Solve Problems",
    description:
      "We leverage our expertise to implement robust solutions for database security, performance, and compliance. We seamlessly integrate with your existing systems for a smooth transition.",
    icon: SolveProblems,
  },
  {
    number: "04",
    title: "Deliver to Customers",
    description:
      "We provide comprehensive documentation and training to empower your team to manage the database effectively. We offer ongoing support to ensure your database continues to operate at peak performance and adhere to regulations.",
    icon: Deliver,
  },
];

export default function AIProcess() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-primary text-center">
      <h3 className="text-4xl font-bold text-accent mb-8">
        Our Work Process <br />
        How We Working For our Clients or Customers
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            style={{ height: 400 }}
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

            {/* Step Number Positioned at Top Right */}
            <div className="absolute bottom-2 right-2 text-center justify-center items-center rounded-full h-10 w-10 bg-gray-100 text-primary font-bold">
              <p className="p-2">{step.number}</p>
            </div>

            <h4 className="text-2xl font-semibold text-white mb-2">
              {step.title}
            </h4>
            <div className="relative w-auto h-[400px]">
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
