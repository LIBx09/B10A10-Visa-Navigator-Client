/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import useAuth from "../../Hooks/useAuth";

const UpdateModal = () => {
  //   const [visaType, setVisaType] = useState("");
  //   const [selectedDocuments, setSelectDocuments] = useState([]);
  //   const { user } = useAuth();
  //   const updateMyVisa = useLoaderData();
  //   const {
  //     country_name,
  //     process_time,
  //     description,
  //     age_limit,
  //     fee,
  //     validity,
  //     application_method,
  //     photo,
  //   } = updateMyVisa;

  //   const handleVisaType = (e) => {
  //     setVisaType(e.target.value);
  //   };

  //   const handleCheckbox = (e) => {
  //     const value = e.target.value;
  //     if (e.target.checked) {
  //       setSelectDocuments((prev) => [...prev, value]);
  //     } else {
  //       setSelectDocuments((prev) => prev.filter((doc) => doc !== value));
  //     }
  //   };

  //   const handleUpdateVisa = (e) => {
  //     e.preventDefault();

  //     const form = e.target;
  //     const country_name = form.country_name.value;
  //     const process_time = form.process_time.value;
  //     const description = form.description.value;
  //     const age_limit = form.age_limit.value;
  //     const fee = form.fee.value;
  //     const validity = form.validity.value;
  //     const application_method = form.application_method.value;
  //     const photo = form.photo.value;
  //     const newVisa = {
  //       user_email: user.email,
  //       country_name,
  //       process_time,
  //       description,
  //       age_limit,
  //       fee,
  //       validity,
  //       application_method,
  //       photo,
  //       visaType,
  //       selectedDocuments,
  //     };
  //     console.log(newVisa);

  //     fetch(`http://localhost:5000/visa/${_id}`, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(newVisa),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.insertedId) {
  //           toast.success("Data added to the DB successfully");
  //         }
  //       });
  //   };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn">open modal</button> */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateModal;
