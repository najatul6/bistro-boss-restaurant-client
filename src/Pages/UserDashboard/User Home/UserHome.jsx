import { IoWallet } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { BiSolidPhoneCall } from "react-icons/bi";

const UserHome = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold">Hi, Welcome Back!</h2>
            <div className="grid grid-cols-3 items-center gap-6 my-6">
                <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex justify-center items-center gap-5 text-white py-9 rounded-xl">
                    <div className="md:text-6xl text-3xl">
                        <IoWallet/>
                    </div>
                    <div>
                        <p className="md:text-6xl font-bold text-xl">103</p>
                        <h2 className="md:text-4xl text-lg">Menu</h2>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] flex justify-center items-center gap-5 text-white py-9 rounded-xl">
                    <div className="md:text-6xl text-3xl">
                        <CiShop/>
                    </div>
                    <div>
                        <p className="md:text-6xl font-bold text-xl">103</p>
                        <h2 className="md:text-4xl text-lg">Shop</h2>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] flex justify-center items-center gap-5 text-white py-9 rounded-xl">
                    <div className="md:text-6xl text-3xl">
                        <BiSolidPhoneCall/>
                    </div>
                    <div>
                        <p className="md:text-6xl font-bold text-xl">103</p>
                        <h2 className="md:text-4xl text-lg">Contact</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;