import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Buttonnew } from "..";
const ContactFormBasic = () => {
  return (
    <div className="rounded-2xl bg-secondary p-12 max-w-4xl w-full mx-auto shadow-lg">
      <h2 className="text-4xl font-bold text-accent mb-6 text-center">
        Leave a Message
      </h2>
      <p className="text-white mb-8 text-center">We're Ready To Help You</p>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-white mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Satoshi"
              className="w-full px-5 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-white mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Nakamoto"
              className="w-full px-5 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="satoshi@nakamoto.com"
            className="w-full px-5 py-3 rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message us"
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

export default ContactFormBasic;
