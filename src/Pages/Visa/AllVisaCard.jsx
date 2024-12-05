import { Link } from "react-router-dom";

const AllVisaCard = ({ data }) => {
  const {
    _id,
    country_name,
    process_time,
    fee,
    validity,
    application_method,
    photo,
    visaType,
  } = data;

  return (
    <div className="card glass w-96">
      <figure>
        <img src={photo} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/details/${_id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllVisaCard;
