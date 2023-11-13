import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import menubg2 from "../../assets/menu/banner3.jpg"
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import MenuItems from "../../Common/MenuItems";
import DetailsButton from "../../Components/Details Button/DetailsButton";
import Desserts from "./Desserts Item/Desserts";
import PizzaItem from "./Pizza Item/PizzaItem";
import SaladItem from "./Salad Item/SaladItem";
import SoupItem from "./Soup Item/SoupItem";

const OurMenu = () => {
    const [offerMenu, setOfferMenu]= useState();
    useEffect(()=>{
        fetch("/menu.json")
        .then(res => res.json())
        .then(data =>{
            const offeredItem =data.filter(item => item.category==='offered')
            setOfferMenu(offeredItem)
        })
    },[])
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
            <div className="my-16">
                <SectionTitle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-2 my-5">
                    {
                        offerMenu?.map(offerItem => <MenuItems key={offerItem._id} item={offerItem}></MenuItems>)
                    }
                </div>
                <div>
                    <DetailsButton
                    link={"/"}
                    btntext={"ORDER YOUR FAVOURITE FOOD"}
                    />
                </div>
            </div>

            <Desserts/>
            <PizzaItem/>
            <SaladItem/>
            <SoupItem/>
        </div>
    );
};

export default OurMenu;