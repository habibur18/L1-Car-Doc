import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  const url = `https://car-doctor-server-hu6xdievy-randomhabibur.vercel.app/bookings?email=${user?.email}`;

  const loadData = async () => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    loadData();

    const interval = setInterval(() => {
      loadData();
    }, 5000);

    return () => clearInterval(interval);
  }, [url, user]);

  const handleConfirm = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(
        `https://car-doctor-server-hu6xdievy-randomhabibur.vercel.app/bookings/${id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            status: "confirm",
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Update successful");
            loadData();
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-5xl">Your Bookings: {bookings.length}</h2>
      <div className="mt-4">
        <table className="min-w-full">
          <thead>{/* Table header content */}</thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.isArray(bookings) ? (
              bookings.map((booking) => (
                <BookingRow
                  handleConfirm={handleConfirm}
                  key={booking._id}
                  booking={booking}
                />
              ))
            ) : (
              <p>Loading......</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
