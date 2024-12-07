import toast from "react-hot-toast";
/* eslint-disable react/prop-types */
const ApplicationCard = ({info, setApplicantInfo, applicantInfo}) => {
    const { countryImage, countryName, appliedFee, appliedDate, visa_type, processing_time, validity, applicationMethod, firstName, lastName, email, _id } = info;

    const handleDelete = (_id) =>{
        fetch(`https://visa-processing-server-pearl.vercel.app/addApplication/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                toast.success("Removed Successfully");
                const remaining = applicantInfo.filter((application)=> application._id !== _id);
                setApplicantInfo(remaining);
            }
        })
    }

    return (
        <div className="max-w-md bg-white col-span-12 md:col-span-6 lg:col-span-4 shadow-lg rounded-lg overflow-hidden border">
        {/* Country Image and Name */}
        <div className="relative">
            <img
            src={countryImage}
            alt={`${countryName} flag`}
            className="h-48 w-full object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center font-semibold">
            {countryName}
            </div>
        </div>
    
        {/* Visa Details */}
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{visa_type} Visa</h3>
            <ul className="text-sm text-gray-600 space-y-1">
            <li>
                <strong>Processing Time:</strong> {processing_time}
            </li>
            <li>
                <strong>Fee:</strong> ${appliedFee}
            </li>
            <li>
                <strong>Validity:</strong> {validity}
            </li>
            <li>
                <strong>Application Method:</strong> {applicationMethod}
            </li>
            <li>
                <strong>Applied Date:</strong> {appliedDate}
            </li>
            </ul>
        </div>
    
        {/* Applicant Details */}
        <div className="border-t p-4">
            <h4 className="text-lg font-semibold mb-2">Applicant Details</h4>
            <ul className="text-sm text-gray-600 space-y-1">
            <li>
                <strong>Name:</strong> {firstName + " " + lastName}
            </li>
            <li>
                <strong>Email:</strong> {email}
            </li>
            </ul>
        </div>
    
        {/* Cancel Button */}
        <div className="border-t p-4 text-right">
            <button onClick={()=>handleDelete(_id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
            Cancel
            </button>
        </div>
        </div>
    );
    

};

export default ApplicationCard;