/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  FaMoneyBillWave,
  FaCalendarAlt,
  FaGlobe,
  FaFileAlt,
} from "react-icons/fa";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const AppliedVisaCard = ({ appliedVisa, appliedVisas, setAppliedUsers }) => {
  const {
    _id,
    country_name,
    process_time,
    description,
    age_limit,
    fee,
    validity,
    application_method,
    photo,
    visaType,
    selectedDocuments,
    first_Name,
    last_Name,
    email,
  } = appliedVisa;
  console.log(appliedVisa);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-navigator-server-dun.vercel.app/applied/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaining = appliedVisas.filter((visa) => visa._id !== _id);
            setAppliedUsers(remaining);
          });
      }
    });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="card w-8/12 mx-auto bg-white shadow-xl rounded-lg overflow-hidden animate__animated animate__fadeInUp"
      data-aos="fade-up"
    >
      <div className="p-6">
        <div className="flex justify-between ">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {country_name}
          </h2>
          <img
            src={photo}
            alt={`${country_name} flag`}
            className="w-24 h-16 object-cover rounded-lg"
          />
        </div>

        <p className="text-sm text-gray-600 bg-blue-100 px-3 py-1 rounded-full inline-block mb-4">
          {visaType}
        </p>

        <p className="text-gray-700 text-sm mb-4">{description}</p>

        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaCalendarAlt className="text-blue-500 mr-2" />
                <span className="font-medium">Processing Time:</span>{" "}
                {process_time}
              </li>

              <li className="flex items-center">
                <FaGlobe className="text-green-500 mr-2" />
                <span className="font-medium">Validity:</span> {validity}
              </li>

              <li className="flex items-center">
                <FaMoneyBillWave className="text-yellow-500 mr-2" />
                <span className="font-medium">Fee:</span> {fee}
              </li>

              <li className="flex items-center">
                <FaFileAlt className="text-purple-500 mr-2" />
                <span className="font-medium">Age Restriction:</span>{" "}
                {age_limit}+
              </li>

              <li className="flex items-center">
                <FaFileAlt className="text-teal-500 mr-2" />
                <span className="font-medium">Application Method:</span>{" "}
                {application_method}
              </li>
            </ul>
          </div>
          <div className="border-2 p-2 rounded-lg">
            <h3 className="text-lg md:text-2xl  text text-neutral-500">
              User Information
            </h3>
            <h2 className="text-sm md:text-xl  font-semibold text-black">
              {first_Name + " " + last_Name}
            </h2>
            <h2 className="text-sm md:text-xl font-semibold text-black w">
              {email}
            </h2>
          </div>
        </div>

        {/* Selected Documents */}
        {selectedDocuments && selectedDocuments.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Required Documents:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {selectedDocuments.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="card-footer bg-gray-100 p-4 text-center">
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-primary w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AppliedVisaCard;
