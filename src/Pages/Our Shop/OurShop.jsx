import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import shopbg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "../../Components/OrderTab/OrderTab";

const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const saladItem = menu.filter(item => item.category === 'salad')
    const pizzaItem = menu.filter(item => item.category === 'pizza')
    const soupItem = menu.filter(item => item.category === 'soup')
    const dessertItem = menu.filter(item => item.category === 'dessert')
    const drinksItem = menu.filter(item => item.category === 'drinks')
    const offeredItem = menu.filter(item => item.category === 'offered')
    const popularItem = menu.filter(item => item.category === 'popular')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Cover
                bgImage={shopbg}
                title={"Order Now"}
                details={"Would you like to try a dish?"}
            />
            <div className="my-20">
                <div className="text-center">
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>Popular</Tab>
                            <Tab>Offer</Tab>
                            <Tab>Salad</Tab>
                            <Tab>pizza</Tab>
                            <Tab>soups</Tab>
                            <Tab>desserts</Tab>
                            <Tab>drinks</Tab>
                        </TabList>
                        <TabPanel>
                            <OrderTab items={popularItem} />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={offeredItem} />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={saladItem} />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={pizzaItem} />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={soupItem} />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={dessertItem} />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={drinksItem} />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default OurShop;