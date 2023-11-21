import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth();
    const axiossecure = useAxiosSecure()
    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiossecure.get(`/users/admin/${user?.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin]
};

export default useAdmin;