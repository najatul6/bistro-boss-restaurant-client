import PropTypes from 'prop-types';

const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="card bg-[#F3F3F3] text-[#151515] shadow-xl rounded-none">
            <div className='relative'>
                <img src={image} alt="Salad" />
                <p className='absolute py-2 px-2 bg-[#111827] text-white right-0 top-1 font-bold text-xl'>${price}</p>
            </div>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn text-[#BB8506] border-b-[#BB8506] border-b-4 hover:bg-[#1F2937] hover:border-0">add to cart</button>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes={
    item : PropTypes.array,
}

export default FoodCard;