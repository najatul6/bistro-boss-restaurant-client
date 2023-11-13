import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../../Common/MenuItems";
import { Link } from "react-router-dom";

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
            <Link to='/' className="flex justify-center items-center my-5">
                <button className="btn border-t-0 border-l-0 border-r-0 bg-transparent text-xl hover:bg-[#1F2937] hover:border-0 py-2 hover:text-white border-[#1F2937] border-b-4 ">View Full  Menu</button>
            </Link>
            <div className="bg-[#151515] py-24 text-center w-full text-3xl md:text-4xl lg:text-5xl text-white">
                <p>
                    Call Us: +88 01773827414
                </p>
            </div>
        </section>
    );
};

export default MenuList;