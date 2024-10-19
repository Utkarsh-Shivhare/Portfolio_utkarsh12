import React from "react";
const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen " id="contact">
      <form className="w-full max-w-md bg-gray-900 shadow-md rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-6 text-center primary-color ">Contact Us</h2>

        <div className="mb-4 ">
          <label
            className="block  text-white text-sm font-bold mb-2 "
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full px-3 py-2 bg-gray-900 border rounded-lg text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 border rounded-lg bg-gray-900 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Your Message"
            className="w-full px-3 py-2 border rounded-lg bg-gray-900 text-gray-700 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className=" w-full bg-gradient-to-tr from-blue-900
                     to-[#67e8f9] text-2xl text-white font-bold py-4 px-4 
            rounded-lg focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
