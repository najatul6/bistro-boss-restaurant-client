import { Helmet } from "react-helmet-async";
import { VscGithub } from "react-icons/vsc";
import { PiFacebookLogoBold } from "react-icons/pi";
import { AiFillGoogleCircle } from "react-icons/ai";
import signupimg from "../../../assets/others/authentication2.png"
import signupbg from "../../../assets/others/authentication.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { createuser,logOut, updateUserProfile, googleLogIn, facebookLogin, githubLogIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const [signError, setsignError] = useState();
    const from = location.state?.from?.pathname || "/";

    // Sign in with Email Password
    const onSubmit = (data) => {
        createuser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        Swal.fire({
                            title: "User Created Successful",
                            showClass: {
                                popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                            },
                            hideClass: {
                                popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                            }
                        });
                        reset();
                        logOut()
                        navigate('/signIn');
                    })
                    .catch(error=>{
                        console.log(error)
                    })
            })
            .catch(error => {
                setsignError(error.code)
            })
    };


    // Facebook Sign In
    const handleFacebookLogIn = e => {
        e.preventDefault();
        facebookLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "Log In Successful With Facebook",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInDown
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutUp
                    animate__faster
                  `
                    }
                });
                navigate(from, { replace: true });
            })
    };

    // Google Sign In
    const handleGoogleLogIn = e => {
        e.preventDefault();
        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "Log In Successful With Google",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInDown
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutUp
                    animate__faster
                  `
                    }
                });
                navigate(from, { replace: true });
            })
    };

    // Github Sign In
    const handleGithubLogIn = e => {
        e.preventDefault();
        githubLogIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "Log In Successful With Github",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInDown
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutUp
                    animate__faster
                  `
                    }
                });
                navigate(from, { replace: true });
            })
    };


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
                                {/* Name Field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name*</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Type here" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600 font-bold">Name is required</span>}
                                </div>

                                {/* PhotoUrl Field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoUrl*</span>
                                    </label>
                                    <input type="text" {...register("photoUrl", { required: true })} name="photoUrl" placeholder="Paste it here" className="input input-bordered" />
                                    {errors.photoUrl && <span className="text-red-600 font-bold">PhotoUrl is required</span>}
                                </div>

                                {/* Email Field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email*</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="Type here" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600 font-bold">Email is required</span>}
                                </div>

                                {/* Password Field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password*</span>
                                    </label>
                                    <input {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 16,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/,
                                    })} name="password" type="password" placeholder="Type here" className="input input-bordered" />
                                    {errors.password?.type === "required" && (<p className="text-red-600">Password is required</p>)}
                                    {errors.password?.type === "minLength" && (<p className="text-red-600">Password Must be 6 Characters</p>)}
                                    {errors.password?.type === "maxLength" && (<p className="text-red-600">Password Must be 16 Characters</p>)}
                                    {errors.password?.type === "pattern" && (<p className="text-red-600">Password Must have a uppercase, a lowercase and a spacial character</p>)}

                                </div>
                                {
                                    errors ? <p className="text-lg font-bold text-red-600">{signError}</p> : ''
                                }
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
                                    <button onClick={handleFacebookLogIn} className="md:text-4xl text-3xl text-[#444444]"><PiFacebookLogoBold /></button>
                                    <button onClick={handleGoogleLogIn} className="md:text-4xl text-3xl text-[#444444]"><AiFillGoogleCircle /></button>
                                    <button onClick={handleGithubLogIn} className="md:text-4xl text-3xl text-[#444444]"><VscGithub /></button>
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