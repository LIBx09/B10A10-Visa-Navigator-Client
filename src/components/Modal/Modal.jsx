/* eslint-disable react/prop-types */
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const Modal = ({ data }) => {
  const { user } = useAuth();
  //   console.log(user.email);

  const [startDate, setStartDate] = useState(new Date());

  const handleAppliedForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const first_Name = form.first_Name.value;
    const last_Name = form.last_Name.value;
    const email = form.email.value;
    const visa_fee = form.visa_fee.value;
    const apply_date = form.apply_date.value;
    // console.log(first_Name, last_Name, email, visa_fee, apply_date);

    const applicationData = {
      visa_Id: data._id,
      first_Name,
      last_Name,
      email,
      visa_fee,
      apply_date,
    };

    console.log("Sending Data:", applicationData);
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn">open modal</button> */}
      <dialog id="my_modal_1" className="modal ">
        <div onSubmit={handleAppliedForm} className="modal-box  min-w-max ">
          <form className="card-body">
            <div className="flex gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="first name"
                  name="first_Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="last name"
                  name="last_Name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user.email}
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Visa Fee</span>
                </label>
                <input
                  type="text"
                  defaultValue={data?.fee?.replace("$", "")}
                  name="visa_fee"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <div>
                  <DatePicker
                    selected={startDate}
                    name="apply_date"
                    onChange={(date) => setStartDate(date)}
                    className="border rounded-lg py-2.5 px-4"
                  />
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                <Link to={`/details/${data?._id}`}>Apply</Link>
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
