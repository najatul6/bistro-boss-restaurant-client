import { IoWallet } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie,  Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data
        }
    })


    // Custom Bar Chart 
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom for Pie chart 
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    // const totalRevenue = typeof stats.revenue === 'number' ? stats.revenue.toFixed(2) : 'N/A';
    const pieChartData = chartData.map(data=>{
        return {name:data.category, value:data.revenue}
    })
    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold">Hi, Welcome Back!</h2>
                <div className="grid grid-cols-4 items-center text-center gap-6 my-10">
                    <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex justify-center items-center gap-5 text-white py-9 px-5 rounded-xl">
                        <div className="md:text-6xl text-3xl">
                            <IoWallet />
                        </div>
                        <div className="">
                            <p className="md:text-2xl font-bold text-xl">
                                {/* ${totalRevenue} */}
                                ${stats.revenue}
                            </p>
                            <h2 className="md:text-4xl text-lg">Revenue</h2>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] flex justify-center items-center gap-5 text-white py-9 px-5 rounded-xl">
                        <div className="md:text-6xl text-3xl">
                            <FaUsers />
                        </div>
                        <div>
                            <p className="md:text-2xl font-bold text-xl">{stats.users}</p>
                            <h2 className="md:text-4xl text-lg">Customers</h2>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] flex justify-center items-center gap-5 text-white py-9 px-5 rounded-xl">
                        <div className="md:text-6xl text-3xl">
                            <GiCook />
                        </div>
                        <div>
                            <p className="md:text-2xl font-bold text-xl">{stats.menuItems}</p>
                            <h2 className="md:text-4xl text-lg">Products</h2>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] flex justify-center items-center gap-5 text-white py-9 px-5 rounded-xl">
                        <div className="md:text-6xl text-3xl">
                            <FaShippingFast />
                        </div>
                        <div>
                            <p className="md:text-2xl font-bold text-xl">{stats.orders}</p>
                            <h2 className="md:text-4xl text-lg">Orders</h2>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6 md:flex-row flex-col">
                    <div className="w-1/2">
                        <BarChart
                            width={500}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Bar dataKey="revenue" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </div>
                    <div className="w-1/2">
                        <PieChart width={400} height={400}>
                            <Legend></Legend>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;