import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../../Common/MenuItems";
import DetailsButton from "../../../Components/Details Button/DetailsButton";

const MenuList = () => {
    const [menu, setMenu] = useState();
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  my-5 px-1">
                {
                    menu?.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div>
                <DetailsButton
                    link={'/ourmenu'}
                    btntext={"View Full  Menu"}
                />
            </div>
            <div className="bg-[#151515] py-24 text-center w-full text-3xl md:text-4xl lg:text-5xl text-white">
                <p>
                    Call Us: +88 01773827414
                </p>
            </div>
        </section>
    );
};

export default MenuList;