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
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} />
                    <select
                        {...register("category")}
                        className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Category</option>
                        <option value="popular">Popular</option>
                        <option value="offered">Offer</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="dessert">Desserts</option>
                        <option value="soup">Soups</option>
                        <option value="drinks">Drinks</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Additems;