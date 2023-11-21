import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { MdDeleteForever } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Allusers = () => {
    const axiossecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiossecure.get('/users');
            return res.data
        }
    })

    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to make admin ${user.name}`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiossecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Success!",
                                text: `${user.name} is now Admin Role`,
                                icon: "success"
                            });
                        }
                        else {
                            Swal.fire({
                                title: "Opps!",
                                text: `${user.name} is not Admin Role`,
                                icon: "warning"
                            });
                        }
                    })
            }
        });
    }

    const handleDeleteUser = id => {
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
                axiossecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        else {
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
                <title>Bistro Boss | Manage User</title>
            </Helmet>
            <SectionTitle
                subHeading="How many??"
                heading="MANAGE ALL USERS"
            ></SectionTitle>

            <div className="bg-white mx-auto py-10 px-5 shadow-xl">
                <div className="items-center  mb-10">
                    <p className="text-xl md:text-3xl uppercase font-bold">Total users: {users.length}</p>
                </div>

                <div className="overflow-x-auto rounded-2xl">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-[#D1A054]">
                            <tr className="text-white font-bold">
                                <th></th>
                                <th>Name</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>
                                            <label>
                                                <label>{index + 1}</label>
                                            </label>
                                        </th>
                                        <td>
                                            {user.name}
                                        </td>
                                        <td>
                                            {user.email}
                                        </td>
                                        <td>
                                            {
                                                user.role === 'admin' ? 'Admin' :
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="btn btn-ghost btn-md bg-[#D1A054] text-white text-2xl">
                                                    <TiGroup />
                                                </button>
                                            }
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDeleteUser(user._id)}
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

export default Allusers;