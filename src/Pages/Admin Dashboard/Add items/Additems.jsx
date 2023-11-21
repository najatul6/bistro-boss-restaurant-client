import { IoIosRestaurant } from "react-icons/io";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"

const Additems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <SectionTitle
                subHeading="What's new?"
                heading="ADD AN ITEM"
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
                                {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled selected>Category</option>
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
                                {...register("price", { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* Recipe Details  */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe", { required: true, minLength: 50 })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </div>

                    {/* Image Upload  */}
                    <div className="form-control w-full my-6">
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="file-input" />
                    </div>

                    <button
                        // type="submit"
                        className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white text-xl rounded-none">
                        Add item <IoIosRestaurant />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Additems;