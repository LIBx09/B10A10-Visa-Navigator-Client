import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

/* eslint-disable no-unused-vars */
const AddVisa = () => {
  const [visaType, setVisaType] = useState("");
  const [selectedDocuments, setSelectDocuments] = useState([]);
  const { user } = useAuth();

  const handleVisaType = (e) => {
    setVisaType(e.target.value);
  };

  const handleCheckbox = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectDocuments((prev) => [...prev, value]);
    } else {
      setSelectDocuments((prev) => prev.filter((doc) => doc !== value));
    }
  };

  const handleAddVisa = (e) => {
    e.preventDefault();

    const form = e.target;
    const country_name = form.country_name.value;
    const process_time = form.process_time.value;
    const description = form.description.value;
    const age_limit = form.age_limit.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const application_method = form.application_method.value;
    const photo = form.photo.value;
    const newVisa = {
      user_email: user.email,
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
    };

    //send data to the server

    fetch("http://localhost:5000/visa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Data added to the DB successfully");
        }
      });
  };
  // country_name       photo
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-3xl font-bold">Add Visas</h1>
      <form onSubmit={handleAddVisa}>
        <div className="md:flex gap-5">
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="country_name"
                placeholder="Country Name"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Process Time</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="process_time"
                placeholder="Process Time"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>
        <div className=" md:flex gap-5">
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Age Limit.</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="age_limit"
                placeholder="Age Limit"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>
        <div className="md:flex gap-5">
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Fee</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="fee"
                placeholder="Fee"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Validity</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="validity"
                placeholder="Validity"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>
        <div className="form-control mb-7">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <div className="join">
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className=" md:flex gap-5 ">
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Application Method.</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="application_method"
                placeholder="Application Method.
"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mb-5 md:w-1/2">
            <label className="label">
              <span className="label-text">Visa Type</span>
            </label>
            <select
              name="visa_type"
              className="select select-bordered w-full"
              value={visaType}
              onChange={handleVisaType}
            >
              <option disabled selected>
                Select Visa Type
              </option>
              <option value="Tourist visa">Tourist visa</option>
              <option value="Student visa">Student visa</option>
              <option value="Work Visa">Work Visa</option>
              <option value="Business Visa">Business Visa</option>
              <option value="Visitor Visa">Visitor Visa</option>
              <option value="Medical Visa">Medical Visa</option>
            </select>
          </div>
        </div>
        <div className="form-control mb-7">
          <label className="label">
            <span className="label-text">Required Document</span>
          </label>
          <div className="join">
            <div className="ml-1">
              <label>
                <input
                  type="checkbox"
                  value="Valid passport"
                  onChange={handleCheckbox}
                />
                Valid passport
              </label>
            </div>
            <div className="ml-10">
              <label>
                <input
                  type="checkbox"
                  value="Visa application form"
                  onChange={handleCheckbox}
                />
                Visa application form
              </label>
            </div>
            <div className="ml-10">
              <label>
                <input
                  type="checkbox"
                  value="Recent passport-sized photograph"
                  onChange={handleCheckbox}
                />
                Recent passport-sized photograph
              </label>
            </div>
            <div className="ml-10">
              <label>
                <input
                  type="checkbox"
                  value="Nationality"
                  onChange={handleCheckbox}
                />
                Nationality
              </label>
            </div>
          </div>
        </div>
        <input type="submit" value="Add Visa" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddVisa;
