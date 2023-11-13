import Cover from "../../../Components/Cover/Cover";
import MenuItems from "../../../Common/MenuItems";
import DetailsButton from "../../../Components/Details Button/DetailsButton";
import pizzabg from "../../../assets/menu/pizza-bg.jpg"
import useMenu from "../../../Hooks/useMenu";

const PizzaItem = () => {
    const [menu] = useMenu();
    const pizzaItems = menu.filter(item => item.category === 'pizza')


    return (
        <div>
            <Cover
                bgImage={pizzabg}
                title={"PIZZAs"}
                details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            />
            <div className="my-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-5">
                    {
                        pizzaItems?.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
                <DetailsButton
                    link={"/"}
                    btntext={"ORDER YOUR FAVOURITE FOOD"}
                />
            </div>
        </div>
    );
};

export default PizzaItem;