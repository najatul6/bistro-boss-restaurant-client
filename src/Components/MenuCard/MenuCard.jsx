import { Link } from "react-router-dom";
import MenuItems from "../../Common/MenuItems";
import Cover from "../Cover/Cover";


const MenuCard = ({ items, bgImg, title, details }) => {

    return (
        <div className="my-16">
            <Cover
                bgImage={bgImg}
                title={title}
                details={details}
            />
            <div className="grid my-5 px-2 grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    items?.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div>
                <Link to={`/ourshop/${title}`} className="flex justify-center items-center">
                    <button className=" rounded-xl py-5 px-2 md:px-7 bg-transparent text-base md:text-xl hover:bg-[#1F2937] border-0 hover:text-white border-b-[#1F2937] border-b-4 hover:border-b-[#1F2937] ">
                        ORDER YOUR FAVOURITE FOOD
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCard;