import { useLoaderData } from "react-router-dom";
import MyVisaCard from "./MyVisaCard";

const MyVisas = () => {
  const myVisa = useLoaderData();
  console.log(myVisa);

  const filteredVisas = myVisa.filter((visa) => visa.user_email);
  console.log(filteredVisas);

  return (
    <div className="w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredVisas.map((visa) => (
          <MyVisaCard key={visa._id} visa={visa}></MyVisaCard>
        ))}
      </div>
    </div>
  );
};

export default MyVisas;
