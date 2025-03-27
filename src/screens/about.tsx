import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faShieldAlt,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const sections = [
  {
    title: "Database Development Services",
    description:
      "Unlock the power of your data. Our expert database development services enhance efficiency and drive strategic decision-making.",
    icon: faDatabase,
  },
  {
    title: "Database Support Services",
    description:
      "We go beyond reactive fixes, optimizing databases for peak performance and preventing downtime before it occurs.",
    icon: faCogs,
  },
  {
    title: "Database Security & Compliance",
    description:
      "Our security and compliance solutions safeguard your data, ensuring it aligns with industry regulations and remains protected.",
    icon: faShieldAlt,
  },
];

const steps = [
  {
    title: "Research",
    description: "Analyzing your data needs for optimal solutions.",
  },
  {
    title: "Design",
    description: "Crafting powerful and scalable data architectures.",
  },
  {
    title: "Develop",
    description: "Building high-performance, secure T-SQL solutions.",
  },
  {
    title: "Deliver",
    description: "Ensuring seamless deployment and ongoing support.",
  },
];

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6 md:px-12 pt-[180px]">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-purple-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Synergic Links
      </motion.h2>

      {/* Who We Are */}
      <motion.p
        className="max-w-4xl mx-auto text-center mb-12 text-lg leading-relaxed text-gray-300"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Since <span className="text-purple-400 font-bold">2007</span>, Synergic
        Links has been a trusted partner for UK government and financial
        institutions. Specializing in cloud platforms like AWS and Azure, our
        expertise in SQL Server, Visual Studio, and Python empowers businesses
        to unlock their data's full potential.
      </motion.p>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sections.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon
              icon={service.icon}
              className="text-4xl text-purple-400"
            />
            <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-300 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Process Steps */}
      <motion.h3
        className="text-3xl font-bold text-center mt-16 mb-8 text-purple-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Process
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">{step.title}</h4>
            <p className="text-gray-300 mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
