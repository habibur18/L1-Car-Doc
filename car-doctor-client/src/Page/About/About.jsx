import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-semibold text-center mb-8">
          About Our Car Services Company
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Car Services"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700">
              Welcome to our trusted car services company. We are committed to
              providing high-quality services to keep your vehicle running
              smoothly and safely. Our team of skilled professionals is here to
              take care of all your car maintenance and repair needs.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              With years of experience in the automotive industry, we are
              dedicated to ensuring the satisfaction of our customers. We offer
              a wide range of services, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-6">
              <li>Oil Changes</li>
              <li>Brake Repair</li>
              <li>Engine Diagnostics</li>
              <li>Tire Rotation and Alignment</li>
              <li>Car Detailing</li>
            </ul>
            <p className="text-lg text-gray-700 mt-4">
              We take pride in delivering reliable and efficient car services to
              help you maintain the longevity and performance of your vehicle.
              Our team is committed to the highest standards of quality and
              customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
