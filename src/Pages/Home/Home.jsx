
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefRecommend from "./Chef Recommend/ChefRecommend";
import ChefService from "./Chef Service/ChefService";
import MenuDescription from "./Menu Description/MenuDescription";
import MenuList from "./Menu List/MenuList";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <ChefService/>
            <MenuList/>
            <ChefRecommend/>
            <MenuDescription/>
            <Testimonial/>
        </div>
    );
};

export default Home;