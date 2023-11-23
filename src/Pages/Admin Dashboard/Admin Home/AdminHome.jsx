import { IoWallet } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    const { data: stats =[] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold">Hi, Welcome Back!</h2>
                <div className="grid grid-cols-4 items-center text-center gap-6 my-10">
                    <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex justify-center items-center gap-5 text-white py-9 rounded-xl">
                        <div className="md:text-6xl text-3xl">
                            <IoWallet />
                        </div>
                        <div>
                            <p className="md:text-6xl font-bold text-xl">${stats.revenue}</p>
                            <h2 className="md:text-4xl text-lg">Revenue</h2>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] flex justify-center items-center gap-5 text-white py-9 rounded-xl">
                        <div className="md:text-6xl text-3xl">
                            <FaUsers />
                        </div>
                        <div>
                            <p className="md:text-6xl font-bold text-xl">{stats.users}</p>
                            <h2 className="md:text-4xl text-lg">Customers</h2>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] flex justify-center items-center gap-5 text-white py-9 rounded-xl">
                        <div className="md:text-6xl text-3xl">
                            <GiCook />
                        </div>
                        <div>
                            <p className="md:text-6xl font-bold text-xl">{stats.menuItems}</p>
                            <h2 className="md:text-4xl text-lg">Products</h2>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] flex justify-center items-center gap-5 text-white py-9 rounded-xl">
                        <div className="md:text-6xl text-3xl">
                            <FaShippingFast />
                        </div>
                        <div>
                            <p className="md:text-6xl font-bold text-xl">{stats.orders}</p>
                            <h2 className="md:text-4xl text-lg">Orders</h2>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default AdminHome;