import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  // faBars,
  faSearch,
  faCog,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const Design = () => {
  return (
    <div className="bg-dark-layer-0 text-dark-text-primary min-h-screen font-sans">
      {/* Navigation Bar Example */}
      <nav className="bg-dark-layer-1 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-primary font-bold text-xl">
            Synergy Links
          </a>
          <div className="space-x-4">
            <a
              href="#"
              className="text-dark-text-primary hover:bg-dark-layer-2 py-2 px-3 rounded-md transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-dark-text-primary hover:bg-dark-layer-2 py-2 px-3 rounded-md transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#"
              className="text-dark-text-primary hover:bg-dark-layer-2 py-2 px-3 rounded-md transition-colors duration-200"
            >
              Contact
            </a>
            <button className="bg-primary hover:bg-primary-light text-dark-text-primary font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-8">
        {/* Typography Examples */}
        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">Typography</h2>
          <h1 className="text-5xl font-bold font-sans leading-tight tracking-tight mb-2">
            H1 Heading - Main Title
          </h1>
          <h2 className="text-4xl font-bold font-sans leading-tight tracking-normal mb-2">
            H2 Heading - Section Title
          </h2>
          <h3 className="text-3xl font-bold font-sans leading-normal tracking-normal mb-2">
            H3 Heading - Subsection Title
          </h3>
          <h4 className="text-2xl font-bold font-sans leading-normal tracking-normal mb-2">
            H4 Heading - Minor Title
          </h4>
          <h5 className="text-xl font-bold font-sans leading-relaxed tracking-normal mb-2">
            H5 Heading - Small Heading
          </h5>
          <h6 className="text-lg font-bold font-sans leading-relaxed tracking-wide mb-2">
            H6 Heading - Caption Heading
          </h6>
          <p className="text-base text-dark-text-secondary leading-relaxed font-sans mb-2">
            Body Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-sm text-dark-text-secondary leading-normal font-sans tracking-wider">
            Small Text/Caption - This is a smaller text used for captions and
            helper text.
          </p>
          <code className="font-mono bg-dark-layer-2 rounded-md p-2 block text-sm">
            <div className="bg-dark-layer-0 text-dark-text-primary">
              {" "}
              {/* Code Example - Monospace Font */}
              <br />
              // Code snippet using Inconsolata font-mono
              <br />
            </div>
          </code>
        </section>

        {/* Button Examples */}
        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">Buttons</h2>
          <div className="space-x-4 mb-4">
            <button className="bg-primary hover:bg-primary-light active:bg-primary-hover text-dark-text-primary font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200">
              Primary Button
            </button>
            <button className="bg-dark-layer-1 text-dark-text-primary border border-dark-layer-2 hover:bg-dark-layer-2 hover:border-dark-layer-3 active:bg-dark-layer-3 font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200">
              Secondary Button
            </button>
            <button className="bg-transparent text-dark-text-primary border border-dark-text-primary hover:bg-dark-layer-2 hover:text-dark-text-primary hover:border-dark-text-primary font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200">
              Outline Button
            </button>
            <button className="bg-transparent text-primary hover:text-primary-light hover:underline font-normal py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 font-semibold">
              Link Button
            </button>
          </div>
          <div className="space-x-4 mb-4">
            <button className="bg-primary hover:bg-primary-light active:bg-primary-hover text-dark-text-primary p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200">
              <FontAwesomeIcon icon={faDownload} />
            </button>
            <button className="bg-dark-layer-1 text-dark-text-primary border border-dark-layer-2 hover:bg-dark-layer-2 hover:border-dark-layer-3 active:bg-dark-layer-3 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200">
              <FontAwesomeIcon icon={faCog} />
            </button>
            <button className="bg-transparent text-dark-text-primary border border-dark-text-primary hover:bg-dark-layer-2 hover:text-dark-text-primary hover:border-dark-text-primary p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="bg-transparent text-primary hover:text-primary-light hover:underline font-normal p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 font-semibold">
              <FontAwesomeIcon icon={faLink} />
            </button>
          </div>
          <div className="space-x-4 mb-4">
            <button className="bg-primary hover:bg-primary-light active:bg-primary-hover text-dark-text-primary font-semibold py-1 px-2 text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200">
              Small Button
            </button>
            <button className="bg-primary hover:bg-primary-light active:bg-primary-hover text-dark-text-primary font-semibold py-2 px-4 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200">
              Medium Button (Default)
            </button>
            <button className="bg-primary hover:bg-primary-light active:bg-primary-hover text-dark-text-primary font-semibold py-3 px-6 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200">
              Large Button
            </button>
          </div>
          <div className="space-x-4">
            <button
              disabled
              className="bg-dark-layer-2 text-dark-text-disabled cursor-not-allowed opacity-75 py-2 px-4 rounded-md"
            >
              Disabled Button
            </button>
          </div>
        </section>

        {/* Card Example */}
        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">Card Example</h2>
          <div className="bg-dark-layer-1 rounded-md p-6">
            <h3 className="text-2xl font-semibold mb-2">Service Card</h3>
            <p className="text-dark-text-secondary mb-4">
              This is an example of a card component using `dark-layer-1` for
              the background.
            </p>
            <button className="bg-primary hover:bg-primary-light text-dark-text-primary font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200">
              Learn More
            </button>
          </div>
        </section>

        {/* Input Field Example */}
        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">Input Field</h2>
          <div className="mb-4">
            <label
              htmlFor="exampleInput"
              className="block text-dark-text-secondary text-sm font-bold mb-2"
            >
              Example Input:
            </label>
            <input
              type="text"
              id="exampleInput"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-dark-text-primary bg-dark-layer-2 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter text here"
            />
          </div>
        </section>

        {/* Accent Layer Example */}
        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">Accent Layers</h2>
          <div className="bg-accent-layer-strong p-6 rounded-md">
            <h3 className="text-2xl font-semibold mb-2">Accent Layer Strong</h3>
            <p className="text-dark-text-primary">
              This section uses `accent-layer-strong` for a highlighted
              background.
            </p>
          </div>
          <div className="bg-accent-layer-medium p-6 rounded-md mt-4">
            <h3 className="text-2xl font-semibold mb-2">Accent Layer Medium</h3>
            <p className="text-dark-text-primary">
              This section uses `accent-layer-medium` for a more subtle accent
              background.
            </p>
          </div>
          <div className="bg-accent-layer-subtle p-6 rounded-md mt-4">
            <h3 className="text-2xl font-semibold mb-2">Accent Layer Subtle</h3>
            <p className="text-dark-text-primary">
              This section uses `accent-layer-subtle` for a very subtle
              background accent.
            </p>
          </div>
        </section>

        {/* Divider Example */}
        <section>
          <h2 className="text-4xl font-semibold mb-4">Divider</h2>
          <div className="h-px w-full bg-dark-layer-2"></div>
        </section>
      </div>
    </div>
  );
};

export default Design;
