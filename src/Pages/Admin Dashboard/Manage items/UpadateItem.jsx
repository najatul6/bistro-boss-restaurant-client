import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpadateItem = () => {
    const { name, recipe, category, price, _id } = useLoaderData();

    const { register, handleSubmit, } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        // Upload this image and get a url and set it 
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price),
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            if (menuRes.data.modifiedCount > 0) {
                // reset();
                Swal.fire(`${data.name} is Updated!`);
            }
        }
    }
    return (

        <div>
            <SectionTitle
                subHeading="What's new?"
                heading="UPDATE ITEM"
            ></SectionTitle>
            <div className="bg-white mx-auto py-10 px-5 shadow-xl rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Recipe name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe name"
                            defaultValue={name}
                            {...register("name", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* Category section  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Category*</span>
                            </label>
                            <select
                                defaultValue={category}
                                {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Category</option>
                                <option value="popular">Popular</option>
                                <option value="offered">Offer</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Desserts</option>
                                <option value="soup">Soups</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* Price section  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                defaultValue={price}
                                {...register("price", { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* Recipe Details  */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe", { required: true, minLength: 20 })} defaultValue={recipe} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </div>

                    {/* Image Upload  */}
                    <div className="form-control w-full my-6">
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="file-input" />
                    </div>

                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white text-xl rounded-none">
                            Update Recipe Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpadateItem;