import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    fetch(
      `https://car-doctor-server-roanm6ik0-randomhabibur.vercel.app/services?search=${search}&sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, [asc, search]);
  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };
  return (
    <div id="services" className="max-w-[1300px] mx-auto p-2">
      <div className="text-center">
        <h3 className="text-lg text-orange-600">Service</h3>
        <h2 className="text-3xl font-bold">Our Services Area</h2>
        <div className="flex items-center rounded-lg">
          <input
            ref={searchRef}
            type="text"
            className="px-4 py-2 w-full rounded-lg border-4 border-blue-400 outline-none"
            placeholder="Search..."
          />
          <button
            onClick={handleSearch}
            className="-ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-[0.80rem] px-4 rounded-tr-lg rounded-br-lg"
          >
            Search
          </button>
        </div>
        <button
          className="text-white font-semibold bg-blue-600 py-3 px-5 rounded-md border-b-2 mt-5"
          onClick={() => setAsc(!asc)}
        >
          {asc
            ? "Ascending: Price Low to High"
            : "Descending: Price High to Low"}
        </button>
        <span className="block">
          Total {search} of {services.length}
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
