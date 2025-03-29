const security = require("../assets/hback.jpg");
const develop = require("../assets/hback.webp");
const service = require("../assets/cs.jpg");

const services = [
  {
    heading: "Database Development Services",
    description:
      "Unlock the power of your data. We provide database development services to optimize efficiency and drive strategic decision-making.",
    ctaText: "Get Started",
    imageSrc: develop,
    link: "/services/Database-Development",
  },
  {
    heading: "Database Support Services",
    description:
      "We go beyond reactive solutions, optimizing your database for peak performance and preventing downtime.",
    ctaText: "Discover More",
    imageSrc: service, // replace with your image path
    link: "/services/Database-Support",
  },
  {
    heading: "Database Security and Compliance",
    description:
      "Our database security and compliance services ensure your data meets industry regulations and stays protected.",
    ctaText: "Learn More",
    imageSrc: security, // replace with your image path
    link: "/services/Security-Compliance",
  },
];

export default services;
