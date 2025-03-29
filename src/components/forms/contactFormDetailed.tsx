import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Buttonnew } from "..";
const ContactFormDetailed = () => {
  return (
    <div className="rounded-2xl bg-secondary p-12 max-w-4xl w-full mx-auto shadow-lg">
      <h2 className="text-4xl font-bold text-accent mb-6 text-center">
        Detailed Inquiry Form
      </h2>
      <p className="text-white mb-8 text-center">
        Provide detailed information for a tailored response.
      </p>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-white mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="w-full px-5 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your number"
              className="w-full px-5 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-white mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              placeholder="Enter your company name"
              className="w-full px-5 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="officialEmail"
              className="block text-sm font-medium text-white mb-2"
            >
              Official Email
            </label>
            <input
              type="email"
              id="officialEmail"
              placeholder="Enter your official email"
              className="w-full px-5 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-white mb-2"
            >
              Select Country
            </label>
            <select
              id="country"
              className="w-full px-5 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600 appearance-none"
            >
              <option value="">Select Country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="moreDetails"
            className="block text-sm font-medium text-white mb-2"
          >
            More Details
          </label>
          <textarea
            id="moreDetails"
            placeholder="Provide more details"
            rows="5"
            className="w-full px-5 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600 resize-none"
          ></textarea>
        </div>
        <Buttonnew
          text={
            <p>
              Send Inquiry Now
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

export default ContactFormDetailed;
