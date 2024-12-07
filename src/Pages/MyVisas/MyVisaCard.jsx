/* eslint-disable react/prop-types */
import {
  FaMoneyBillWave,
  FaCalendarAlt,
  FaGlobe,
  FaFileAlt,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Slide } from "react-awesome-reveal";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import celebrate from "../../assets/icons8-celebrate-48.png";
import UpdateModal from "../../components/UpdateModal/UpdateModal";

const MyVisaCard = ({ visa, onDelete }) => {
  const {
    _id,
    country_name,
    process_time,
    fee,
    validity,
    application_method,
    photo,
    visaType,
    user_email,
  } = visa;

  const handleUpdate = (_id) => {
    document.getElementById(_id).showModal();
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="card glass shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            <Typewriter
              words={[country_name, "Dream Visa"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={70}
            />
          </h2>
          <img
            src={photo}
            alt={`${country_name} flag`}
            className="w-24 h-16 object-cover rounded-lg border-2 border-gray-300"
            data-aos="flip-up"
          />
        </div>
        <p className="text-sm text-gray-600 bg-blue-100 px-3 py-1 rounded-full inline-block mb-4">
          <marquee>
            <div className="flex gap-1 items-center">
              <img src={celebrate} alt="img" className="w-8 h-8" />
              {visaType}
              <img src={celebrate} alt="img" className="w-8 h-8" />
              {user_email}
            </div>
          </marquee>
        </p>
        <ul className="space-y-3">
          <Slide direction="left" triggerOnce>
            <li className="flex items-center">
              <FaCalendarAlt className="text-blue-500 mr-2" />
              <span className="font-medium">Processing Time:</span>{" "}
              {process_time}
            </li>
          </Slide>
          <Slide direction="right" triggerOnce>
            <li className="flex items-center">
              <FaGlobe className="text-green-500 mr-2" />
              <span className="font-medium">Validity:</span> {validity}
            </li>
          </Slide>
          <Slide direction="up" triggerOnce>
            <li className="flex items-center">
              <FaMoneyBillWave className="text-yellow-500 mr-2" />
              <span className="font-medium">Fee:</span> {fee}
            </li>
          </Slide>
          <Slide direction="down" triggerOnce>
            <li className="flex items-center">
              <FaFileAlt className="text-teal-500 mr-2" />
              <span className="font-medium">Application Method:</span>{" "}
              {application_method}
            </li>
          </Slide>
        </ul>

        <div className="card-actions justify-end mt-4">
          <Fade delay={500} triggerOnce>
            <button
              onClick={() => handleUpdate(_id)}
              className="border px-6 py-2 rounded-3xl shadow-md hover:bg-blue-700"
            >
              Update
              {/* <Link to={`/update/${_id}`}>Update</Link> */}
            </button>
          </Fade>
          <Fade delay={500} triggerOnce>
            <button
              onClick={() => onDelete(_id)}
              className="border px-6 py-2 rounded-3xl shadow-md hover:bg-gray-700"
            >
              Delete
            </button>
          </Fade>
        </div>
        <UpdateModal _id={_id} />
      </div>
    </div>
  );
};

export default MyVisaCard;
