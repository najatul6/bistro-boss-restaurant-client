import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Manageitems = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    // Delete Item 
    const handleDeleteItem = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted.`,
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    }
    return (
        <div>
            <SectionTitle
                subHeading="Hurry Up!"
                heading="MANAGE ALL ITEMS"
            ></SectionTitle>
            <div className="bg-white mx-auto py-10 px-5 shadow-xl rounded-xl">
                <div className="items-center  mb-10">
                    <p className="text-xl md:text-3xl uppercase font-bold">Total Items: {menu?.length}</p>
                </div>
                <div className="overflow-x-auto rounded-2xl">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-[#D1A054]">
                            <tr className="text-white font-bold">
                                <th></th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu?.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>
                                            <label>
                                                <label>{index + 1}</label>
                                            </label>
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className="rounded  w-12 h-12">
                                                    <img src={item.image} alt="" />
                                                </div>
                                            </div>

                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            <Link to={`/dashboard/updatateItem/${item._id}`}>
                                                <button className="btn btn-ghost btn-md text-2xl text-white bg-[#B91C1C] hover:text-[#B91C1C]">
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDeleteItem(item)}
                                                className="btn btn-ghost btn-md text-2xl text-white bg-[#B91C1C] hover:text-[#B91C1C]"><MdDeleteForever /></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manageitems;