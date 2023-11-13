import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import contactbg from "../../assets/contact/banner.jpg"

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Cover 
            bgImage={contactbg}
            title={"CONTACT US"}
            details={"Would you like to try a dish?"}
            />
        </div>
    );
};

export default Contact;