import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, price } = service;
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};

export default Checkout;
