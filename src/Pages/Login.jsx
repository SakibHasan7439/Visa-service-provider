import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content lg:w-[400px] flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
              <button className="p-3 flex gap-2 items-center justify-center shadow-md border rounded-md">
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
