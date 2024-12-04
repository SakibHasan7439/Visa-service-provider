import { Link } from "react-router-dom";
import error from "../assets/errorPage.jpg"

const ErrorPage = () => {
    return (
        <div className="flex items-center relative md:mt-14 justify-center">
            <img src={error} alt="error image" />
            <div className="absolute bottom-10">
                <Link className="bg-white px-4 py-2 rounded-md shadow-md" to={"/"}>Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;