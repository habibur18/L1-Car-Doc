import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-semibold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* Embed the map here */}
            <iframe
              title="Car Store Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11119.614716318553!2d-79.38427070231792!3d43.65322596336659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d120123ce9%3A0x2162e71a39482e66!2sCar%20Store%20Location!5e0!3m2!1sen!2sca!4v1654712345678"
              className="w-full md:h-[70vh] lg:h-[80vh]"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700">
                Address: 1234 Car Street, City, Province, Postal Code
              </p>
              <p className="text-gray-700 mt-2">Phone: (123) 456-7890</p>
              <p className="text-gray-700 mt-2">Email: info@carstore.com</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
              <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="text-gray-700 block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="text-gray-700 block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="text-gray-700 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
