import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BreadCrumbs, FallingCards } from "../../components";
import {
  faDatabase,
  faCloud,
  faBroom,
  faChartBar,
  faCogs,
  faTachometerAlt,
  faServer,
  faWarehouse,
  faShieldAlt,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Building Data Pipelines (ETL / SSIS Processes Development)",
    icon: faDatabase,
    img: "https://www.synergiclinks.com/assets/img/icon/Building%20Data%20Pipelines%20(ETL%20%20SSIS%20Processes%20Development).png",
    description:
      "We design and implement automated processes to seamlessly extract, transform, and load (ETL) data from various sources.",
    hoverText: "Expert pipelines to automate your data flow.",
  },
  {
    title: "Migrating to the Cloud (Data Migration)",
    icon: faCloud,
    img: "https://www.synergiclinks.com/assets/img/icon/Migrating%20to%20the%20Cloud%20(Data%20Migration).png",
    description:
      "Move your data from legacy systems to modern cloud platforms with minimal disruption and enhanced efficiency.",
    hoverText: "Efficient cloud migrations with minimal downtime.",
  },
  {
    title: "Ensuring Data Quality (Data Cleansing and Transformation)",
    icon: faBroom,
    img: "https://www.synergiclinks.com/assets/img/icon/Ensuring%20Data%20Quality%20(Data%20Cleansing%20and%20Transformation.png",
    description:
      "Identify and rectify inconsistencies, missing information, and duplicate entries to ensure high data quality.",
    hoverText: "Improve accuracy with our thorough cleansing processes.",
  },
  {
    title: "SQL SERVER REPORTING SERVICES (SSRS) DEVELOPMENT",
    icon: faChartBar,
    img: "https://www.synergiclinks.com/assets/img/icon/SQL%20SERVER%20REPORTING%20SERVICES%20DEVELOPMENT.png",
    description:
      "Transform raw data into actionable insights with custom reports, automation, and interactive dashboards.",
    hoverText: "Dynamic reporting that drives informed decisions.",
  },
  {
    title: "SQL SERVER ANALYSIS SERVICES (SSAS) DEVELOPMENT",
    icon: faCogs,
    img: "https://www.synergiclinks.com/assets/img/icon/SQL%20SERVER%20ANALYSIS%20SERVICES%20(SSAS)%20DEVELOPMENT.png",
    description:
      "Unlock hidden data potential with advanced modeling and data mining services for strategic decision-making.",
    hoverText: "Advanced analytics to empower your strategy.",
  },
  {
    title: "Power BI Optimization for Peak Performance",
    icon: faTachometerAlt,
    img: "https://www.synergiclinks.com/assets/img/icon/Power%20BI%20Optimization%20for%20Peak%20Performance.png",
    description:
      "Optimize dashboards for speed and efficiency, ensuring smooth interaction and fast-loading reports.",
    hoverText: "Fine-tune your dashboards for seamless performance.",
  },
  {
    title: "AZURE SQL DATABASE DEVELOPMENT",
    icon: faServer,
    img: "https://www.synergiclinks.com/assets/img/icon/AZURE%20SQL%20DATABASE%20DEVELOPMENT.png",
    description:
      "Design robust Azure SQL architectures prioritizing performance, scalability, and security.",
    hoverText: "Build secure and scalable Azure databases.",
  },
  {
    title: "AZURE SQL DATA WAREHOUSE DEVELOPMENT",
    icon: faWarehouse,
    img: "https://www.synergiclinks.com/assets/img/icon/AZURE%20SQL%20DATABASE%20WHAREHOUSE%20DEVELOPMENT.png",
    description:
      "Build secure, scalable data warehouses for complex queries using Azure Synapse Analytics.",
    hoverText: "Empower your queries with a robust data warehouse.",
  },
];

const DatabaseDevelopmentSection = () => {
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
          Database Development Services
        </h1>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          In today's <strong>data-driven world</strong>, information fuels your
          business’s success. At{" "}
          <span className="text-accent font-semibold">Synergic Links</span>, we
          offer <strong>comprehensive Database Development Services</strong> to
          help you
          <strong>harness the full potential</strong> of your data.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {[
          {
            title: "Understand Your Data Landscape",
            description:
              "We analyze your data storage, management, and analysis needs.",
            icon: (
              <FontAwesomeIcon
                icon={faDatabase}
                className="text-5xl text-accent"
              />
            ),
            tooltip: "We assess data volume, sources, and integration points.",
          },
          {
            title: "Design an Optimal Architecture",
            description:
              "We create a database structure aligned with your business needs.",
            icon: (
              <FontAwesomeIcon icon={faCogs} className="text-5xl text-accent" />
            ),
            tooltip: "We focus on scalability, efficiency, and accessibility.",
          },
          {
            title: "Develop a Secure & Scalable Platform",
            description:
              "We prioritize security and scalability to grow with your business.",
            icon: (
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-5xl text-accent"
              />
            ),
            tooltip: "Robust security measures to protect sensitive data.",
          },
          {
            title: "Implement & Optimize",
            description:
              "We integrate your database and fine-tune it for peak performance.",
            icon: (
              <FontAwesomeIcon
                icon={faChartPie}
                className="text-5xl text-accent"
              />
            ),
            tooltip: "Continuous performance optimization for efficiency.",
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
            <div
              data-tooltip-id={`tooltip-${index}`}
              className="absolute right-2 top-2"
            >
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

const Dds = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
      <DatabaseDevelopmentSection />
      <FallingCards services={services} />
    </div>
  );
};

export default Dds;
