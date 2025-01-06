import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
// import LatestVisaCard from "../Components/LatestVisaCard";
import ClientSay from "../Components/ClientSay";
import CompanyBackground from "../Components/CompanyBackground";
import Toggle from "../Components/Toggle";
import LatestVisas from "../smallComponents/LatestVisas/LatestVisas";

const Home = () => {
  const latestVisas = useLoaderData();

  return (
    
    <div>
      <Toggle></Toggle>
      <Banner></Banner>
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="md:text-2x font-playfair text-center lg:text-4xl mb-6 lg:mb-8">
          Latest Visa Cards
        </h2>
        <LatestVisas latestVisaInfo={latestVisas}></LatestVisas>
        <div className="flex justify-center mb-12">
            <Link to={"/allVisas"} className="bg-red-500 hover:text-white px-4 py-2 rounded-md text-white">See all visas</Link>
        </div>
        <div>
            <CompanyBackground></CompanyBackground>
            <h2 className="md:text-2x font-playfair text-center lg:text-4xl mb-6 lg:mb-8">What Our Client Say About Us</h2>
            <ClientSay></ClientSay>
        </div>
      </div>
    </div>
  );
};

export default Home;
