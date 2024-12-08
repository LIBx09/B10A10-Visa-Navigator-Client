/* eslint-disable react/prop-types */
import {
  FaMoneyBillWave,
  FaCalendarAlt,
  FaGlobe,
  FaFileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestVisaCard = ({ visa }) => {
  const {
    _id,
    country_name,
    process_time,
    fee,
    validity,
    application_method,
    photo,
    visaType,
  } = visa;

  return (
    <div className="card glass text-white">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {country_name}
          </h2>
          <img
            src={photo}
            alt={`${country_name} flag`}
            className="w-24 h-16 object-cover rounded-lg border"
          />
        </div>
        <p className="text-sm text-gray-600 bg-blue-100 px-3 py-1 rounded-full inline-block mb-4">
          {visaType}
        </p>
        <ul className="space-y-2">
          <li className="flex items-center">
            <FaCalendarAlt className="text-blue-500 mr-2" />
            <span className="font-medium">Processing Time:</span> {process_time}
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
            <FaFileAlt className="text-teal-500 mr-2" />
            <span className="font-medium">Application Method:</span>{" "}
            {application_method}
          </li>
        </ul>

        <div className="card-actions justify-end">
          <button className="btn btn-ghost">
            <Link to={`/details/${_id}`}>See Details</Link>
          </button>
          <button className="btn btn-ghost">
            <Link to="/visa">See All Visa</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestVisaCard;
