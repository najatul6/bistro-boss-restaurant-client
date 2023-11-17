import { Helmet } from "react-helmet-async";
import { VscGithub } from "react-icons/vsc";
import { PiFacebookLogoBold } from "react-icons/pi";
import { AiFillGoogleCircle } from "react-icons/ai";
import signupimg from "../../../assets/others/authentication2.png"
import signupbg from "../../../assets/others/authentication.png"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {createuser} = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data)
        createuser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
    }


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>

            <div className="min-h-screen py-8"
                style={{ backgroundImage: `url(${signupbg})` }}
            >
                <div className="shadow-2xl w-3/4 lg:py-20 mx-auto"
                    style={{ backgroundImage: `url(${signupbg})` }}
                >
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left md:w-1/2">
                            <img className="w-full" src={signupimg} alt="" />
                        </div>
                        <div className="card md:w-1/2 max-w-sm">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body" >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Type here" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600 font-bold">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="Type here" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600 font-bold">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", { required: true,
                                         minLength: 6,
                                          maxLength: 16,
                                          pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/,
                                          })} name="password" type="password" placeholder="Type here" className="input input-bordered" />
                                    {errors.password?.type === "required" && (<p className="text-red-600">Password is required</p>)}
                                    {errors.password?.type === "minLength" && (<p className="text-red-600">Password Must be 6 Characters</p>)}
                                    {errors.password?.type === "maxLength" && (<p className="text-red-600">Password Must be 16 Characters</p>)}
                                    {errors.password?.type === "pattern" && (<p className="text-red-600">Password Must have a uppercase, a lowercase and a spacial character</p>)}

                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-[#dbb984] text-xl font-bold text-white">Sign Up</button>
                                </div>
                            </form>
                            <div className="text-center space-y-5">
                                <p className="text-[#D1A054] text-xl">
                                    Already registered? <Link to='/signin' className="font-bold">
                                        Go to log in
                                    </Link>
                                </p>

                                <p className="text-[#444444] text-xl">
                                    Or sign in with
                                </p>
                                <div className="flex justify-center gap-6">
                                    <button className="md:text-4xl text-3xl text-[#444444]"><PiFacebookLogoBold /></button>
                                    <button className="md:text-4xl text-3xl text-[#444444]"><AiFillGoogleCircle /></button>
                                    <button className="md:text-4xl text-3xl text-[#444444]"><VscGithub /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;