import { Link } from "react-router-dom";

const DetailsButton = ({ btntext, link }) => {
    return (
        <div className="flex justify-center items-center my-5">

            <Link to={link}>
                <button className=" rounded-xl py-5 px-2 md:px-7 bg-transparent text-base md:text-xl hover:bg-[#1F2937] border-0 hover:text-white border-b-[#1F2937] border-b-4 hover:border-b-[#1F2937] ">
                    {btntext}
                </button>
            </Link>
        </div>
    );
};

export default DetailsButton;