import React, { useState, useEffect, useRef } from "react";

const FormTabs = ({ categories, activeCategory, onCategoryChange }) => {
  const [highlightPosition, setHighlightPosition] = useState(0);
  const [highlightWidth, setHighlightWidth] = useState(0);
  const tabRefs = useRef([]);

  useEffect(() => {
    updateIndicatorPosition();
  }, [activeCategory]);

  const updateIndicatorPosition = () => {
    const activeTab = tabRefs.current.find(
      (tab) => tab?.dataset.value === activeCategory
    );
    if (activeTab) {
      setHighlightPosition(activeTab.offsetLeft);
      setHighlightWidth(activeTab.offsetWidth - 16);
    }
  };

  const handleCategoryClick = (category) => {
    onCategoryChange(category.value);
  };

  return (
    <div className="relative">
      <div className="relative z-10 flex space-x-4">
        {categories.map((category, index) => (
          <button
            key={index}
            role="tab"
            tabIndex={0}
            data-value={category.value}
            aria-selected={activeCategory === category.value}
            onClick={() => handleCategoryClick(category)}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`form-tab-button px-4 py-2 rounded-full font-semibold transition-colors duration-200 focus:outline-none relative z-10 ${
              activeCategory === category.value
                ? "bg-primary text-dark-text-primary shadow-lg" // Active tab styles
                : "text-dark-text-secondary hover:text-light-base hover:bg-dark-layer-2" // Inactive tab styles
            }`}
          >
            {category.label}
          </button>
        ))}
        <div
          className={`absolute bottom-0 left-0 h-full bg-primary rounded-full z-0 transition-all duration-300 ease-in-out`}
          style={{
            left: highlightPosition,
            width: highlightWidth,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FormTabs;
