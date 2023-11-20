import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import dashboardbg from "../../assets/dashboard/image-5.jpg"

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Cover 
            bgImage={dashboardbg}
            title={"DashBoard"}
            details={"Would you like to try a dish?"}
            />
        </div>
    );
};

export default Dashboard;