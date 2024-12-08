import { useLoaderData } from "react-router-dom";
import AllVisaCard from "./AllVisaCard";
import { useState, useEffect } from "react";
const Visa = () => {
  const allVisa = useLoaderData(); // Load all visas from the loader
  const [filteredVisas, setFilteredVisas] = useState(allVisa); // State for filtered visas
  const [visaTypes, setVisaTypes] = useState([]); // Unique visa types
  const [selectedType, setSelectedType] = useState("All"); // Selected filter
  // Extract unique visa types
  useEffect(() => {
    const types = ["All", ...new Set(allVisa.map((visa) => visa.visaType))];
    setVisaTypes(types);
  }, [allVisa]);
  // Handle filter change
  const handleFilterChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    if (type === "All") {
      setFilteredVisas(allVisa); // Show all visas
    } else {
      const filtered = allVisa.filter((visa) => visa.visaType === type);
      setFilteredVisas(filtered); // Show filtered visas
    }
  };
  return (
    <div className="w-10/12 mx-auto">
      {/* Dropdown for Filtering */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">All Visas</h1>
        <div>
          <label htmlFor="visaFilter" className="mr-2 font-medium">
            Filter by Visa Type:
          </label>
          <select
            id="visaFilter"
            value={selectedType}
            onChange={handleFilterChange}
            className="border px-3 py-2 rounded"
          >
            {visaTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Display Filtered Visas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredVisas.map((visaData) => (
          <AllVisaCard key={visaData._id} data={visaData}></AllVisaCard>
        ))}
      </div>
    </div>
  );
};
export default Visa;
