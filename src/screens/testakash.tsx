import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faCloud,
  faBroom,
  faChartBar,
  faCogs,
  faTachometerAlt,
  faServer,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { BreadCrumbs } from "../components";

const services = [
  {
    title: "Building Data Pipelines (ETL / SSIS Processes Development)",
    icon: faDatabase,
    description:
      "We design and implement automated processes to seamlessly extract, transform, and load (ETL) data from various sources.",
  },
  {
    title: "Migrating to the Cloud (Data Migration)",
    icon: faCloud,
    description:
      "Move your data from legacy systems to modern cloud platforms with minimal disruption and enhanced efficiency.",
  },
  {
    title: "Ensuring Data Quality (Data Cleansing and Transformation)",
    icon: faBroom,
    description:
      "Identify and rectify inconsistencies, missing information, and duplicate entries to ensure high data quality.",
  },
  {
    title: "SQL SERVER REPORTING SERVICES (SSRS) DEVELOPMENT",
    icon: faChartBar,
    description:
      "Transform raw data into actionable insights with custom reports, automation, and interactive dashboards.",
  },
  {
    title: "SQL SERVER ANALYSIS SERVICES (SSAS) DEVELOPMENT",
    icon: faCogs,
    description:
      "Unlock hidden data potential with advanced modeling and data mining services for strategic decision-making.",
  },
  {
    title: "Power BI Optimization for Peak Performance",
    icon: faTachometerAlt,
    description:
      "Optimize dashboards for speed and efficiency, ensuring smooth interaction and fast-loading reports.",
  },
  {
    title: "AZURE SQL DATABASE DEVELOPMENT",
    icon: faServer,
    description:
      "Design robust Azure SQL architectures prioritizing performance, scalability, and security.",
  },
  {
    title: "AZURE SQL DATA WAREHOUSE DEVELOPMENT",
    icon: faWarehouse,
    description:
      "Build secure, scalable data warehouses for complex queries using Azure Synapse Analytics.",
  },
];

const FallingCardsSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6 min-h-screen flex flex-col items-center">
      <BreadCrumbs />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-center text-accent mb-12"
      >
        Our Services
      </motion.h1>
      <div className="w-full max-w-4xl h-[600px] overflow-y-scroll space-y-6 p-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.6 }}
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

const Dds = () => {
  return (
    <div>
      <FallingCardsSection />
    </div>
  );
};

export default Dds;
