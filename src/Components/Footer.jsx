import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer max-w-7xl w-full mx-auto text-white p-10">
      <aside>
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
        <a className="link link-hover">Student Visas</a>
        <a className="link link-hover">Business Visas</a>
        <a className="link link-hover">Family Visas</a>
        <a className="link link-hover">Travel Visas</a>
      </nav>
      <nav>
        <h6 className="font-semibold text-xl text-white">Contact Us</h6>
        <a className="link link-hover">Corporate Office</a>
        <a className="link link-hover">2279 Fire Access Road Greensboro, NC 27401</a>
        <a className="link link-hover">01644078709</a>
        <a className="link link-hover">Sakibhasan16h@gmail.com</a>
      </nav>
      <nav>
        <h6 className="font-semibold text-xl text-white">Connect</h6>
        <a className="link flex items-center gap-2 link-hover">
            <FaFacebook></FaFacebook>
            <p>Facebook</p>
        </a>
        <a className="link flex items-center gap-2 link-hover">
            <FaInstagram></FaInstagram>
            <p>Instagram</p>
        </a>
        <a className="link flex items-center gap-2 link-hover">
            <FaTwitter></FaTwitter>
            <p>Twitter</p>
        </a>
        <a className="link flex items-center gap-2 link-hover">
            <IoLogoLinkedin></IoLogoLinkedin>
            <p>Linked-In</p>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
