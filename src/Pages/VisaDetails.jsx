import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
    const visa = useLoaderData();
    const {countryImage, countryName, visa_type, Processing_time, required_docs, description, age, fee, validity, applicationMethod} = visa;
    return (
        <div className="lg:w-1/2 mx-auto mb-5 lg:border-2 border lg:rounded-md lg:p-12">
            <img className="mb-4 w-full" src={countryImage} alt="country_image" />
            <div>
                <h2 className="text-center mb-2 text-xl lg:text-2xl font-semibold">{countryName}</h2>
                <p><span className="text-xl font-semibold">Visa_type:</span> {visa_type}</p>
                <p><span  className="text-xl font-semibold">Processing_time:</span> {Processing_time}</p>
                <p>{description}</p>
                <p><span  className="text-xl font-semibold">Age_restriction</span>{age}</p>
                <p><span  className="text-xl font-semibold">Fee:</span> {fee}</p>
                <p><span  className="text-xl font-semibold">Application_method:</span> {applicationMethod}</p>
            </div>
        </div>
    );
};

export default VisaDetails;