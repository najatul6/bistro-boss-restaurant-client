import PropTypes from 'prop-types';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCarts from '../../Hooks/useCarts';

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiossecure = useAxiosSecure();
    const [ , refetch] = useCarts();

    // Add to Cart 
    const handleAddtoCart = () => {
        if (user && user?.email) {
            const cartsItem = {
                itemId: _id,
                userEmail: user?.email,
                itemName: name,
                itemPrice: price,
                image,
            }
            axiossecure.post('/carts', cartsItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: `${name}`,
                            text: `Food added to your cart`,
                            icon: "success"
                        });
                        refetch();
                    }
                })
        } else {
            Swal.fire({
                title: "Do you want to order this food?",
                text: "Please Log in Fast",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signIn', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-[#F3F3F3] text-[#151515] shadow-xl rounded-none">
            <div className='relative'>
                <img className='w-full h-[300px]' src={image} alt="Salad" />
                <p className='absolute py-2 px-2 bg-[#3d3d3d] text-white right-2 top-2 font-bold text-xl'>${price}</p>
            </div>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button
                        onClick={handleAddtoCart}
                        className="btn text-[#BB8506] border-b-[#BB8506] hover:border-b-[#BB8506] border-b-4 hover:bg-[#1F2937]">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.any,
}

export default FoodCard;