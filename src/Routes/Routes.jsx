import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import OurMenu from "../Pages/Our Menu/OurMenu";
import OurShop from "../Pages/Our Shop/OurShop";
import Register from "../Pages/Account/Register/Register";
import LogIn from "../Pages/Account/Log In/LogIn";
import ErrorPage from "../Error Page/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import MyCart from "../Pages/UserDashboard/MyCart/MyCart";
import AdminHome from "../Pages/Admin Dashboard/Admin Home/AdminHome";
import Additems from "../Pages/Admin Dashboard/Add items/Additems";
import Manageitems from "../Pages/Admin Dashboard/Manage items/Manageitems";
import Managebookings from "../Pages/Admin Dashboard/Manage bookings/Managebookings";
import Allusers from "../Pages/Admin Dashboard/Allusers/Allusers";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'contact',
                element:<PrivateRoute><Contact/></PrivateRoute>
            },
            {
                path:'ourmenu',
                element:<OurMenu/>
            },
            {
                path:'ourshop/:category',
                element:<OurShop/>
            },
            
        ],
    },
    {
        path:'signUp',
        element:<Register/>
    },
    {
        path:'signIn',
        element:<LogIn/>
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'mycart',
                element:<MyCart></MyCart>
            },



            // Admin Section 
            {
                path:'adminhome',
                element:<AdminHome/>
            },
            {
                path:'additem',
                element:<Additems/>
            },
            {
                path:'manageitems',
                element:<Manageitems/>
            },
            {
                path:'managebooking',
                element:<Managebookings/>
            },
            {
                path:'alluser',
                element:<Allusers/>
            },
        ]
    }
])

export default Routes;