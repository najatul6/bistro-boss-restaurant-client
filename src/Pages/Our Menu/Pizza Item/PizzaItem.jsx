import { useEffect, useState } from "react";
import Cover from "../../../Components/Cover/Cover";
import MenuItems from "../../../Common/MenuItems";
import DetailsButton from "../../../Components/Details Button/DetailsButton";
import pizzabg from "../../../assets/menu/pizza-bg.jpg"

const PizzaItem = () => {
    const [pizzas, setPizzas] = useState()
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const pizzaItems = data.filter(pizza => pizza.category === 'pizza')
                setPizzas(pizzaItems)
            })
    }, [])
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
                        pizzas?.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
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