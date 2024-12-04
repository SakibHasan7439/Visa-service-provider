import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl w-full mx-auto">
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div className="bg-gray-900 py-6 lg:py-16">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;