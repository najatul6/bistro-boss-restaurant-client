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
            <div>
                <SectionTitle
                    subHeading={"Don't miss"}
                    heading={"TODAY'S OFFER"}
                />
                <MenuCard
                items={offeredItem}
                />
            </div>
            
            {/* Dessert Items  */}
            <div>
                <Cover
                bgImage={dessertbg}
                title={"DESSERTS"}
                details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />
                <MenuCard
                    items={dessertItem}
                ></MenuCard>
            </div>

            {/* Pizza Items  */}
            <div>
                <Cover
                bgImage={pizzabg}
                title={"PIZZA"}
                details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />
                <MenuCard
                    items={pizzaItem}
                ></MenuCard>
            </div>

            {/* Salad Items  */}
            <div>
                <Cover
                bgImage={saladbg}
                title={"Salads"}
                details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />
                <MenuCard
                    items={saladItem}
                ></MenuCard>
            </div>

            {/* Soup Items  */}
            <div>
                <Cover
                bgImage={soupbg}
                title={"SOUPS"}
                details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />
                <MenuCard
                    items={soupItem}
                ></MenuCard>
            </div>
        </div>
    );
};

export default OurMenu;