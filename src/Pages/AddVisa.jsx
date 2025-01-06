import { useContext } from "react";
import "./rawClasses.css";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddVisa = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const countryImage = form.image.value;
        const countryName = form.name.value;
        const visa_type = form.visas.value;
        const Processing_time = form.time.value;
        const valid_passport = form.valid_passport.checked ? "valid passport": '';
        const visa_application_form = form.visa_application_form.checked ? "visa application form": '';
        const recent_passport_size_photograph = form.recent_passport_size_photograph.checked ? "recent_passport_size_photograph": '';
        const required_docs = [valid_passport, visa_application_form, recent_passport_size_photograph];
        const description = form.description.value;
        const age = form.age.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const applicationMethod = form.applicationMethod.value;
        const email = user.email;

        const visa = {countryImage, countryName, visa_type, Processing_time, required_docs, description, fee, age, validity, applicationMethod, email}
        console.log(visa);

        fetch('https://visa-processing-server-pearl.vercel.app/addVisas', {
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
    <div className="bg-[#fceecc58] py-4">
      <div className="max-w-4xl rounded-md p-4 bg-[#fceecc97] w-full mx-auto mb-6">
        <h2 className="text-center mb-6 lg:mb-8 text-2xl lg:text-4xl font-playfair">Add Visa</h2>
        <form onSubmit={handleSubmit}>
          <div>
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
                  name="valid_passport"
                />
                <label>Valid Passport</label>
              </div>

              <div className="flex gap-2 items-center">
                <input
                  style={{ height: "15px", width: "15px", marginBottom: "0px" }}
                  type="checkbox"
                  name="visa_application_form"
                />
                <label>Visa application form</label>
              </div>

              <div className="flex gap-2 items-center">
                <input
                  style={{ height: "15px", width: "15px", marginBottom: "0px" }}
                  type="checkbox"
                  name="recent_passport_size_photograph"
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
              <input type="number"  placeholder="fee" name="fee" id="" />

              <label>Validity</label>
              <input type="text" placeholder="validity" name="validity" id="" />

              <label>Application_method</label>
              <input type="text" placeholder="application method" name="applicationMethod" id="" />
            </div>
          </div>
          <input className="flex justify-center bg-red-500 text-white cursor-pointer hover:bg-red-600" type="submit" value="Add Visa" />
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
