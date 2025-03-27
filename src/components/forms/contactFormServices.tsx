import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Buttonnew } from "..";

const ContactFormServices = () => {
  return (
    <div className="rounded-xl bg-secondary p-10 max-w-4xl w-full mx-auto shadow-lg">
      <h2 className="text-4xl font-bold text-accent mb-6 text-center tracking-wide">
        Inquire About Services
      </h2>
      <p className="text-white mb-8 text-center text-lg">
        Let us know your needs, and we will get back to you promptly.
      </p>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-white mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-secondary"
              required
            />
          </div>
          <div>
            <label
              htmlFor="emailAddress"
              className="block text-sm font-semibold text-white mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-secondary"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-white mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Enter your Company name"
              className="w-full px-4 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-secondary"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold text-white mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-secondary"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="companyAddress"
            className="block text-sm font-semibold text-white mb-2"
          >
            Company Address
          </label>
          <textarea
            id="companyAddress"
            placeholder="Type your Company Address here..."
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-secondary resize-none"
            required
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-white mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Type your message here..."
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-secondary resize-none"
            required
          ></textarea>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          {" "}
          {/* Checkboxes remain grid layout */}
          <label className="inline-flex items-center text-sm text-dark-text-secondary">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary rounded focus:ring-primary bg-dark-layer-2 border-dark-layer-3 focus:shadow-outline-primary transition duration-150 ease-in-out"
            />
            <span className="ml-2">SQL Database Support 24/7</span>
          </label>
          {/* ... other checkboxes ... */}
          <label className="inline-flex items-center text-sm text-dark-text-secondary">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary rounded focus:ring-primary bg-dark-layer-2 border-dark-layer-3 focus:shadow-outline-primary transition duration-150 ease-in-out"
            />
            <span className="ml-2">SQL Database Migration</span>
          </label>
          <label className="inline-flex items-center text-sm text-dark-text-secondary">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary rounded focus:ring-primary bg-dark-layer-2 border-dark-layer-3 focus:shadow-outline-primary transition duration-150 ease-in-out"
            />
            <span className="ml-2">SQL Database Upgrade</span>
          </label>
          <label className="inline-flex items-center text-sm text-dark-text-secondary">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary rounded focus:ring-primary bg-dark-layer-2 border-dark-layer-3 focus:shadow-outline-primary transition duration-150 ease-in-out"
            />
            <span className="ml-2">SSRS Development</span>
          </label>
          <label className="inline-flex items-center text-sm text-dark-text-secondary">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary rounded focus:ring-primary bg-dark-layer-2 border-dark-layer-3 focus:shadow-outline-primary transition duration-150 ease-in-out"
            />
            <span className="ml-2">Azure SQL Migration</span>
          </label>
          <label className="inline-flex items-center text-sm text-dark-text-secondary">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary rounded focus:ring-primary bg-dark-layer-2 border-dark-layer-3 focus:shadow-outline-primary transition duration-150 ease-in-out"
            />
            <span className="ml-2">ETL & Data warehouse</span>
          </label>
          <label className="inline-flex items-center text-sm text-dark-text-secondary">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary rounded focus:ring-primary bg-dark-layer-2 border-dark-layer-3 focus:shadow-outline-primary transition duration-150 ease-in-out"
            />
            <span className="ml-2">SSIS \ Data Pipeline</span>
          </label>
          <label className="inline-flex items-center text-sm text-dark-text-secondary">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary rounded focus:ring-primary bg-dark-layer-2 border-dark-layer-3 focus:shadow-outline-primary transition duration-150 ease-in-out"
            />
            <span className="ml-2">Consultancy</span>
          </label>
          <label className="inline-flex items-center text-sm text-dark-text-secondary">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary rounded focus:ring-primary bg-dark-layer-2 border-dark-layer-3 focus:shadow-outline-primary transition duration-150 ease-in-out"
            />
            <span className="ml-2">AI Data Integration</span>
          </label>
          <label className="inline-flex items-center text-sm text-dark-text-secondary">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary rounded focus:ring-primary bg-dark-layer-2 border-dark-layer-3 focus:shadow-outline-primary transition duration-150 ease-in-out"
            />
            <span className="ml-2">Database Security Audit</span>
          </label>
          <label className="inline-flex items-center text-sm text-dark-text-secondary">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary rounded focus:ring-primary bg-dark-layer-2 border-dark-layer-3 focus:shadow-outline-primary transition duration-150 ease-in-out"
            />
            <span className="ml-2">Audit High Availability & DR Solution</span>
          </label>
        </div>
        <Buttonnew
          text={
            <p>
              Submit
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </p>
          }
          round="lg"
          hovertext="hover:text-black"
          pxy="px-8 py-3"
          border="border-2"
        />
      </form>
    </div>
  );
};

export default ContactFormServices;
