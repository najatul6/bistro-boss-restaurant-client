import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import shopbg from "../../assets/shop/banner2.jpg"

const OurShop = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Cover 
            bgImage={shopbg}
            title={"OUR SHOP"}
            details={"Would you like to try a dish?"}
            />
        </div>
    );
};

export default OurShop;