import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl w-full mx-auto">
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;