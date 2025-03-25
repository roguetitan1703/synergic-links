import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const offices = [
  {
    id: 1,
    country: "United Kingdom",
    address: "164 Forum House, Empire Way, Wembley Park, HA9 0HL",
    phone: "+44 79122 04910",
    email: "sales@synergiclinks.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223793.93149182128!2d-0.3955122061352763!3d51.50872720297123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487613d51fd9b3ef%3A0x630a759cb228db65!2sForum%20House!5e0!3m2!1sen!2sin!4v1742705880027!5m2!1sen!2sin",
  },
  {
    id: 2,
    country: "India",
    address:
      "1st Floor, Arya Society, Kishor Suryawanshi Marg, Nashik 422004, Maharashtra",
    phone: "+91 9552555966",
    email: "sales@synergiclinks.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36190.4532679536!2d73.7640961701465!3d20.024810562107863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb0034c13db5%3A0x274894862334ede1!2sKishor%20suryvanshi%20marg%2C%20omkar%20nagar%20nashik!5e0!3m2!1sen!2sin!4v1742706748337!5m2!1sen!2sin",
  },
  {
    id: 3,
    country: "Singapore",
    address: "21 Fort Road, 439089, Singapore",
    phone: "+65 8376 3397",
    email: "sales@synergiclinks.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32290.10433047998!2d103.86072964689944!3d1.2843238605852405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1844a254b1d5%3A0x2fff1d1c1c388006!2s21%20Fort%20Rd%2C%20Singapore%20439089!5e0!3m2!1sen!2sin!4v1742706658929!5m2!1sen!2sin",
  },
];

const Theatrelocation = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div ref={sectionRef} className="bg-gray-900 min-h-screen py-16 px-8">
      <motion.h2
        className="text-4xl text-white text-center font-bold mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        🌍 Our Global Offices
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {offices.map((office, index) => (
          <motion.div
            key={office.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            {/* Google Map */}
            <div className="relative h-60">
              <iframe
                src={office.mapSrc}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Office Details */}
            <div className="p-6 text-gray-900">
              <h3 className="text-2xl font-semibold mb-2">{office.country}</h3>
              <p className="text-gray-700 flex items-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-blue-500 mr-2"
                />
                {office.address}
              </p>
              <p className="text-gray-700 flex items-center mt-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-green-500 mr-2"
                />
                {office.phone}
              </p>
              <p className="text-gray-700 flex items-center mt-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-red-500 mr-2"
                />
                {office.email}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Theatrelocation;
