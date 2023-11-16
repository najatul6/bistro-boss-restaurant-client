import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import contactbg from "../../assets/contact/banner.jpg"
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { AiFillPhone, AiOutlineFieldTime } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "./Contact Form/ContactForm";

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
            <div className="my-10">
                <SectionTitle
                    subHeading={"Visit Us"}
                    heading={"OUR LOCATION"}
                />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5">
                    <div className="border-2 border-[#E8E8E8] ">
                        <p className="text-3xl font-bold text-white bg-[#D1A054] text-center py-6 flex justify-center items-center"><AiFillPhone /></p>
                        <div className="bg-[#F3F3F3] mx-8 mb-8 flex gap-3 flex-col justify-center items-center py-10">
                            <h2 className="text-2xl font-bold">PHONE</h2>
                            <p>+88 01773827414</p>
                        </div>
                    </div>
                    <div className="border-2 border-[#E8E8E8] ">
                        <p className="text-3xl font-bold text-white bg-[#D1A054] text-center py-6 flex justify-center items-center"><FaLocationDot /></p>
                        <div className="bg-[#F3F3F3] mx-8 mb-8 flex gap-3 flex-col justify-center items-center py-10">
                            <h2 className="text-2xl font-bold">ADDRESS</h2>
                            <p>Ulipur, Kurigram, Rangpur, Bangladesh</p>
                        </div>
                    </div>
                    <div className="border-2 border-[#E8E8E8] ">
                        <p className="text-3xl font-bold text-white bg-[#D1A054] text-center py-6 flex justify-center items-center"><AiOutlineFieldTime /></p>
                        <div className="bg-[#F3F3F3] mx-8 mb-8 flex gap-3 flex-col justify-center items-center py-10">
                            <h2 className="text-2xl font-bold">WORKING HOURS</h2>
                            <p>Mon - Fri: 08:00 - 22:00</p>
                            <p>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
                <div className="my-10">
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
};

export default Contact;