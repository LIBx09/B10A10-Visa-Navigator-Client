import LatestVisaCard from "./LatestVisaCard";

/* eslint-disable react/prop-types */
const LatestVisa = ({ visas }) => {
  //   console.log("visas", visas);

  return (
    <div className=" bg-red-400 rounded-lg p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto">
        {visas.map((visa) => (
          <LatestVisaCard key={visa._id} visa={visa}></LatestVisaCard>
        ))}
      </div>
    </div>
  );
};

export default LatestVisa;
