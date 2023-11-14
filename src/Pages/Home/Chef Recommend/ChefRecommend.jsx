// import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Link } from "react-router-dom";
import OrderTab from "../../../Components/OrderTab/OrderTab";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";

const ChefRecommend = () => {
    const [menu] = useMenu();
    const popularItem = menu.filter(item => item.category === 'popular');
    return (
        <div className="my-10">
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>

            <OrderTab
                items={popularItem}
            ></OrderTab>
            <Link to={`/ourshop/Popular`} className="flex justify-center items-center">
                <button className=" rounded-xl py-5 px-2 md:px-7 bg-transparent text-base md:text-xl hover:bg-[#1F2937] border-0 hover:text-white border-b-[#1F2937] border-b-4 hover:border-b-[#1F2937] ">
                    ORDER YOUR FAVOURITE FOOD
                </button>
            </Link>
        </div>
    );
};

export default ChefRecommend;