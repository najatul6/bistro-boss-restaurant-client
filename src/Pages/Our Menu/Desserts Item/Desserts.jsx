import Cover from "../../../Components/Cover/Cover";
import DessrtBg from "../../../assets/menu/dessert-bg.jpeg"
import MenuItems from "../../../Common/MenuItems";
import DetailsButton from "../../../Components/Details Button/DetailsButton";
import useMenu from "../../../Hooks/useMenu";

const Desserts = () => {
    const [menu] = useMenu();
    const dessertItems = menu.filter(item => item.category === 'dessert')
    // const [dessert, setDessert] = useState()
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const dessertItems = data.filter(dessert => dessert.category === 'dessert')
    //             setDessert(dessertItems)
    //         })
    // }, [])
    return (
        <div>
            <Cover
                bgImage={DessrtBg}
                title={"DESSERTS"}
                details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            />
            <div className="my-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-5">
                    {
                        dessertItems?.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
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

export default Desserts;