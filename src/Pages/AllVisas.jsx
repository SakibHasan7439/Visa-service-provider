import { useLoaderData } from "react-router-dom";
import AllVisaCard from "../Components/AllVisaCard";
import { useEffect, useState } from "react";

const AllVisas = () => {
  const loadedVisas = useLoaderData();
  const [selectedVisa, setSelectedVisa] = useState("");
  const [visas, setVisas] = useState([]);
  const handleChange = (e) =>{
    setSelectedVisa(e.target.value);
  }

  useEffect(()=>{
    fetch(`https://visa-processing-server-pearl.vercel.app/visaType?visa_type=${selectedVisa}`)
    .then(res => res.json())
    .then(data =>{
        setVisas(data);
    })
  }, [selectedVisa]);

  return (
    <div className="max-w-7xl w-full mx-auto">
      <select name="visa_type" onChange={handleChange} id="" className="text-right border-2 border-black rounded-md">
        <option value="student_visa">Student Visa</option>
        <option value="family_visa">Family Visa</option>
        <option value="business_visa">Business Visa</option>
      </select>
      <div className="grid mb-8 mt-6 lg:mt-12 grid-cols-12 gap-4">
        {
        selectedVisa ? visas.map((visa) => (
            <AllVisaCard key={visa._id} visa={visa}></AllVisaCard>
          )) : 
        loadedVisas.map((visa) => (
          <AllVisaCard key={visa._id} visa={visa}></AllVisaCard>
        ))
        }
      </div>
    </div>
  );
};

export default AllVisas;
