import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
const AllVisaCard = ({ visa }) => {
  const {countryImage, countryName, visa_type, Processing_time, fee, _id} = visa;
  return (
    <div className="card rounded-md bg-base-100 col-span-12 md:col-span-6 lg:col-span-3 shadow-xl">
      <figure>
        <img className="w-full h-[205px]"
          src={countryImage}
          alt="country image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{countryName}</h2>
        <div className="flex justify-between">
            <div>
                <p>Visa Type: </p>
                <p>{visa_type}</p>
            </div>
            <div>
                <p>Processing Time: </p>
                <p>{Processing_time}</p>
                <p>Fee: ${fee}</p>
            </div>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/allVisas/${_id}`} className="btn bg-red-500 text-white">Show Details</Link>
        </div>
      </div>
    </div>
  );
};

export default AllVisaCard;
