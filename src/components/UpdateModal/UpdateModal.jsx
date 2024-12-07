/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const UpdateModal = ({ _id }) => {
  const forUpdateVisa = useLoaderData();
  const [visaType, setVisaType] = useState("");
  const [selectedDocuments, setSelectDocuments] = useState([]);
  const { user } = useAuth();

  const {
    country_name,
    process_time,
    description,
    age_limit,
    fee,
    validity,
    application_method,
    photo,
  } = forUpdateVisa;
  console.log(forUpdateVisa);

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

  const handleUpdateVisa = (e) => {
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
    const updateVisa = {
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
    console.log(updateVisa);

    //send data to the server

    fetch(`http://localhost:5000/visa/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tourist Spot Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        const modal = document.getElementById(_id);
        if (modal) {
          modal.close();
        }
      });
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn">open modal</button> */}
      <dialog id={_id} className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box">
          <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-bold">Add Visas</h1>
            <form onSubmit={handleUpdateVisa}>
              <div className="md:flex gap-5 ">
                <div className="form-control mb-5 ">
                  <label className="label">
                    <span className="label-text">Country Name</span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      name="country_name"
                      defaultValue={country_name}
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
                <div className="form-control mb-5 ">
                  <label className="label">
                    <span className="label-text">Process Time</span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      name="process_time"
                      defaultValue={process_time}
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
                      defaultValue={description}
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
                      defaultValue={age_limit}
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
                      defaultValue={fee}
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
                      defaultValue={validity}
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
                    defaultValue={photo}
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
                      defaultValue={application_method}
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
                <div className="form-control mb-5 md:w-1/2">
                  <label className="label">
                    <span className="label-text">
                      Visa <br /> Type
                    </span>
                  </label>
                  <select
                    name="visa_type"
                    className="select select-bordered w-full"
                    value={visaType}
                    onChange={handleVisaType}
                  >
                    <option disabled selected>
                      Visa Type
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
              <div className="">
                <div className="form-control mb-7">
                  <label className="label">
                    <span className="label-text">Required Document</span>
                  </label>
                  <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 ">
                    <div className="ml-2 mb-4">
                      <label>
                        <input
                          type="checkbox"
                          value="Valid passport"
                          onChange={handleCheckbox}
                        />
                        Valid passport
                      </label>
                    </div>
                    <div className="mb-4">
                      <label>
                        <input
                          type="checkbox"
                          value="Visa application form"
                          onChange={handleCheckbox}
                        />
                        Visa application form
                      </label>
                    </div>
                    <div className="ml-2">
                      <label>
                        <input
                          type="checkbox"
                          value="Recent passport-sized photograph"
                          onChange={handleCheckbox}
                        />
                        Recent passport-sized photograph
                      </label>
                    </div>
                    <div className="">
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
              </div>
              <input type="submit" value="Update" className="btn btn-block" />
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateModal;
