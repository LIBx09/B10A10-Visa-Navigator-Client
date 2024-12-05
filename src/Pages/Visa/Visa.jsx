import { useLoaderData } from "react-router-dom";
import AllVisaCard from "./AllVisaCard";

const Visa = () => {
  const allVisa = useLoaderData();

  return (
    <div className="w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {allVisa.map((visaData) => (
          <AllVisaCard key={visaData._id} data={visaData}></AllVisaCard>
        ))}
      </div>
    </div>
  );
};

export default Visa;
