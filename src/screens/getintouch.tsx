import React, { useState, useEffect } from "react";
import FormTabs from "../components/formTabs.tsx";
import ContactFormBasic from "../components/forms/contactFormBasic.tsx";
import ContactFormServices from "../components/forms/contactFormServices.tsx";
import ContactFormDetailed from "../components/forms/contactFormDetailed.tsx";
import AnimatedBorderContainer from "../components/animations/animatedBorder.tsx";

const formCategories = [
  { label: "Contact Us", value: "basic" },
  { label: "Schedule Complementary Consultation", value: "services" },
  { label: "Sign Up as Partner", value: "detailed" },
];

const GetInTouch = () => {
  const [activeFormCategory, setActiveFormCategory] = useState("basic");
  const [formContent, setFormContent] = useState(renderForm("basic")); // Initialize form content
  const [_, setTransitioning] = useState(false); // State to control transition

  useEffect(() => {
    setFormContent(renderForm(activeFormCategory));
  }, [activeFormCategory]);

  function renderForm(category) {
    switch (category) {
      case "basic":
        return <ContactFormBasic />;
      case "services":
        return <ContactFormServices />;
      case "detailed":
        return <ContactFormDetailed />;
      default:
        return <ContactFormBasic />;
    }
  }

  const handleFormCategoryChange = (category) => {
    if (activeFormCategory !== category) {
      setTransitioning(true); // Start transition

      setTimeout(() => {
        setActiveFormCategory(category); // Change category after fade-out
      }, 500); // Match duration of fade-out transition. Adjust timeout to match transition duration
      setTimeout(() => {
        setTransitioning(false); // End transition after fade-in
      }, 500); // Adjust timeout to match total transition duration (fade-out + fade-in)
    }
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-dark-layer-0 py-20">
      {/* Increased py for more vertical spacing */}
      <div className="container mx-auto px-6 text-center">
        <div className="min-h-screen">
          <h2 className="text-7xl font-bold text-dark-text-primary py-12 mt-16 mb-4">
            {/* Reduced mb slightly */}
            Get In Touch
          </h2>
          <p className="text-dark-text-secondary text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            {/* Added subtext paragraph */}
            We are here to answer any questions you may have about our database
            management services. Choose the form that best suits your inquiry,
            and we'll get back to you promptly.
          </p>
          <div className="flex justify-center mb-8">
            {/* Centering the FormTabs */}
            <FormTabs
              categories={formCategories}
              activeCategory={activeFormCategory}
              onCategoryChange={handleFormCategoryChange}
            />
          </div>

          <div className="mt-8 relative overflow-hidden">
            {/* Relative and overflow-hidden for animation */}
            <div
              key={activeFormCategory}
              className={`transition-all duration-500 opacity-100 max-w-5xl mx-auto`} // Fade-in/out opacity transition
            >
              <AnimatedBorderContainer children={formContent} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
