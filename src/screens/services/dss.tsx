import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faInfoCircle,
  faRocket,
  faLock,
  faChartLine,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Buttonnew, BreadCrumbs } from "../../components";
const DatabaseSupportSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8 md:px-16">
      <BreadCrumbs />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl font-extrabold text-accent leading-tight">
          Database Support Services
        </h1>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          At <span className="text-accent font-semibold">Synergic Links</span>,
          we know your database is the <strong>beating heart</strong> of your
          business. But even the strongest heart needs{" "}
          <strong>regular check-ups</strong> and <strong>expert care</strong> to
          function flawlessly. That's where our{" "}
          <strong>comprehensive Database Support Services</strong> come in.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            title: "Runs Smoothly",
            description:
              "We optimize performance and troubleshoot issues to keep your system running at top speed.",
            icon: (
              <FontAwesomeIcon
                icon={faRocket}
                className="text-4xl text-accent"
              />
            ),
          },
          {
            title: "Stays Secure",
            description:
              "We implement strong security measures to protect your data from unauthorized access.",
            icon: (
              <FontAwesomeIcon icon={faLock} className="text-4xl text-accent" />
            ),
          },
          {
            title: "Scales with You",
            description:
              "As your business grows, we ensure your database can handle increased demand effortlessly.",
            icon: (
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-4xl text-accent"
              />
            ),
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-accent">
              {feature.title}
            </h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Dss = () => {
  const supportPackages = [
    {
      name: "Standard Support",
      hours: "9am-5pm, Mon-Fri",
      features: {
        sqlSupport: "moderate", // Basic support
        migrationSupport: "moderate", // Limited migration support
        ssisSupport: "moderate", // Basic assistance
        bugResolution: true,
        changeManagement: true,
        rapidResponse: true,
        proactiveMonitoring: true,
        preventativeMaintenance: true,
        incidentManagement: true,
        dbInstallation: "moderate", // Excludes HA/DR setup
        backupReview: "moderate", // Limited backup review
        azurePipelineSupport: false, // Not included
        disasterRecovery: false, // Not included
      },
    },
    {
      name: "Advanced Support",
      hours: "9am-6pm, Mon-Fri",
      features: {
        sqlSupport: true,
        migrationSupport: true,
        ssisSupport: true,
        bugResolution: true,
        changeManagement: true,
        rapidResponse: true,
        proactiveMonitoring: true,
        preventativeMaintenance: true,
        incidentManagement: true,
        dbInstallation: true,
        backupReview: true,
        azurePipelineSupport: "moderate", // Guidance, but not full management
        disasterRecovery: false,
      },
    },
    {
      name: "Enterprise Support",
      hours: "24/7 Support",
      features: {
        sqlSupport: true,
        migrationSupport: true,
        ssisSupport: true,
        bugResolution: true,
        changeManagement: true,
        rapidResponse: true,
        proactiveMonitoring: true,
        preventativeMaintenance: true,
        incidentManagement: true,
        dbInstallation: true,
        backupReview: true,
        azurePipelineSupport: true,
        disasterRecovery: true,
      },
    },
  ];

  const featureDetails = {
    sqlSupport: "Support for SQL Azure and On-Premise environments.",
    migrationSupport: "Help with database migration planning and execution.",
    ssisSupport: "Troubleshooting and optimization of SSIS processes.",
    bugResolution: "Fixes for SQL Server bugs and database errors.",
    changeManagement:
      "Managing changes and updates to database configurations.",
    rapidResponse: "Immediate response and resolution for database issues.",
    proactiveMonitoring:
      "Continuous monitoring to detect issues before they occur.",
    preventativeMaintenance: "Regular maintenance to prevent system failures.",
    incidentManagement:
      "Service desk software for issue tracking and resolution.",
    dbInstallation: "Installation and configuration of database environments.",
    backupReview: "Review and improvement of backup plans.",
    azurePipelineSupport:
      "Setup, configuration, and troubleshooting of Azure Data Pipelines.",
    disasterRecovery:
      "Planning and implementation of disaster recovery solutions.",
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8">
      {/* Hero Section */}

      <DatabaseSupportSection />
      {/* Support Packages Table */}
      <section className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-accent text-center mb-8">
          Support Packages
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-gray-800 bg-opacity-80 backdrop-blur-lg shadow-lg rounded-xl overflow-hidden">
            {/* Table Header */}
            <thead>
              <tr className="bg-accent text-gray-900 text-lg font-semibold">
                <th className="py-4 px-6 text-left">Feature</th>
                {supportPackages.map((pkg, index) => (
                  <th key={index} className="py-4 px-6 text-center">
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {/* Support Hours Row */}
              <tr className="bg-gray-700 hover:bg-gray-600 transition duration-300">
                <td className="py-4 px-6 text-lg font-semibold text-accent">
                  Support Hours
                </td>
                {supportPackages.map((pkg, index) => (
                  <td
                    key={index}
                    className="py-4 px-6 text-center text-gray-300"
                  >
                    {pkg.hours}
                  </td>
                ))}
              </tr>

              {/* Feature Rows */}
              {Object.entries(featureDetails).map(
                ([key, description], rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${
                      rowIndex % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                    } hover:bg-gray-600 transition duration-300`}
                  >
                    <td className="py-4 px-6 text-lg font-semibold text-accent flex items-center gap-2">
                      {description}
                      <span className="group relative">
                        <FontAwesomeIcon
                          icon={faInfoCircle}
                          className="text-gray-400 hover:text-white cursor-pointer"
                        />
                        <span className="absolute left-0 -top-8 bg-black text-white text-sm px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {description}
                        </span>
                      </span>
                    </td>
                    {supportPackages.map((pkg, colIndex) => (
                      <td key={colIndex} className="py-4 px-6 text-center">
                        {pkg.features[key] === true ? (
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-green-400 text-2xl"
                          />
                        ) : pkg.features[key] === "moderate" ? (
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            className="text-yellow-400 text-2xl"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faTimesCircle}
                            className="text-red-500 text-2xl"
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-8">
          <a href="/contact">
            <Buttonnew
              round="xl"
              text={<p>Contact Us for Pricing</p>}
              pxy="py-3 px-8"
              bold="text-lg font-semibold"
              border="border-2"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Dss;
