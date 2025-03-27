import React from "react";
import { motion } from "framer-motion";
import {
  faLock,
  faUserShield,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BreadCrumbs } from "../../components";

const DatabaseSecuritySection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8 md:px-16">
      {/* Header Section */}
      <BreadCrumbs />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl font-extrabold text-accent leading-tight">
          Database Security & Compliance
        </h1>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          In today's <strong>digital age</strong>, data is the{" "}
          <strong>lifeblood of your organization</strong>. However, securing it
          is a <strong>growing challenge</strong>. At
          <span className="text-accent font-semibold"> Synergic Links</span>, a
          <strong>trusted data specialist since 2007</strong>, we provide{" "}
          <strong>cutting-edge security solutions</strong> to{" "}
          <strong>safeguard your sensitive information</strong> from evolving
          threats.
        </p>
      </motion.div>

      {/* Security Features Section */}
      <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            title: "Secure",
            description:
              "We proactively identify and mitigate vulnerabilities, ensuring your data stays protected.",
            icon: (
              <FontAwesomeIcon icon={faLock} className="text-5xl text-accent" />
            ),
            tooltip:
              "Industry-leading security measures prevent unauthorized access.",
          },
          {
            title: "Private",
            description:
              "We ensure compliance with GDPR, HIPAA, and other data privacy laws.",
            icon: (
              <FontAwesomeIcon
                icon={faUserShield}
                className="text-5xl text-accent"
              />
            ),
            tooltip: "Data encryption, masking, and access control measures.",
          },
          {
            title: "Compliant",
            description:
              "We help you stay ahead of evolving regulations and industry standards.",
            icon: (
              <FontAwesomeIcon
                icon={faBalanceScale}
                className="text-5xl text-accent"
              />
            ),
            tooltip: "Ongoing compliance audits and reporting services.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-accent">
              {feature.title}
            </h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
            <div data-tooltip-id={`tooltip-${index}`}>
              <span className="text-gray-500 text-sm cursor-help">ℹ️</span>
            </div>
            <Tooltip id={`tooltip-${index}`} place="top">
              {feature.tooltip}
            </Tooltip>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Dsc = () => {
  const services = [
    {
      title: "Database Activity Monitoring and Alerting",
      icon: "https://www.synergiclinks.com/assets/img/icon/4.png",

      description:
        "Monitor database activity for suspicious behavior and receive alerts in real-time.",
    },
    {
      title: "Vulnerability Management",
      icon: "https://www.synergiclinks.com/assets/img/icon/1%20(1).png",

      description:
        "Identify, prioritize, and remediate vulnerabilities in database software and configuration.",
    },
    {
      title: "Patch Management",
      icon: "https://www.synergiclinks.com/assets/img/icon/patch.png",

      description:
        "Keep database software up-to-date with the latest security patches.",
    },
    {
      title: "Data Encryption",
      icon: "https://www.synergiclinks.com/assets/img/icon/6.png",

      description:
        "Encrypt data at rest and in transit to protect it from unauthorized access.",
    },
    {
      title: "Access Controls",
      icon: "https://www.synergiclinks.com/assets/img/icon/5.png",

      description:
        "Control who can access databases and what actions they can perform.",
    },
    {
      title: "Data Loss Prevention (DLP)",
      icon: "https://www.synergiclinks.com/assets/img/icon/8.png",

      description: "Prevent unauthorized disclosure of sensitive data.",
    },
    {
      title: "Compliance with Data Privacy Regulations",
      icon: "https://www.synergiclinks.com/assets/img/icon/3.png",

      description: "Ensure compliance with regulations such as GDPR and HIPAA.",
    },
    {
      title: "Security Awareness Training",
      icon: "https://www.synergiclinks.com/assets/img/icon/2%20(1).png",

      description: "Train employees on best practices for protecting data.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8">
      <DatabaseSecuritySection />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
        {services.map((service, index) => (
          <a
            key={index}
            href={""}
            className="p-6 bg-gray-800 bg-opacity-80 border border-gray-700 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center backdrop-blur-lg"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-20 h-20 rounded-full mb-4 border-2 border-accent p-2"
            />
            <h2 className="text-xl font-semibold text-accent mb-2">
              {service.title}
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dsc;
