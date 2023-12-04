import React, { useEffect } from "react";

const BookingRow = ({ booking, handleConfirm }) => {
  const { name, email, date, service, price, img, status, _id } = booking;
  const handleRemove = () => {
    const proceed = confirm("Are you really want to delete?");
    if (proceed) {
      const uri = `https://car-doctor-server-hu6xdievy-randomhabibur.vercel.app/bookings/${booking._id}`;
      fetch(uri, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("Service Deleted Successfully");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <tr>
      <td onClick={handleRemove} className="text-center text-xl">
        X
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-center gap-1">
          <div className="flex-shrink-0">
            <img className="rounded-md w-32" src={img} alt="User" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm text-gray-900">{service}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm text-gray-900">{date}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm text-gray-900">${price}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {status === "confirm" ? (
          <span className="px-5 py-2 bg-green-500 rounded-lg text-white text-xl">
            Confirm
          </span>
        ) : (
          <div
            onClick={() => handleConfirm(_id)}
            className="text-sm text-gray-900"
          >
            please confirm
          </div>
        )}
      </td>
    </tr>
  );
};

export default BookingRow;
