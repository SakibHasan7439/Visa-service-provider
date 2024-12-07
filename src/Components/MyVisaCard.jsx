import { MdDelete } from "react-icons/md";
import { FaPenClip } from "react-icons/fa6";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

/* eslint-disable react/prop-types */
const MyVisaCard = ({ myVisa, setMyVisas, myVisas }) => {
  const { user } = useContext(AuthContext);

  const {
    countryName,
    countryImage,
    visa_type,
    Processing_time,
    fee,
    validity,
    applicationMethod,
    _id,
    description,
    age,
  } = myVisa;

  const handleDelete = (_id) => {
    fetch(
      `https://visa-processing-server-pearl.vercel.app/deleteUserVisa/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("deleted successfully");
          const remainingVisas = myVisas.filter((visa) => visa._id !== _id);
          setMyVisas(remainingVisas);
        }
      });
  };

  const handleUpdate = (e) =>{
    e.preventDefault();
    const form = e.target;
    const countryImage = form.image.value;
    const countryName = form.name.value;
    const visa_type = form.visas.value;
    const Processing_time = form.time.value;
    const description = form.description.value;
    const age = form.age.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;
    const email = user.email;

    const visa = {countryImage, countryName, visa_type, Processing_time, description, fee, age, validity, applicationMethod, email}

    fetch(`https://visa-processing-server-pearl.vercel.app/addVisas/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(visa)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.modifiedCount > 0){
        Swal.fire({
          title: "success",
          text: "Visa updated successfully",
          icon: "success"
        });
        form.reset();
      }
    })
  }

  return (
    <div className="card rounded-md card-compact bg-base-100 col-span-12 md:col-span-6 lg:col-span-4 border py-4">
      <figure className="px-4">
        <img
          className="h-[237px] w-full rounded-md object-cover"
          src={countryImage}
          alt={`${countryName} flag`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{countryName}</h2>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>
            <strong>Visa_type: </strong>
            {visa_type}
          </li>
          <li>
            <strong>Processing_time: </strong>
            {Processing_time}
          </li>
          <li>
            <strong>Fee: </strong>${fee}
          </li>
          <li>
            <strong>Validity: </strong>
            {validity}
          </li>
          <li>
            <strong>Application_method: </strong>
            {applicationMethod}
          </li>
        </ul>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleDelete(_id)}
            className="px-2 btn-sm text-xl rounded-md bg-red-500 text-white font-semibold hover:bg-red-600"
          >
            <MdDelete></MdDelete>
          </button>
          <button
            onClick={() => document.getElementById(`${_id}`).showModal()}
            className="px-2 btn-sm text-xl rounded-md bg-red-500 text-white font-semibold hover:bg-red-600"
          >
            <FaPenClip></FaPenClip>
          </button>
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={`${_id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleUpdate}>
              <label>Country image</label>
              <input
                type="text"
                placeholder="country image"
                name="image"
                defaultValue={countryImage}
                id=""
              />

              <label>Country Name</label>
              <input type="text" name="name" defaultValue={countryName} id="" />

              <label>Visa_type</label>
              <select
                name="visas"
                id="visas"
                defaultValue={visa_type}
                className="block mb-4 border rounded-md border-black"
              >
                <option value="student_visa">Student Visa</option>
                <option value="business_visa">Business Visa</option>
                <option value="family_visa">Family Visa</option>
              </select>

              <label>Processing Time</label>
              <input type="text" defaultValue={Processing_time} name="time" id="" />

              <label>Required Documents</label>
              <div className="flex gap-2 items-center">
                <input
                  style={{
                    height: "15px",
                    width: "15px",
                    marginBottom: "0px",
                  }}
                  type="checkbox"
                  name="valid_passport"
                />
                <label>Valid Passport</label>
              </div>

              <div className="flex gap-2 items-center">
                <input
                  style={{
                    height: "15px",
                    width: "15px",
                    marginBottom: "0px",
                  }}
                  type="checkbox"
                  name="visa_application_form"
                />
                <label>Visa application form</label>
              </div>

              <div className="flex gap-2 items-center">
                <input
                  style={{
                    height: "15px",
                    width: "15px",
                    marginBottom: "0px",
                  }}
                  type="checkbox"
                  name="recent_passport_sized_photograph"
                />
                <label>Recent passport-sized photograph</label>
              </div>

              <label>Description</label>
              <textarea
                placeholder="description"
                name="description"
                defaultValue={description}
                className="textarea textarea-bordered textarea-md w-full"
              ></textarea>

              <label>Age_restriction</label>
              <input
                type="number"
                placeholder="age restriction"
                name="age"
                defaultValue={age}
                id=""
              />

              <label>Fee</label>
              <input type="number" defaultValue={fee} placeholder="fee" name="fee" id="" />

              <label>Validity</label>
              <input
                type="text"
                placeholder="validity"
                name="validity"
                defaultValue={validity}
                id=""
              />

              <label>Application_method</label>
              <input
                type="text"
                placeholder="application method"
                name="applicationMethod"
                defaultValue={applicationMethod}
                id=""
              />

          <input
            className="flex justify-center bg-red-500 text-white cursor-pointer hover:bg-red-600"
            type="submit"
            value="Update Visa"
          />
          </form>
          <div className="modal-action">
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

export default MyVisaCard;
