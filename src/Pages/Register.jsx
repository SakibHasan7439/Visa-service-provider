import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const { createNewUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        console.log(password);
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;

        if(password.length < 6) {
            setError("Password must be 6 or more character long");
            return;
        }

        if(!regex.test(password)){
            setError("Password must contain at least one uppercase and lowercase letter");
            return;
        }
        
        createNewUser(email, password)
        .then(user =>{
            toast.success('Registered Successfully!');
            console.log(user);
            updateUserProfile(name, photoUrl);
            navigate("/");
        })

        .catch(err =>{
            toast.error("Something wrong");
            setError(err.message);
        })
    }

    const handleSignInWithGoogle = () =>{
      signInWithGoogle()
      .then(user =>{
        toast.success("Sign in successfully");
        navigate("/");
      })
      .catch(err => {
        toast.error("something wrong!");
      })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content lg:w-[400px] flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input
                type="text"
                placeholder="PhotoUrl"
                name="photoUrl"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                 <p className="text-red-500">{error}</p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-500 text-white mb-2">Register</button>
              <button onClick={handleSignInWithGoogle} className="p-3 flex gap-2 items-center justify-center shadow-md border rounded-md">
                <FcGoogle className="text-xl"></FcGoogle>
                <span>Signin with Google</span>
              </button>
            </div>
          </form>
          <p className="py-2 text-center">Already have an account ? <Link to={"/login"} className="text-blue-500">Login now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
