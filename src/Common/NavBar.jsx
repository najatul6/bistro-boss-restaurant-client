import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handlelogOut = () => {
        logOut()
            .then(data => {
                if (data) {
                    Swal.fire({
                        title: "Log Out Successful",
                        showClass: {
                            popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                        },
                        hideClass: {
                            popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                        }
                    });
                }

            })
            .catch(error => {
                const logoutErr = error.code;
                Swal.fire({
                    title: { logoutErr },
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInDown
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutUp
                        animate__faster
                      `
                    }
                });
            })
    }

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
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-32 rounded-full ring ring-[#EEFF25]">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-5 shadow text-[#EEFF25] hover:bg-none menu menu-sm dropdown-content hover:text-[#EEFF25] bg-gray-900 rounded-box">
                                <li>
                                    {user.displayName}
                                </li>
                                <li>
                                    {user.email}
                                </li>
                                <button onClick={handlelogOut} className="btn my-1 bg-[#f16022] text-white">Log Out <CgLogIn /></button>
                            </ul>
                        </div>
                        :
                        <Link to='/signin'>
                            <button className="btn rounded-xl bg-transparent text-white md:text-xl hover:bg-[#1F2937] border-0 hover:text-[#EEFF25] border-b-[#EEFF25] border-b-4 hover:border-b-[#1F2937]">Log In <CgLogIn /></button>
                        </Link>
                }

                {/* {
                    user ? <div>

                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {user?.displayName}
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <button onClick={handlelogOut} className="btn my-1 bg-[#f16022] text-white">Log Out <CgLogIn /></button>
                        </ul>
                        <div className="dropdown  dropdown-bottom dropdown-end">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>{user?.displayName}</a></li>
                                <li><a>{user?.email}</a></li>
                            </ul>
                        </div>
                         
                    </div> : <>

                       
                    </>
                } */}
            </div>
        </div>
    );
};

export default NavBar;