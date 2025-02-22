import { NavLink } from "react-router-dom";
import logo from "../assets/evs-logo.png";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import Typewriter from "typewriter-effect";
import Toggle from "./Toggle";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then((res) => {
        toast.success("Signed Out successfully");
        console.log(res);
      })
      .catch((err) => {
        toast.error("Something wrong!");
        console.log(err);
      });
  };
  return (
    <div className="navbar bg-base-100 mb-4 sticky top-0 z-50 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm flex z-[999] flex-col gap-2 dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/allVisas"}>All Visas</NavLink>
            <NavLink className={user ? "block" : "hidden"} to={"/addVisas"}>Add Visa</NavLink>
            <NavLink className={user ? "block" : "hidden"} to={"/myVisas"}>My added visas</NavLink>
            <NavLink className={user ? "block" : "hidden"} to={"/myApplications"}>My Visa applications</NavLink>
            <NavLink>About Us</NavLink>
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-3 md:w-24" src={logo} alt="website logo" />
          <a className="btn btn-ghost md:text-xl px-0 text-sm pt-[10px] md:pt-[14px] font-bold xl:text-3xl text-blue-900"> 
            <Typewriter
              options={{
                strings: ["VISA PORTAL"],
                autoStart: true,
                loop: true,
              }}
            />
          </a>
        </div>
      </div>
      <div className="navbar-center hidden pt-[12px] lg:flex">
        <ul className="menu menu-horizontal gap-4 lg:text-sm xl:text-lg text-lg px-1">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/allVisas"}>All Visas</NavLink>
          <NavLink className={user ? "block" : "hidden"} to={"/addVisas"}>Add Visa</NavLink>
          <NavLink className={user ? "block" : "hidden"} to={"/myVisas"}>My added visas</NavLink>
          <NavLink className={user ? "block" : "hidden"} to={"/myApplications"}>My Visa applications</NavLink>
          <NavLink to={"/aboutUs"}>About Us</NavLink>
        </ul>
      </div>
      <div className="navbar-end md:mt-8">
        {user ? (
          <div className="flex gap-4 items-center text-lg">
            <Toggle></Toggle>
            <div className="tooltip w-[110px] md:w-[116px]" data-tip={user.displayName}>
              <img
                className="w-7 h-7 md:w-12 md:h-12 object-cover rounded-full"
                src={user.photoURL}
                alt="user image"
              />
            </div>
            <button
              onClick={handleSignOut}
              className="bg-red-500 rounded-md text-sm px-2 py-2 md:px-5 md:py-4 md:font-semibold text-white"
            >
              LogOut
            </button>
          </div>
        ) : (
            <div className="flex gap-4 text-lg">
            <Toggle></Toggle>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
          </div> 
        )}
      </div>
    </div>
  );
};

export default Navbar;
