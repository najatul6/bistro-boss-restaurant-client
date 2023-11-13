import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg"

const MenuDescription = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${featureImg})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "100%",
                backgroundBlendMode:"darken"
            }}
            className="flex justify-center items-center">
            <div className="md:p-14 bg-black bg-opacity-60 text-white">
                <SectionTitle
                    subHeading={"Check it out"}
                    heading={"FROM OUR MENU"}
                ></SectionTitle>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img className="md:w-1/2" src={featureImg} alt="" />
                    <div className="md:w-1/2 space-y-2">
                        <h4 className="text-2xl"> March 20, 2023</h4>
                        <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
                        <p className="text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="btn text-white bg-transparent border-b-white border-b-4 hover:bg-[#1F2937] border-0 text-xl font-bold">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuDescription;