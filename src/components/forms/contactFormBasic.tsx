import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactFormBasic = () => {
  return (
    <div className="rounded-xl bg-dark-layer-1/10 p-8 max-w-5xl md:p-12 w-full mx-auto">
      {" "}
      {/* Removed max-w-xl, Updated background */}
      <h2 className="text-3xl font-semibold text-dark-text-primary mb-6 text-center">
        Leave a Message
      </h2>
      <p className="text-dark-text-secondary text-center mb-10">
        We're Ready To Help You
      </p>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {" "}
          {/* Two inputs in a row for name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              FIRST NAME
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Satoshi"
              className="w-full px-4 py-3 rounded-full bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              LAST NAME
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Nakamoto"
              className="w-full px-4 py-3 rounded-full bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1">
          {" "}
          {/* Email on its own line */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="satoshi@nakamoto.com"
              className="w-full px-4 py-3 rounded-full bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1">
          {" "}
          {/* Message on its own line */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              placeholder="Message us"
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

export default ContactFormBasic;
