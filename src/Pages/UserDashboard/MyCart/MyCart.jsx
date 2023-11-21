import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCarts from "../../../Hooks/useCarts";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyCart = () => {
    const [cart, refetch] = useCarts();
    const totalPrice = cart.reduce((total, item) => total + item.itemPrice, 0);
    const axiossecure = useAxiosSecure();

    const handleDeleteitem = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiossecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        else{
                            Swal.fire({
                                title: "Opps!",
                                text: "Your file isn't deleted.",
                                icon: "warning"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="">
                <SectionTitle
                    subHeading="My Cart"
                    heading="WANNA ADD MORE?"
                ></SectionTitle>
                <div className="bg-white mx-auto py-10 px-5 shadow-xl">
                    <div className="flex justify-evenly items-center  mb-10">
                        <p className="text-xl md:text-3xl uppercase font-bold">Total orders: {cart.length}</p>
                        <p className="text-xl md:text-3xl uppercase font-bold">total price: {totalPrice}</p>
                        <button className="btn bg-[#D1A054]">Pay</button>
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
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart?.map((item, index) =>
                                        <tr key={item._id}>
                                            <th>
                                                <label>
                                                    <label>{index + 1}</label>
                                                </label>
                                            </th>
                                            <td>
                                                <div className="">
                                                    <div className="avatar">
                                                        <div className="rounded  w-12 h-12">
                                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.itemName}
                                            </td>
                                            <td>{item.itemPrice}</td>
                                            <td>
                                                <button
                                                    onClick={() => handleDeleteitem(item._id)}
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

        </div>
    );
};

export default MyCart;