/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import AppliedVisaCard from "./AppliedVisaCard";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";

const AppliedVisa = () => {
  const loadAppliedVisa = useLoaderData();
  const { user } = useAuth();
  const [appliedVisas, setAppliedUsers] = useState(loadAppliedVisa);

  const [search, setSearch] = useState("");

  const filteredApplyVisa = appliedVisas.filter(
    (visa) => visa.email === user.email
  );

  useEffect(() => {
    fetch(`http://localhost:5000/applied?searchCountry=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setAppliedUsers(data);
      });
  }, [search]);
  return (
    <div>
      <div className="flex justify-center p-10">
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            className="grow"
            placeholder="Search Country Name"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div>
        {filteredApplyVisa.map((applyVisa) => (
          <AppliedVisaCard
            key={applyVisa._id}
            appliedVisa={applyVisa}
            appliedVisas={appliedVisas}
            setAppliedUsers={setAppliedUsers}
          ></AppliedVisaCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedVisa;
