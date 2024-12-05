import { useLoaderData } from "react-router-dom";

const MyVisaApplication = () => {
    const myApplications = useLoaderData();
    console.log(myApplications);
    return (
        <div>
            <h2>My application</h2>
        </div>
    );
};

export default MyVisaApplication;