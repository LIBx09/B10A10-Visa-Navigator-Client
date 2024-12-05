import LatestVisaCard from "./LatestVisaCard";

/* eslint-disable react/prop-types */
const LatestVisa = ({ visas }) => {
  //   console.log("visas", visas);

  return (
    <div>
      <h2>HI This Is Latest visa sections</h2>
      <div>
        {visas.map((visa) => (
          <LatestVisaCard key={visa._id} visa={visa}></LatestVisaCard>
        ))}
      </div>
    </div>
  );
};

export default LatestVisa;
