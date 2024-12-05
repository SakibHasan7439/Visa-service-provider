import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ApplicationCard from "../Components/ApplicationCard";

const MyVisaApplication = () => {
    const { user } = useContext(AuthContext);
    const [applicantInfo, setApplicantInfo] = useState([]);
    
    useEffect(()=>{
        fetch(`https://visa-processing-server-pearl.vercel.app/addApplications?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data =>{
        console.log(data);
        setApplicantInfo(data);
    })
    }, []);

    return (
        <div className="max-w-7xl w-full mx-auto mt-6 lg:mt-16 ">
            <h2 className="text-center text-2xl md:text-4xl font-bold mb-6 lg:mb-8">User Application Cards</h2>
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