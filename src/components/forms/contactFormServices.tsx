import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactFormServices = () => {
  return (
    <div className="rounded-xl bg-dark-layer-1/10 p-8 max-w-5xl md:p-12 w-full mx-auto">
      {" "}
      {/* Removed max-w-xl, Updated background */}
      <h2 className="text-3xl font-semibold text-dark-text-primary mb-6 text-center">
        Inquire About Services
      </h2>
      <p className="text-dark-text-secondary text-center mb-10">
        Let us know your needs.
      </p>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {" "}
          {/* Two inputs in a row for Full Name and Email */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              FULL NAME
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-full bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none"
            />
          </div>
          <div>
            <label
              htmlFor="emailAddress"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="emailAddress"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-full bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {" "}
          {/* Two inputs in a row for Company and Phone */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              COMPANY NAME
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Enter your company name"
              className="w-full px-4 py-3 rounded-full bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              PHONE NUMBER
            </label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter your number"
              className="w-full px-4 py-3 rounded-full bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1">
          {" "}
          {/* Company Address on its own line */}
          <div>
            <label
              htmlFor="companyAddress"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              COMPANY ADDRESS
            </label>
            <textarea
              id="companyAddress"
              placeholder="Company Address"
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none resize-none"
            ></textarea>
          </div>
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
        <div className="grid grid-cols-1 md:grid-cols-1">
          {" "}
          {/* Message on its own line */}
          <div>
            <label
              htmlFor="messageServices"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              MESSAGE
            </label>
            <textarea
              id="messageServices"
              placeholder="Type Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none resize-none"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary-light text-dark-text-primary font-semibold py-3 px-10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 shadow-md hover:shadow-lg block mx-auto flex items-center justify-center"
        >
          Submit <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default ContactFormServices;
