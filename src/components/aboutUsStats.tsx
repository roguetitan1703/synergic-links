import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGlobe,
  faUsers,
  faCheckCircle,
  faArrowRight, // Imported arrow icon for links
} from "@fortawesome/free-solid-svg-icons";

// Stats data with final values and complete merged sentences.
// The highlighted key word is wrapped in a span (using dangerouslySetInnerHTML).
const statsData = [
  {
    icon: faBriefcase,
    value: 150,
    sentence:
      "<span class='text-accent'>Projects</span> delivered with unparalleled quality.",
  },
  {
    icon: faGlobe,
    value: 5,
    sentence:
      "Empowering <span class='text-accent'>Countries</span> with innovative data solutions.",
  },
  {
    icon: faUsers,
    value: 47,
    sentence:
      "Driven by a team of <span class='text-accent'>Experts</span> fueling innovation.",
  },
  {
    icon: faCheckCircle,
    value: 15,
    sentence:
      "Trusted by over <span class='text-accent'>Clients</span> for exceptional strategies.",
  },
];

// A single stat card that displays an animated number and then a merged sentence.
const StatCard = ({ stat, delay }) => {
  const [count, setCount] = useState(0);
  const [showSentence, setShowSentence] = useState(false);
  const cardRef = React.useRef(null);
  const inView = useInView(cardRef, { once: true });

  useEffect(() => {
    if (inView) {
      const duration = 1000; // duration for count animation in ms
      const startTime = performance.now();

      const animateCount = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * stat.value));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(stat.value);
          // Once count animation completes, fade in the sentence.
          setTimeout(() => setShowSentence(true), 300);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [inView, stat.value]);

  return (
    <div className="hover:scale-110 transition-all duration-300 group">
      <motion.div
        ref={cardRef}
        className="flex flex-col bg-darkBg/20 hover:bg-darkBg/30 shadow-lg hover:shadow-2xl hover:backdrop-blur-md backdrop-blur-2xl rounded-xl items-start justify-start w-full p-3 py-3 gap-y-6 transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6, delay }}
      >
        <div className="flex flex-row items-start justify-between w-full">
          <span className="text-7xl text-accent">{count}+</span>
          <div className="bg-accent/10 px-2 py-1 rounded-full">
            <FontAwesomeIcon
              icon={stat.icon}
              className="text-sm text-accent/70 group-hover:text-accent group-hover:scale-105"
            />
          </div>
        </div>
        <motion.p className="flex flex-col text-sm sm:text-base md:text-md text-textLight text-left">
          {showSentence && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              // Using dangerouslySetInnerHTML to insert HTML markup for highlighting.
              dangerouslySetInnerHTML={{ __html: stat.sentence }}
            />
          )}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default function AboutUsHero() {
  // Define heading segments for typewriter effect
  const headingSegments = [
    { text: "Empowering Your ", highlight: false },
    { text: "Data", highlight: true },
    { text: " Journey with Synergic ", highlight: false },
    { text: "Links", highlight: true },
    { text: ".", highlight: false },
  ];

  const [currentSegment, setCurrentSegment] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [typedSegments, setTypedSegments] = useState(
    headingSegments.map(() => "")
  );

  useEffect(() => {
    if (currentSegment < headingSegments.length) {
      if (currentLetter < headingSegments[currentSegment].text.length) {
        const timeout = setTimeout(() => {
          setTypedSegments((prev) => {
            const newSegments = [...prev];
            newSegments[currentSegment] = headingSegments[
              currentSegment
            ].text.substring(0, currentLetter + 1);
            return newSegments;
          });
          setCurrentLetter(currentLetter + 1);
        }, 50); // faster typing at 50ms per character
        return () => clearTimeout(timeout);
      } else if (currentSegment < headingSegments.length - 1) {
        const timeout = setTimeout(() => {
          setCurrentSegment(currentSegment + 1);
          setCurrentLetter(0);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentSegment, currentLetter, headingSegments]);

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[800px] lg:min-h-[1000px] bg-gradient-to-r from-primary to-secondary flex items-center justify-center overflow-hidden py-16 sm:py-20">
      {/* Inline style for blinking cursor */}
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .blinking-cursor {
          font-weight: 100;
          font-size: 1em;
          color: #fff;
          animation: blink 1s step-end infinite;
        }
      `}</style>
      {/* Background Decorations with improved gradient & random blob placements */}
      <div className="absolute inset-0 opacity-10">
        {/* Randomly placed blur objects */}
        <div className="absolute w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-accent top-10 left-1/4 blur-3xl"></div>
        <div className="absolute w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-accent top-1/3 right-10 blur-2xl"></div>
        <div className="absolute w-60 h-60 sm:w-96 sm:h-96 rounded-full bg-accent bottom-1/4 left-10 blur-3xl"></div>
        <div className="absolute w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-accent bottom-10 right-1/3 blur-2xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto flex flex-row sm:flex-row items-center justify-between px-6 md:px-8 lg:px-10 gap-8">
        {/* Left Column: Updated About Us Text with fade in animations */}
        <motion.div
          className="md:w-1/2 text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* a. Heading with typewriter effect and blinking cursor */}
          <motion.h1
            className="text-7xl sm:text-7xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {headingSegments.map((segment, idx) => {
              const text = typedSegments[idx];
              return segment.highlight ? (
                <span key={idx} className="text-accent">
                  {text}
                </span>
              ) : (
                <span key={idx}>{text}</span>
              );
            })}
            <span className="blinking-cursor">|</span>
          </motion.h1>
          {/* b. Merged Paragraph */}
          <motion.p
            className="mb-4 text-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Synergic Links, we have been a trusted partner for data solutions
            since 2007, serving prestigious government and financial
            institutions across the United Kingdom. We navigate the
            ever-evolving world of cloud platforms (AWS, Azure) and on-premise
            environments with ease by leveraging cutting-edge technologies like
            SQL Server, Visual Studio, and Python to tailor solutions that
            perfectly fit your needs.
          </motion.p>
          {/* c. Revised Services Heading */}
          <motion.p
            className="text-lg font-semibold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Our Expertise Drives Transformation
          </motion.p>
          {/* d. Services Link List as 2-column grid with arrow icons */}
          <motion.div
            className="grid grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              "Database Development Services",
              "Database Support Services",
              "Database Security & Compliance",
            ].map((service, idx) => (
              <a
                key={idx}
                href="#"
                className="flex items-center justify-start border border-transparent transition-all duration-300 py-2 group"
              >
                <span className="group-hover:text-accent group-hover:underline group-hover:scale-105 transition-all duration-300">
                  {service}
                </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-3 transform -rotate-45 group-hover:rotate-0 group-hover:text-accent transition-transform duration-300"
                />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Stats Section */}
        <motion.div
          className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <StatCard stat={statsData[0]} delay={0.2} />
          <StatCard stat={statsData[1]} delay={0.4} />
          <StatCard stat={statsData[2]} delay={0.6} />
          <StatCard stat={statsData[3]} delay={0.8} />
        </motion.div>
      </div>
    </section>
  );
}
