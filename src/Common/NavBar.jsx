import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";

const NavBar = () => {
    const navitems = <>
        <li>
            <NavLink to="/" className="hover:text-white md:text-xl"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#EEFF25" : "",
                    };
                }}
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/contact' className="hover:text-white md:text-xl"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#EEFF25" : "",
                    };
                }}
            >Contact Us</NavLink>
        </li>
        <li>
            <NavLink to='/dashboard' className="hover:text-white md:text-xl"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#EEFF25" : "",
                    };
                }}
            >Dashboard</NavLink>
        </li>
        <li>
            <NavLink to='/ourmenu' className="hover:text-white md:text-xl"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#EEFF25" : "",
                    };
                }}
            >Our Menu</NavLink>
        </li>
        <li>
            <NavLink to='/ourshop/Popular' className="hover:text-white md:text-xl"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#EEFF25" : "",
                    };
                }}
            >Our Shop</NavLink>
        </li>

    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-50 bg-gray-900 text-white max-w-[1920px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 uppercase font-bold rounded-box w-52">
                        {navitems}
                    </ul>
                </div>
                <Link>
                    <button className="btn-ghost normal-case text-xl md:text-3xl font-extrabold">
                        BISTRO BOSS
                        <p className="tracking-[6px] text-base md:text-2xl font-bold">Restaurant</p>
                    </button>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu uppercase font-bold menu-horizontal px-1">
                    {navitems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/signin'>
                    <button className="btn rounded-xl bg-transparent text-white md:text-xl hover:bg-[#1F2937] border-0 hover:text-[#EEFF25] border-b-[#EEFF25] border-b-4 hover:border-b-[#1F2937]">Log In <CgLogIn /></button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;