import { useLoaderData } from "react-router-dom";
import AllVisaCard from "./AllVisaCard";

const Visa = () => {
  const allVisa = useLoaderData();

  return (
    <div>
      <div>
        {allVisa.map((visaData) => (
          <AllVisaCard key={visaData._id} data={visaData}></AllVisaCard>
        ))}
      </div>
    </div>
  );
};

export default Visa;
