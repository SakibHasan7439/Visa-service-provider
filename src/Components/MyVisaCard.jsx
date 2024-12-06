import { MdDelete } from "react-icons/md";
import { FaPenClip } from "react-icons/fa6";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const MyVisaCard = ({ myVisa, setMyVisas, myVisas }) => {
  const {countryName, countryImage, visa_type, Processing_time, fee, validity, application_method, _id} = myVisa;

  const handleDelete = (_id) =>{
    fetch(`https://visa-processing-server-pearl.vercel.app/deleteUserVisa/${_id}`, {
        method:"DELETE"
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            toast.success("deleted successfully");
            const remainingVisas = myVisas.filter((visa)=> visa._id !== _id);
            setMyVisas(remainingVisas);
        }
    })
  }

  return (

     <div className="card rounded-md card-compact bg-base-100 col-span-12 md:col-span-6 lg:col-span-4 border py-4">
       <figure className="px-4">
         <img className="h-[237px] w-full rounded-md object-cover"
           src={countryImage}
           alt={`${countryName} flag`}
         />
       </figure>
       <div className="card-body">
         <h2 className="card-title justify-center">{countryName}</h2>
         <ul className="space-y-1 text-sm text-gray-600">
             <li><strong>Visa_type: </strong>{visa_type}</li>
             <li><strong>Processing_time: </strong>{Processing_time}</li>
             <li><strong>Fee: </strong>${fee}</li>
             <li><strong>Validity: </strong>{validity}</li>
             <li><strong>Application_method: </strong>{application_method}</li>
         </ul>
         <div className="card-actions justify-end">
           <button onClick={()=>handleDelete(_id)} className="px-2 btn-sm text-xl rounded-md bg-red-500 text-white font-semibold hover:bg-red-600"><MdDelete></MdDelete></button>
           <button className="px-2 btn-sm text-xl rounded-md bg-red-500 text-white font-semibold hover:bg-red-600"><FaPenClip></FaPenClip></button>
         </div>
       </div>
     </div>

  );
};

export default MyVisaCard;
