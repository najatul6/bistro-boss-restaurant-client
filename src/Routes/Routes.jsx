import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyCart from "../Pages/My Cart/MyCart";
import OurMenu from "../Pages/Our Menu/OurMenu";
import OurShop from "../Pages/Our Shop/OurShop";
import Register from "../Pages/Account/Register/Register";
import LogIn from "../Pages/Account/Log In/LogIn";
import ErrorPage from "../Error Page/ErrorPage";

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
                element:<Contact/>
            },
            {
                path:'dashboard',
                element:<Dashboard/>
            },
            {
                path:'mycart',
                element:<MyCart/>
            },
            {
                path:'ourmenu',
                element:<OurMenu/>
            },
            {
                path:'ourshop/:category',
                element:<OurShop/>
            },
            {
                path:'signUp',
                element:<Register/>
            },
            {
                path:'signIn',
                element:<LogIn/>
            }
        ]
    }
])

export default Routes;