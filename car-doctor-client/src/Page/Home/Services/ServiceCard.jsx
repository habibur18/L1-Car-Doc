import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service;
  return (
    <div className="flex flex-col w-full max-w-sm bg-white  rounded-xl shadow dark:bg-white dark:border-gray-700">
      <a href="#">
        <img className="p-3 rounded-t-lg" src={img} alt="product image" />
      </a>

      <div className="px-3 pb-5">
        <a href="#">
          <h5 className="text-2xl font-semibold tracking-tight text-black ">
            {title}
          </h5>
        </a>
      </div>
      <div className="mt-auto px-3 pb-5">
        <div className="flex items-center justify-between text-orange-600 mt-auto">
          <span className="text-xl font-bold">price: ${price}</span>
          <Link
            to={`/book/${_id}`}
            className="text-white bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-400 dark:focus:ring-yellow-200"
          >
            →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
