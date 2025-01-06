import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import logo from "../assets/evs-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer max-w-7xl w-full mx-auto text-white p-10">
      <aside>
        <img className="w-20 mx-auto" src={logo} alt="" />
        <p className="text-2xl lg:text-4xl font-bold">
          VISA PORTAL    
        </p>
        <p className="italic text-red-500">
          Providing reliable tech since 2003
        </p>
        <p>Copyright &copy; 2023. All Rights Reserved.</p>
      </aside>
      <nav>
        <h6 className="font-semibold text-xl text-white">Visas</h6>
        <Link to={"/allVisas"} className="link link-hover">Student Visas</Link>
        <Link to={"/allVisas"} className="link link-hover">Business Visas</Link>
        <Link to={"/allVisas"} className="link link-hover">Family Visas</Link>
        <Link to={"/allVisas"} className="link link-hover">Travel Visas</Link>
      </nav>
      <nav>
        <h6 className="font-semibold text-xl text-white">Contact Us</h6>
        <a className="link link-hover">Corporate Office</a>
        <a className="link link-hover">
          2279 Fire Access Road Greensboro, NC 27401
        </a>
        <a className="link link-hover">01644078709</a>
        <a className="link link-hover">Sakibhasan16h@gmail.com</a>
      </nav>
      <nav>
        <h6 className="font-semibold text-xl text-white">Connect</h6>
        <Link to={"https://web.facebook.com/?_rdc=1&_rdr#"} target="_black" className="link flex items-center gap-2 link-hover">
          <FaFacebook></FaFacebook>
          <p>Facebook</p>
        </Link>
        <Link to={"https://www.instagram.com/"} target="_black" className="link flex items-center gap-2 link-hover">
          <FaInstagram></FaInstagram>
          <p>Instagram</p>
        </Link>
        <Link to={"https://www.twitter.com/"} target="_black" className="link flex items-center gap-2 link-hover">
          <FaTwitter></FaTwitter>
          <p>Twitter</p>
        </Link>
        <Link to={"https://www.linkedin.com/"} target="_black" className="link flex items-center gap-2 link-hover">
          <IoLogoLinkedin></IoLogoLinkedin>
          <p>Linked-In</p>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
