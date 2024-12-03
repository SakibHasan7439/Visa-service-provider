import { Link, NavLink } from "react-router-dom";
import logo from "../assets/evs-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm flex flex-col gap-2 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink>Home</NavLink>
            <NavLink>All Visas</NavLink>
            <NavLink>Add Visa</NavLink>
            <NavLink>My added visas</NavLink>
            <NavLink>My Visa applications</NavLink>
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-12 md:w-24" src={logo} alt="website logo" />
          <a className="btn btn-ghost px-0 text-sm pt-[10px] md:pt-[14px] font-bold md:text-3xl text-blue-900">
            VISA PORTAL
          </a>
        </div>
      </div>
      <div className="navbar-center hidden pt-[12px] lg:flex">
        <ul className="menu menu-horizontal gap-4 text-lg px-1">
          <NavLink>Home</NavLink>
          <NavLink>All Visas</NavLink>
          <NavLink>Add Visa</NavLink>
          <NavLink>My added visas</NavLink>
          <NavLink>My Visa applications</NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-4 text-lg">
       <Link>Login</Link>
       <Link>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
