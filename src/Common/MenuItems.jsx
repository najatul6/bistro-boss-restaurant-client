
const MenuItems = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="font-bold flex gap-5 items-center flex-col md:flex-row">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[118px] h-[104px]" src={image} alt="" />
            <div>
                <h2 className="text-3xl font-bold">{name} ------------------</h2>
                <p className="text-xl">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-xl">${price}</p>
        </div>
    );
};

export default MenuItems;