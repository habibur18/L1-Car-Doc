import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BookService = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, price, _id, img } = service;

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    email: user?.email || "email@example.com",
    img,
    service: title,
    service_id: _id,
    price: price,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {}, [service]);
  const handleBooking = (e) => {
    e.preventDefault();
    // const finalFormData = {
    //   ...formData,
    //   service: title,
    //   price,
    //   service_id: _id,
    // };

    console.log(formData);
    fetch(
      "https://car-doctor-server-hu6xdievy-randomhabibur.vercel.app/bookings",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Service Booked Successfully");
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Book Service: {title}</h2>
      <form onSubmit={handleBooking}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border rounded-md p-2"
            value={formData.name}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-medium">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full border rounded-md p-2"
            value={formData.date}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded-md p-2"
            value={formData.email}
            onChange={handleOnChange}
            disabled
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 font-medium">
            Due Amount
          </label>
          <input
            type="number"
            id="amount"
            name="price"
            className="w-full border rounded-md p-2"
            value={price}
            disabled
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookService;
