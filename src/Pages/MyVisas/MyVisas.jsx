/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import MyVisaCard from "./MyVisaCard";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";

const MyVisas = () => {
  const myVisa = useLoaderData();
  const { user } = useAuth();
  const [filteredVisas, setFilteredVisas] = useState(
    myVisa.filter((visa) => visa.user_email === user.email)
  );

  const handleDelete = (_id) => {
    console.log("Deleting ID:", _id);
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
        fetch(`http://localhost:5000/visa/${_id}`, {
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
            const remainingVisas = filteredVisas.filter(
              (visa) => visa._id.toString() !== _id.toString()
            );
            setFilteredVisas(remainingVisas);
          });
      }
    });
  };

  return (
    <div className="w-10/12 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredVisas.map((visa) => (
          <MyVisaCard
            key={visa._id}
            visa={visa}
            onDelete={handleDelete}
          ></MyVisaCard>
        ))}
      </div>
    </div>
  );
};

export default MyVisas;
