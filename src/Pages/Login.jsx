import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const handleLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
    // eslint-disable-next-line no-unused-vars
    .then(user =>{
      toast.success("successfully signed in");
      navigate(location?.state ? location.state : "/");
    })
    .catch(err =>{
      toast.error(err.message);
    })
  }

  const handleSignInWithGoogle = () =>{
    signInWithGoogle()
    .then(() =>{
      toast.success("Sign in successfully");
      navigate(location?.state ? location.state : "/");
    })
    .catch(err => {
      toast.error("something wrong!");
      console.log(err);
    })
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content lg:w-[400px] flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary mb-2">Login</button>
              <button onClick={handleSignInWithGoogle} className="p-3 flex gap-2 items-center justify-center shadow-md border rounded-md">
                <FcGoogle className="text-xl"></FcGoogle>
                <span>Signin with Google</span>
              </button>
            </div>
          </form>
          <p className="py-2 text-center">New to this website ? <Link to={"/register"} className="text-blue-500">Register now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
