import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { MdRateReview } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { MdOutlineEditCalendar } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { CgLogIn } from "react-icons/cg";
import Swal from "sweetalert2";

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
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

    return (
        <div className="flex min-h-screen max-w-[1920px] mx-auto">
            {/* Dashboard Side Bar  */}
            <div className="w-[280px] min-h-full bg-[#D1A054] py-12 lg:fixed lg:left-0 lg:top-0 lg:overflow-y-auto">

                <div className="mb-5 px-7">
                    <p className="text-base font-bold md:text-3xl md:font-extrabold">
                        BISTRO BOSS
                    </p>
                    <p className="tracking-[2px] md:tracking-[6px] text-sm md:text-2xl font-bold">Restaurant</p>
                </div>

                <ul className="menu my-4">
                    <li>
                        <NavLink to="/dashboard/userhome" className="hover:text-white md:text-xl uppercase"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "transparent" : "",
                                    color: isActive ? "#FFFFFF" : "",
                                };
                            }}
                        >
                            <FaHome></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation" className="hover:text-white md:text-xl uppercase"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "transparent" : "",
                                    color: isActive ? "#FFFFFF" : "",
                                };
                            }}
                        >
                            <FaRegCalendarAlt></FaRegCalendarAlt>
                            reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment" className="hover:text-white md:text-xl uppercase"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "transparent" : "",
                                    color: isActive ? "#FFFFFF" : "",
                                };
                            }}
                        >
                            <GiWallet></GiWallet>
                            payment history
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/mycart" className="hover:text-white md:text-xl uppercase"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "transparent" : "",
                                    color: isActive ? "#FFFFFF" : "",
                                };
                            }}
                        >
                            <FaShoppingCart></FaShoppingCart>
                            My Carts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addreview" className="hover:text-white md:text-xl uppercase"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "transparent" : "",
                                    color: isActive ? "#FFFFFF" : "",
                                };
                            }}
                        >
                            <MdRateReview></MdRateReview>
                            add review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking" className="hover:text-white md:text-xl uppercase"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "transparent" : "",
                                    color: isActive ? "#FFFFFF" : "",
                                };
                            }}
                        >
                            <MdOutlineEditCalendar />
                            my booking
                        </NavLink>
                    </li>
                    <div className="divider border-0 bg-white rounded-full h-1"></div>
                    <li>
                        <NavLink to="/" className="hover:text-white md:text-xl uppercase"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "transparent" : "",
                                    color: isActive ? "#FFFFFF" : "",
                                };
                            }}
                        >
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ourmenu" className="hover:text-white md:text-xl uppercase"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "transparent" : "",
                                    color: isActive ? "#FFFFFF" : "",
                                };
                            }}
                        >
                            <IoMenu></IoMenu>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ourshop/Popular" className="hover:text-white md:text-xl uppercase"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "transparent" : "",
                                    color: isActive ? "#FFFFFF" : "",
                                };
                            }}
                        >
                            <HiMiniShoppingBag></HiMiniShoppingBag>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hover:text-white md:text-xl uppercase"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "transparent" : "",
                                    color: isActive ? "#FFFFFF" : "",
                                };
                            }}
                        >
                            <MdEmail></MdEmail>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                {
                    user ?
                        <button onClick={handlelogOut} className="rounded-t-xl border-2 flex justify-center w-full items-center py-2 gap-2 bg-transparent text-white md:text-xl hover:bg-[#1F2937] hover:border-b-[#EEFF25] hover:text-[#EEFF25] border-b-[#EEFF25] border-b-4">Log Out <CgLogIn /></button>
                        :
                        ''
                }
            </div>

            {/* Dashboard Main Content  */}
            <div className="flex-1 mx-auto bg-[#F6F6F6] p-8 lg:ml-[280px] lg:overflow-y-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;