import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import AddVisa from "../Pages/AddVisa";
import PrivateRoute from "./PrivateRoute";
import AllVisas from "../Pages/AllVisas";
import VisaDetails from "../Pages/VisaDetails";
import MyVisaApplication from "../Pages/MyVisaApplication";
import MyAddedVisa from "../Pages/MyAddedVisa";
import AboutUs from "../Pages/AboutUs";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('https://visa-processing-server-pearl.vercel.app/addLatestVisas')
            },

            {
                path: "/addVisas",
                element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>
            },

            {
                path: "/allVisas",
                element: <AllVisas></AllVisas>,
                loader: ()=>fetch('https://visa-processing-server-pearl.vercel.app/addVisas')
            },

            {
                path: "/myVisas",
                element: <PrivateRoute><MyAddedVisa></MyAddedVisa></PrivateRoute>,
            },

            {
                path: "/myApplications",
                element: <PrivateRoute><MyVisaApplication></MyVisaApplication></PrivateRoute>,
            },

            {
                path: "/allVisas/:id",
                element: <VisaDetails></VisaDetails>,
                loader: ({params})=>fetch(`https://visa-processing-server-pearl.vercel.app/addVisas/${params.id}`)
            },

            {
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/register",
                element: <Register></Register>
            },

            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            }
        ]
    },  
]);

export default Router;