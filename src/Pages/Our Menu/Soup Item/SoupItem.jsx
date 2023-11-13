import { useEffect, useState } from "react";
import Cover from "../../../Components/Cover/Cover";
import MenuItems from "../../../Common/MenuItems";
import DetailsButton from "../../../Components/Details Button/DetailsButton";
import soupbg from "../../../assets/menu/soup-bg.jpg"

const SoupItem = () => {
    const [soups, setSoups] = useState()
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const soupsItems = data.filter(soup => soup.category === 'soup')
                setSoups(soupsItems)
            })
    }, [])
    return (
        <div>
            <Cover
                bgImage={soupbg}
                title={"Soups"}
                details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            />
            <div className="my-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-5">
                    {
                        soups?.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
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

export default SoupItem;