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
import AdminRoute from "./AdminRoute";
import UpadateItem from "../Pages/Admin Dashboard/Manage items/UpadateItem";
import UserHome from "../Pages/UserDashboard/User Home/UserHome";
import Reservation from "../Pages/UserDashboard/Reservation/Reservation";
import Payment from "../Pages/UserDashboard/Payment history/Payment";
import AddReview from "../Pages/UserDashboard/Add review/AddReview";
import MyBooking from "../Pages/UserDashboard/My booking/MyBooking";
import PaymentHistory from "../Pages/UserDashboard/Payment history/PaymentHistory";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'contact',
                element: <PrivateRoute><Contact /></PrivateRoute>
            },
            {
                path: 'ourmenu',
                element: <OurMenu />
            },
            {
                path: 'ourshop/:category',
                element: <OurShop />
            },

        ],
    },
    {
        path: 'signUp',
        element: <Register />
    },
    {
        path: 'signIn',
        element: <LogIn />
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // user Section 
            {
                path: 'userHome',
                element: <UserHome />
            },
            {
                path: 'reservation',
                element: <Reservation />
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'mycart',
                element: <MyCart />
            },
            {
                path: 'addReview',
                element: <AddReview />
            },
            {
                path: 'booking',
                element: <MyBooking />
            },

            // Admin Section 
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: 'additem',
                element: <AdminRoute><Additems /></AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute><Manageitems /></AdminRoute>
            },
            {
                path: 'managebooking',
                element: <AdminRoute><Managebookings /></AdminRoute>
            },
            {
                path: 'alluser',
                element: <AdminRoute><Allusers /></AdminRoute>
            },
            {
                path: 'updatateItem/:id',
                element: <UpadateItem></UpadateItem>,
                loader: ({ params }) => fetch(`https://bistro-boss-server-side-rust.vercel.app/menu/${params.id}`)
            }
        ]
    }
])

export default Routes;