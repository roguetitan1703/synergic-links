const security = require("../assets/hback.jpg");
const develop = require("../assets/hback.webp");
const service = require("../assets/cs.jpg");

const services = [
  {
    heading: "Database Security and Compliance",
    description:
      "Our database security and compliance services ensure your data meets industry regulations and stays protected.",
    ctaText: "Learn More",
    imageSrc: security, // replace with your image path
  },
  {
    heading: "Database Support Services",
    description:
      "We go beyond reactive solutions, optimizing your database for peak performance and preventing downtime.",
    ctaText: "Discover More",
    imageSrc: service, // replace with your image path
  },
  {
    heading: "Database Development Services",
    description:
      "Unlock the power of your data. We provide database development services to optimize efficiency and drive strategic decision-making.",
    ctaText: "Get Started",
    imageSrc: develop,
  },
];

export default services;
