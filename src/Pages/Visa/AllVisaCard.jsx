/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaGlobe, FaCalendarAlt } from "react-icons/fa";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AllVisaCard = ({ data }) => {
  const { _id, country_name, process_time, validity, photo, visaType } = data;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="card bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__fadeInUp "
      data-aos="fade-up"
    >
      {/* Image Section */}
      <img
        src={photo}
        alt={`${country_name} flag`}
        className="w-full h-40 object-cover"
      />

      {/* Card Body */}
      <div className="p-4">
        {/* Country Name */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">{country_name}</h2>

        {/* Visa Type */}
        <p className="text-sm text-gray-600 bg-blue-100 px-3 py-1 rounded-full inline-block mb-3">
          {visaType}
        </p>

        {/* Details */}
        <ul className="space-y-1 text-sm text-gray-700">
          <li className="flex items-center">
            <FaCalendarAlt className="text-blue-500 mr-2" />
            <span className="font-medium">Process Time:</span> {process_time}
          </li>
          <li className="flex items-center">
            <FaGlobe className="text-green-500 mr-2" />
            <span className="font-medium">Validity:</span> {validity}
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-100 text-center">
        <button className="btn btn-outline btn-primary w-full">
          <Link to={`/details/${_id}`}> See Details</Link>
        </button>
      </div>
    </div>
  );
};

export default AllVisaCard;
