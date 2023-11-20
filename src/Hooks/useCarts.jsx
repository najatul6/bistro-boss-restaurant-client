import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCarts = () => {
    const axiossecure = useAxiosSecure();
    const {user} = useAuth();

    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async()=>{
            const res = await axiossecure.get(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
    return [cart,refetch]
};

export default useCarts;