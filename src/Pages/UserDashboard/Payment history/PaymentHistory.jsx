import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure(`/payments/${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            <SectionTitle subHeading='History' heading='Payment History'></SectionTitle>
            <div className="bg-white mx-auto py-10 px-5 shadow-xl">

                <p className="text-xl mb-10 md:text-3xl uppercase font-bold">Total Payments: {payments?.length}</p>
                <div className="overflow-x-auto rounded-2xl">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-[#D1A054]">
                            <tr className="text-white font-bold">
                                <th></th>
                                <th>EMAIL</th>
                                <th>TRANSACTION ID</th>
                                <th>TOTAL PRICE</th>
                                <th>STATUS</th>
                                <th>PAYMENT DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments?.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>
                                            <label>
                                                <label>{index + 1}</label>
                                            </label>
                                        </th>
                                        <td>
                                            {item.email}
                                        </td>
                                        <td>
                                            {item.paymentId}
                                        </td>
                                        <td>{item.price}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            {item.date}
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

export default PaymentHistory;