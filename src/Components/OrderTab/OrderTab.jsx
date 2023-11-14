import FoodCard from "../FoodCard/FoodCard";

const OrderTab = ({ items }) => {
    return (
        <div className="grid my-5 px-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                items?.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;