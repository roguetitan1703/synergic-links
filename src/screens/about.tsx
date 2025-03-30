import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faShieldAlt,
  faCogs,
  faBriefcase,
  faGlobe,
  faUsers,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { BreadCrumbs } from "../components";

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
  const [counts, setCounts] = useState({
    projects: 0,
    countries: 0,
    experts: 0,
    clients: 0,
  });
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef(null);

  // Set up intersection observer to start counting when stats section is in view
  // and reset when scrolled away
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
        } else {
          setStartCounting(false);
          // Reset counts when scrolled away
          setCounts({
            projects: 0,
            countries: 0,
            experts: 0,
            clients: 0,
          });
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Animation for counting up when section is visible
  useEffect(() => {
    if (startCounting) {
      const interval = setInterval(() => {
        setCounts((prevCounts) => ({
          projects: Math.min(prevCounts.projects + 2, 106),
          countries: Math.min(prevCounts.countries + 1, 5),
          experts: Math.min(prevCounts.experts + 2, 47),
          clients: Math.min(prevCounts.clients + 1, 15),
        }));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [startCounting]);

  return (
    <div className="bg-darkBg text-textLight min-h-screen">
      {/* About Section */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <BreadCrumbs />
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 md:mb-16 text-accent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Synergic Links
        </motion.h2>

        <motion.p
          className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 md:mb-16 text-base sm:text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Since{" "}
          <span className="bg-gradient-to-r from-accent to-accent-hover text-transparent bg-clip-text font-bold">
            2007
          </span>
          , Synergic Links has been a trusted partner for UK government and
          financial institutions. Specializing in cloud platforms like AWS and
          Azure, our expertise in SQL Server, Visual Studio, and Python empowers
          businesses to unlock their data's full potential.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {sections.map((service, index) => (
            <motion.div
              key={index}
              className="bg-primary p-6 sm:p-8 rounded-lg shadow-lg hover:bg-blue-hover transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon
                icon={service.icon}
                className="text-4xl md:text-5xl text-accent p-3 md:p-4 rounded-xl"
              />
              <h3 className="text-xl md:text-2xl font-semibold mt-4 md:mt-6 mb-2 md:mb-4">
                {service.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.h3
          className="text-2xl sm:text-3xl font-bold text-center mt-16 sm:mt-20 mb-8 sm:mb-12 bg-gradient-to-r from-accent to-accent-hover text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-secondary p-6 sm:p-8 rounded-lg shadow-lg hover:bg-purple-hover transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {step.title}
              </h4>
              <p className="text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className="relative w-full min-h-[600px] md:min-h-[800px] lg:min-h-[1000px] bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-col overflow-hidden py-16 sm:py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-accent top-20 left-10 sm:left-20 blur-3xl"></div>
          <div className="absolute w-60 h-60 sm:w-96 sm:h-96 rounded-full bg-accent bottom-20 right-10 sm:right-20 blur-3xl"></div>
        </div>

        {/* Heading */}
        <motion.div
          className="absolute top-10 sm:top-16 md:top-20 lg:top-[100px] px-4 w-full"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-accent to-accent-hover text-transparent bg-clip-text">
              One Integration
            </span>
            <br />
            <span className="text-textLight">
              to simplify your <br className="hidden sm:block" /> Data
              Management.
            </span>
          </p>
        </motion.div>

        {/* Stats Section */}
        <div
          id="stats-section"
          ref={statsRef}
          className="absolute top-64 sm:top-80 md:top-96 lg:top-[500px] w-full flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4"
        >
          {[
            {
              icon: faBriefcase,
              label: "Successful Projects",
              value: counts.projects,
            },
            {
              icon: faGlobe,
              label: "Operating in Countries",
              value: counts.countries,
            },
            { icon: faUsers, label: "Skilled Experts", value: counts.experts },
            {
              icon: faCheckCircle,
              label: "Happy Clients",
              value: counts.clients,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-darkBg border border-accent/20 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl shadow-accent/10 transform transition-all duration-500 hover:scale-105 hover:shadow-accent/30 w-36 sm:w-48 md:w-56 lg:w-64"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-accent/10 p-2 sm:p-3 md:p-4 rounded-full mb-2 sm:mb-4">
                <FontAwesomeIcon
                  icon={stat.icon}
                  className="text-3xl sm:text-4xl md:text-5xl text-accent"
                />
              </div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">
                {stat.value}+
              </p>
              <p className="text-sm sm:text-base md:text-lg text-textLight mt-1 sm:mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
