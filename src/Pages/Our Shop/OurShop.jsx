import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import shopbg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";

const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0);

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
                <div className="flex justify-center items-center">
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>Salad</Tab>
                            <Tab>pizza</Tab>
                            <Tab>soups</Tab>
                            <Tab>desserts</Tab>
                            <Tab>drinks</Tab>
                        </TabList>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default OurShop;