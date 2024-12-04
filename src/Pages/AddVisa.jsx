import { useContext } from "react";
import "./rawClasses.css";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddVisa = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.image.value);
        const form = e.target;
        const countryImage = form.image.value;
        const countryName = form.name.value;
        const visa_type = form.visas.value;
        const Processing_time = form.time.value;
        const validPassport = form.validPassport.value;
        const applicationForm = form.applicationForm.value;
        const photograph = form.photograph.value;
        const required_docs = [applicationForm, photograph, validPassport]
        const description = form.description.value;
        const age = form.age.value;
        const fee = form.age.value;
        const validity = form.validity.value;
        const applicationMethod = form.applicationMethod.value;
        const displayName = user.displayName;

        const visa = {countryImage, countryName, visa_type, Processing_time, required_docs, description, fee, age, validity, applicationMethod, displayName}

        fetch('http://localhost:5000/addVisas', {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(visa)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: "success",
              text: "Visa added successfully",
              icon: "success"
            });
            form.reset();
          }
        })
    }
  return (
    <div className="max-w-7xl w-full mx-auto mb-6">
      <h2 className="text-center mb-6 lg:mb-8 text-2xl lg:text-4xl font-bold">Add Visa</h2>
      <form onSubmit={handleSubmit}>
        <div className="lg:flex justify-between gap-4">
          <div>
            <label>Country image</label>
            <input type="text" placeholder="country image" name="image" id="" />

            <label>Country Name</label>
            <input type="text" name="name" id="" />

            <label>Visa_type</label>
            <select
              name="visas"
              id="visas"
              className="block mb-4 border rounded-md border-black"
            >
              <option value="student_visa">Student Visa</option>
              <option value="business_visa">Business Visa</option>
              <option value="family_visa">Family Visa</option>
            </select>

            <label>Processing Time</label>
            <input type="text" name="time" id="" />

            <label>Required Documents</label>
            <div className="flex gap-2 items-center">
              <input
                style={{ height: "15px", width: "15px", marginBottom: "0px" }}
                type="checkbox"
                name="validPassport"
              />
              <label>Valid Passport</label>
            </div>

            <div className="flex gap-2 items-center">
              <input
                style={{ height: "15px", width: "15px", marginBottom: "0px" }}
                type="checkbox"
                name="applicationForm"
              />
              <label>Visa application form</label>
            </div>

            <div className="flex gap-2 items-center">
              <input
                style={{ height: "15px", width: "15px", marginBottom: "0px" }}
                type="checkbox"
                name="photograph"
              />
              <label>Recent passport-sized photograph</label>
            </div>
          </div>
          <div>
            <label>Description</label>
            <textarea
              placeholder="description"
              name="description"
              className="textarea textarea-bordered textarea-md w-full"
            ></textarea>

            <label>Age_restriction</label>
            <input type="number" placeholder="age restriction" name="age" id="" />

            <label>Fee</label>
            <input type="number"  placeholder="fee" name="countryImage" id="" />

            <label>Validity</label>
            <input type="text" placeholder="validity" name="validity" id="" />

            <label>Application_method</label>
            <input type="text" placeholder="application method" name="applicationMethod" id="" />
          </div>
        </div>
        <input className="flex justify-center bg-red-500 text-white cursor-pointer hover:bg-red-600" type="submit" value="Add Visa" />
      </form>
    </div>
  );
};

export default AddVisa;
