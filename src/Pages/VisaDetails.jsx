import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const VisaDetails = () => {
  const { user } = useContext(AuthContext);
  const visa = useLoaderData();
  const {
    countryImage,
    countryName,
    visa_type,
    Processing_time,
    description,
    age,
    fee,
    validity,
    applicationMethod,
  } = visa;

  const handleApply = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const appliedDate = form.date.value;
    const appliedFee = form.fee.value;
    const userEmail = user.email;

    const newApplication = {email, firstName, lastName, appliedDate, appliedFee, userEmail, countryImage, countryName, visa_type, Processing_time, description,validity};

    fetch("https://visa-processing-server-pearl.vercel.app/addApplications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            toast.success("Application Successful", {
                position: 'top-right',
            })
            form.reset();
        }
      });
  }


  return (
    <div className="lg:w-1/2 mx-auto mb-5 lg:border-2 border lg:rounded-md lg:p-12">
      <img className="mb-4 w-full" src={countryImage} alt="country_image" />
      <div className="mb-6">
        <h2 className="text-center mb-2 text-xl lg:text-2xl font-semibold">
          {countryName}
        </h2>
        <p>
          <span className="text-xl font-semibold">Visa_type:</span> {visa_type}
        </p>
        <p>
          <span className="text-xl font-semibold">Processing_time:</span>{" "}
          {Processing_time}
        </p>
        <p>{description}</p>
        <p>
          <span className="text-xl font-semibold">Age_restriction</span>
          {age}
        </p>
        <p>
          <span className="text-xl font-semibold">Fee:</span> {fee}
        </p>
        <p>
          <span className="text-xl font-semibold">Application_method:</span>{" "}
          {applicationMethod}
        </p>
      </div>
      <div className="flex justify-center">
        <button onClick={() => document.getElementById("my_modal_5").showModal()} className="bg-red-500 px-5 py-2 rounded-md text-white">
          Apply For Visa
        </button>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal z-[900] modal-bottom sm:modal-middle">
        <div className="modal-box">
            <form onSubmit={handleApply}>
                <label>Email:</label>
                <input type="email" required name="email" id="" />
                <label>FirstName:</label>
                <input type="text" required name="firstName" id="" />
                <label>LastName:</label>
                <input type="lastName" name="lastName" id="" />
                <label>Applied Date:</label>
                <input type="date" required name="date" id="" />
                <label>Fee:</label>
                <input type="number" required name="fee" id="" />
                <input className="bg-red-500 hover:bg-red-600 text-white cursor-pointer" type="submit" value="Apply Now" />
            </form>
          <div className="modal-action justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default VisaDetails;
