import React from "react";
import person1 from "../../../assets/images/about_us/parts.jpg";
import person2 from "../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div
      style={{ maxWidth: "1300px" }}
      className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 py-6 my-10 lg:py-8 p-4 md:p-0"
    >
      <div className="relative">
        <img
          className="absolute top-0 left-0 w-10/12 md:w-10/12 lg:w-9/12 rounded-lg"
          src={person2}
          alt=""
        />
        <img
          className="absolute md:top-24 md:left-28 top-36 left-40 w-7/12 md:w-8/12 lg:w-7/12 lg:top-36 lg:left-36 shadow-2xl p-2 bg-white rounded-lg"
          src={person1}
          alt=""
        />
      </div>
      <div className="mt-96 py-5 md:mt-0 space-y-4">
        <h1 className="text-2xl text-orange-500 font-semibold">About Us</h1>
        <h2 className="text-4xl font-bold">
          We are qualified & of experience in this field
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <button className="bg-[#FF3811] text-white px-5 py-3 mr-5 rounded-lg hover:bg-[#FF3831]">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
