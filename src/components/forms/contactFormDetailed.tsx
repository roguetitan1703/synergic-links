import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactFormDetailed = () => {
  return (
    <div className="rounded-xl bg-dark-layer-1/10 p-8 max-w-5xl md:p-12 w-full mx-auto">
      {" "}
      {/* Removed max-w-xl, Updated background */}
      <h2 className="text-3xl font-semibold text-dark-text-primary mb-6 text-center">
        Detailed Inquiry Form
      </h2>
      <p className="text-dark-text-secondary text-center mb-10">
        Provide detailed information for a tailored response.
      </p>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {" "}
          {/* Two inputs in a row for Full Name and Email */}
          <div>
            <label
              htmlFor="fullNameDetailed"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              FULL NAME
            </label>
            <input
              type="text"
              id="fullNameDetailed"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-full bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none"
            />
          </div>
          <div>
            <label
              htmlFor="emailAddressDetailed"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="emailAddressDetailed"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-full bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {" "}
          {/* Two inputs in a row for Phone and Company */}
          <div>
            <label
              htmlFor="phoneNumberDetailed"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              PHONE NUMBER
            </label>
            <input
              type="tel"
              id="phoneNumberDetailed"
              placeholder="Enter your number"
              className="w-full px-4 py-3 rounded-full bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none"
            />
          </div>
          <div>
            <label
              htmlFor="companyNameDetailed"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              COMPANY NAME
            </label>
            <input
              type="text"
              id="companyNameDetailed"
              placeholder="Enter your company name"
              className="w-full px-4 py-3 rounded-full bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {" "}
          {/* Two inputs in a row for Official Email and Country */}
          <div>
            <label
              htmlFor="officialEmailDetailed"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              OFFICIAL EMAIL
            </label>
            <input
              type="email"
              id="officialEmailDetailed"
              placeholder="Enter your Official Email"
              className="w-full px-4 py-3 rounded-full bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none"
            />
          </div>
          <div>
            <label
              htmlFor="countryDetailed"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              SELECT COUNTRY
            </label>
            <select
              id="countryDetailed"
              className="w-full px-4 py-3 rounded-full bg-dark-layer-2 text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary border-none appearance-none"
            >
              <option value="">Select Country</option>
              {/* Add country options here */}
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              {/* ... more options ... */}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1">
          {" "}
          {/* More Details on its own line */}
          <div>
            <label
              htmlFor="moreDetailsDetailed"
              className="block text-sm font-semibold text-dark-text-secondary mb-1 text-left"
            >
              MORE DETAILS
            </label>
            <textarea
              id="moreDetailsDetailed"
              placeholder="More Details"
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

export default ContactFormDetailed;
