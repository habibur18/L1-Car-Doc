import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  const cars = [
    {
      id: 1,
      img: img1,
      title: "Car Service",
      desc: "There are many variations of passages of available, but the majority",
    },
    {
      id: 2,
      img: img2,
      title: "Car Service",
      desc: "There are many variations of passages of available, but the majority",
    },
    {
      id: 3,
      img: img3,
      title: "Car Service",
      desc: "There are many variations of passages of available, but the majority",
    },
    {
      id: 4,
      img: img4,
      title: "Car Service",
      desc: "There are many variations of passages of available, but the majority",
    },
    {
      id: 5,
      img: img5,
      title: "Car Service",
      desc: "There are many variations of passages of available, but the majority",
    },
    {
      id: 6,
      img: img6,
      title: "Car Service",
      desc: "There are many variations of passages of available, but the majority",
    },
  ];

  return (
    <div className=" mx-auto" style={{ maxWidth: "1300px" }}>
      <div className="relative">
        <div
          style={{
            background:
              "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)",
          }}
          className="absolute inset-0 z-30 flex flex-col justify-center md:w-1/2 p-5"
          id="carouselExampleCaptions"
        >
          <h2 className="text-5xl text-white ">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white my-5">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="text-white">
            <button className="bg-[#FF3811] px-5 py-3 mr-5 rounded-lg hover:bg-[#FF3831]">
              Discover More
            </button>
            <button className="px-5 py-3 border-2 rounded-lg hover:bg-gray-200 hover:text-black">
              Latest Project
            </button>
          </div>
        </div>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {cars.map((car) => (
            <div key={car.id}>
              <img src={car.img} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
