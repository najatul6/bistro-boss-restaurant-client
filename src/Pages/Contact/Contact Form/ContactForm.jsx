import Recaptcha from "react-recaptcha";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

const ContactForm = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"Send Us a Message"}
                heading={"CONTACT FORM"}
            ></SectionTitle>
            <div className="bg-[#F3F3F3] p-5 md:p-20 mx-5">
                <form className="space-y-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="md:w-1/2">
                            <label className="text-xl font-bold text-[#444]">
                                Name*
                            </label>
                            <input type="text" name="name" id="" placeholder="Enter your name" className="w-full py-5 px-7 bg-white rounded-xl shadow-xl" required />
                        </div>

                        <div className="md:w-1/2 ">
                            <label className="text-xl font-bold text-[#444]">
                                Email*
                            </label>
                            <input type="text" name="name" id="" placeholder="Enter your email" className="w-full py-5 px-7 bg-white rounded-xl shadow-xl" required />
                        </div>
                    </div>

                    <div className="">
                        <label className="text-xl font-bold text-[#444]">
                            Phone*
                        </label>
                        <input type="text" name="name" id="" placeholder="Enter your phone number" className="w-full py-5 px-7 bg-white rounded-xl shadow-xl" required />
                    </div>
                    <div className="">
                        <label className="text-xl font-bold text-[#444]">
                            Message*
                        </label>
                        <textarea name="" placeholder="Write your message here" id="" cols="20" rows="5" className="w-full py-5 px-7 bg-white rounded-xl shadow-xl" required></textarea>
                    </div>

                    <Recaptcha
                        sitekey="xxxxxxxxxxxxxxxxxxxx"
                        type="audio"
                    />

                    <div className="flex justify-center items-center">
                        <Link to="/">
                            <button type="submit" className="btn text-white text-xl font-bold flex justify-center items-center gap-3 bg-gradient-to-r from-[#835D23] to-[#B58130]">
                                Send Message <IoIosSend className="text-2xl font-bold text-white" />
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;