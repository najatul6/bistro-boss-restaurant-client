import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import cartsbg from "../../assets/reservation/wood-grain-pattern-gray1x.png"

const MyCart = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Cover 
            bgImage={cartsbg}
            title={"OUR Carts"}
            details={"Would you like to try a dish?"}
            />
        </div>
    );
};

export default MyCart;