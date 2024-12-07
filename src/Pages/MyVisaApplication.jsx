import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ApplicationCard from "../Components/ApplicationCard";

const MyVisaApplication = () => {
    const { user } = useContext(AuthContext);
    const [applicantInfo, setApplicantInfo] = useState([]);
    const [countryName, setCountryName] = useState("");

    const handleChange = (e) =>{
        setCountryName(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch(`https://visa-processing-server-pearl.vercel.app/searchApplication?countryName=${countryName}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setApplicantInfo([data]);
        })
    }

    useEffect(()=>{
        fetch(`https://visa-processing-server-pearl.vercel.app/addApplications?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data =>{
        setApplicantInfo(data);
    });
    }, []);

    return (
        <div className="max-w-7xl w-full mx-auto mt-6 lg:mt-10">
            <h2 className="text-center text-2xl md:text-4xl font-bold mb-6 lg:mb-8">User Application Cards</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex md:w-1/2 mx-auto gap-2 mb-8">
                    <input type="text" onChange={handleChange} placeholder="Search by Country name" name="countryName" id="" />
                    <input type="submit" value="Search" className="bg-red-500 px-5 py-2 rounded-md text-white font-semibold w-24 cursor-pointer hover:bg-red-600" />
                </div>
            </form>
            <div className="grid grid-cols-12 gap-4 mb-8">
                {
                    applicantInfo.map((info => <ApplicationCard 
                    key={info._id}
                    info={info}
                    applicantInfo={applicantInfo}
                    setApplicantInfo={setApplicantInfo}> 
                        
                    </ApplicationCard>))
                }
            </div>
        </div>
        
    )

};

export default MyVisaApplication;