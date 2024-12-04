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

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/addVisas",
                element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>
            },

            {
                path: "/allVisas",
                element: <PrivateRoute><AllVisas></AllVisas></PrivateRoute>,
                loader: ()=>fetch('https://visa-processing-server-pearl.vercel.app/addVisas')
            },

            {
                path: "/allVisas/:id",
                element: <PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
                loader: ({params})=>fetch(`https://visa-processing-server-pearl.vercel.app/addVisas/${params.id}`)
            },

            {
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default Router;