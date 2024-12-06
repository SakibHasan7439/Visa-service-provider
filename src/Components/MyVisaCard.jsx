/* eslint-disable react/prop-types */
const MyVisaCard = ({ myVisa }) => {
  const {CountryName, countryImage, visa_type, Processing_time, fee, validity, application_method} = myVisa;

  return (

     <div className="card card-compact bg-base-100 col-span-12 md:col-span-6 lg:col-span-4 shadow-xl">
       <figure>
         <img className="h-[237px]"
           src={countryImage}
           alt={`${CountryName} flag`}
         />
       </figure>
       <div className="card-body">
         <h2 className="card-title justify-center">CountryName</h2>
         <ul className="space-y-1 text-sm text-gray-600">
             <li><strong>Visa_type: </strong>{visa_type}</li>
             <li><strong>Processing_time: </strong>{Processing_time}</li>
             <li><strong>Fee: </strong>${fee}</li>
             <li><strong>Validity: </strong>{validity}</li>
             <li><strong>Application_method: </strong>{application_method}</li>
         </ul>
         <div className="card-actions justify-end">
           <button className="btn btn-primary">Buy Now</button>
         </div>
       </div>
     </div>

  );
};

export default MyVisaCard;
