/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import AppliedVisaCard from "./AppliedVisaCard";
import useAuth from "../../Hooks/useAuth";

const AppliedVisa = () => {
  const appliedVisa = useLoaderData();
  const { user } = useAuth();
  //   console.log("user email", user.email);
  //   console.log("database email", appliedVisa[0].email);
  const filteredApplyVisa = appliedVisa.filter(
    (visa) => visa.email === user.email
  );
  return (
    <div>
      <h2>Hello this is applied visa page</h2>
      <div>
        {filteredApplyVisa.map((applyVisa) => (
          <AppliedVisaCard
            key={applyVisa._id}
            appliedVisa={applyVisa}
          ></AppliedVisaCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedVisa;
