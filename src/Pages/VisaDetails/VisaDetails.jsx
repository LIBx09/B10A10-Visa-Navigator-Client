import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
  const detailsData = useLoaderData();
  console.log(detailsData);

  return (
    <div>
      <h2>Hello this is Visa Detail page</h2>
    </div>
  );
};

export default VisaDetails;
