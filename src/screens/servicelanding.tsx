import React, { useState } from "react";
import { Buttonnew } from "../components";
import { Link } from "react-router-dom";
import { BreadCrumbs } from "../components";
const ServiceLanding = () => {
  return (
    <div className="bg-background text-text ">
      {/* Hero Section */}
      <section className="text-center py-20 bg-primary text-textLight p-6">
        <BreadCrumbs />

        <h1 className="text-6xl font-bold text-accent">
          Comprehensive Database Services
        </h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Empower your business with secure, scalable, and high-performance
          database solutions. Our expert team ensures reliability, security, and
          efficiency for your data needs.
        </p>
      </section>

      {/* Service Categories */}
      <section className="grid md:grid-cols-3 gap-8 py-16 p-8">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="text-center py-16 bg-darkBg text-textLight">
        <h3 className="text-5xl font-bold text-accent">
          Why Choose Our Services?
        </h3>
        <p className="text-lg mt-4 max-w-3xl mx-auto text-white">
          Our team of experienced database professionals ensures seamless
          implementation, ongoing support, and top-tier security for all your
          database needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-8 text-white p-8">
          {whyChooseData.map((item, index) => (
            <div key={index} className="p-6 bg-secondary rounded-2xl shadow-lg">
              <h4 className="text-2xl font-semibold text-accent">
                {item.title}
              </h4>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h3 className="text-5xl font-bold">Ready to Optimize Your Database?</h3>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Contact us today for a personalized consultation and let us help you
          unlock the full potential of your data infrastructure.
        </p>

        <Buttonnew
          pxy="px-8 py-4 mt-6"
          hovertext="hover:text-primary text-xl"
          bold=""
          border="border-2"
          round="xl"
          text={<p>Get Started Now</p>}
        />
      </section>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="p-8 bg-secondary rounded-2xl shadow-lg relative overflow-hidden hover:scale-105 transition-transform"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 className="text-4xl text-accent font-semibold">{service.title}</h2>
      <p className="mt-4 text-lg text-white">{service.description}</p>
      <ul className="list-disc list-inside mt-4 text-base text-white">
        {service.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      {hover && (
        <Link to={service.link}>
          <button className="absolute bottom-4 right-1 px-6 py-2 text-blue-400">
            Learn More {"->"}
          </button>
        </Link>
      )}
    </div>
  );
};

const serviceData = [
  {
    title: "Database Development",
    description:
      "We design, build, and optimize custom databases tailored to your business requirements.",
    points: [
      "Custom database architecture",
      "Scalability and performance tuning",
      "Integration with cloud platforms",
    ],
    link: "/services/Database-Development",
  },
  {
    title: "Database Support",
    description:
      "24/7 monitoring, troubleshooting, and proactive maintenance to ensure database reliability and peak performance.",
    points: [
      "Real-time monitoring and alerts",
      "Backup and disaster recovery",
      "Performance optimization and tuning",
    ],
    link: "/services/Database-Support",
  },
  {
    title: "Security & Compliance",
    description:
      "Protect sensitive data and ensure compliance with industry regulations through our cutting-edge security measures.",
    points: [
      "Data encryption and access control",
      "Regulatory compliance (GDPR, HIPAA, etc.)",
      "Security audits and vulnerability assessments",
    ],
    link: "/services/Security-Compliance",
  },
];

const whyChooseData = [
  {
    title: "Expertise & Experience",
    description:
      "Years of industry experience in database architecture, support, and security.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Tailored solutions designed to meet unique business needs and challenges.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "Utilizing the latest tools and technologies to deliver high-performance solutions.",
  },
];

export default ServiceLanding;
