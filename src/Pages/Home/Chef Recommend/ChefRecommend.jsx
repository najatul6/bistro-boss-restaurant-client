import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import saladImg from "../../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"

const ChefRecommend = () => {
    return (
        <div className="my-10">
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 my-10">
                <div className="card bg-[#F3F3F3] text-[#151515] shadow-xl rounded-none">
                    <img src={saladImg} alt="Salad" />
                    <div className="card-body items-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn text-[#BB8506] border-b-[#BB8506] border-b-4 hover:bg-[#1F2937] hover:border-0">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#F3F3F3] text-[#151515] shadow-xl rounded-none">
                    <img src={pizzaImg} alt="Pizza" />
                    <div className="card-body items-center">
                        <h2 className="card-title">Pizza</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn text-[#BB8506] border-b-[#BB8506] border-b-4 hover:bg-[#1F2937] hover:border-0">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#F3F3F3] text-[#151515] shadow-xl rounded-none">
                    <img src={soupImg} alt="Soup" />
                    <div className="card-body items-center">
                        <h2 className="card-title">Soup</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn text-[#BB8506] border-b-[#BB8506] border-b-4 hover:bg-[#1F2937] hover:border-0">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommend;