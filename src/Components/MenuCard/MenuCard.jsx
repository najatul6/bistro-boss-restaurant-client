import MenuItems from "../../Common/MenuItems";
import DetailsButton from "../Details Button/DetailsButton";


const MenuCard = ({ items }) => {
    return (
        <div className="my-16">
            <div className="grid my-5 px-2 grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    items?.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div>
                <DetailsButton
                    link={"/"}
                    btntext={"ORDER YOUR FAVOURITE FOOD"}
                />
            </div>
        </div>
    );
};

export default MenuCard;