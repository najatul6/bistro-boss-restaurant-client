import { AiFillBackward } from "react-icons/ai";
import { Link } from "react-router-dom";
import errorImg from "../assets/404.gif"

const ErrorPage = () => {
    return (
        <div className="max-w-[1440px] min-h-screen mx-auto">
            <div className="my-10">
                {/* <iframe  src="https://lottie.host/?file=72439316-aa0f-477f-9d34-e35cea1a671a/My7SiFoWgs.json"></iframe> */}
                <img className="w-full h-[500px] rounded-xl" src={errorImg} alt="" />
                <Link to='/'>
                    <button className="btn btn-outline btn-error w-full mt-2">
                        <AiFillBackward />
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;