import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import menubg2 from "../../assets/menu/banner3.jpg"
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import MenuCard from "../../Components/MenuCard/MenuCard";
import saladbg from "../../assets/menu/salad-bg.jpg";
import soupbg from "../../assets/menu/soup-bg.jpg";
import pizzabg from "../../assets/menu/pizza-bg.jpg";
import dessertbg from "../../assets/menu/dessert-bg.jpeg";
import MenuItems from "../../Common/MenuItems";
import { Link } from "react-router-dom";

const OurMenu = () => {
    const [menu] = useMenu();
    const saladItem = menu.filter(item => item.category === 'salad')
    const pizzaItem = menu.filter(item => item.category === 'pizza')
    const soupItem = menu.filter(item => item.category === 'soup')
    const dessertItem = menu.filter(item => item.category === 'dessert')
    const offeredItem = menu.filter(item => item.category === 'offered')
    // const popularItem = menu.filter(item => item.category === 'popular')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                bgImage={menubg2}
                title={"OUR MENU"}
                details={"Would you like to try a dish?"}
            />

            {/* Offered Item  */}
            <div className="my-24">
                <SectionTitle
                    subHeading={"Don't miss"}
                    heading={"TODAY'S OFFER"}
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        offeredItem?.map(item => <MenuItems key={item?._id} item={item}></MenuItems>)
                    }
                </div>
                <Link to="/ourshop/Offer" className="flex justify-center items-center my-5">
                    <button className=" rounded-xl py-5 px-2 md:px-7 bg-transparent text-base md:text-xl hover:bg-[#1F2937] border-0 hover:text-white border-b-[#1F2937] border-b-4 hover:border-b-[#1F2937] ">
                        ORDER YOUR FAVOURITE FOOD
                    </button>
                </Link>
            </div>

            {/* Dessert Items  */}
            <MenuCard items={dessertItem} bgImg={dessertbg} title="DESSERTS"
                details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCard>

            {/* Pizza Items  */}
            <MenuCard
                items={pizzaItem} bgImg={pizzabg} title={"PIZZA"}
                details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCard>

            {/* Salad Items  */}
            <MenuCard
                items={saladItem} title={"Salads"} bgImg={saladbg}
                details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCard>

            {/* Soup Items  */}
            <MenuCard
                items={soupItem} bgImg={soupbg} title={"SOUPS"}
                details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCard>
        </div>
    );
};

export default OurMenu;