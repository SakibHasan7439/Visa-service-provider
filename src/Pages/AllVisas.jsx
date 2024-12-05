import { useLoaderData } from "react-router-dom";
import AllVisaCard from "../Components/AllVisaCard";

const AllVisas = () => {
    const loadedVisas = useLoaderData();
    return (
        <div className="grid mb-8 mt-6 lg:mt-12 grid-cols-12 max-w-7xl w-full mx-auto gap-4">
            {
                loadedVisas.map((visa)=> <AllVisaCard 
                    key={visa._id}
                    visa={visa}>
                    </AllVisaCard>)
            }
        </div>
    );
};

export default AllVisas;