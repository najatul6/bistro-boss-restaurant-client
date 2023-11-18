import { Helmet } from "react-helmet-async";
import loginbg from "../../../assets/others/authentication.png"
import loginimg from "../../../assets/others/authentication1.png"
import { VscGithub } from "react-icons/vsc";
import { PiFacebookLogoBold } from "react-icons/pi";
import { AiFillGoogleCircle } from "react-icons/ai";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
    const [disabled, setDisabled] = useState(true);
    const { logIn, googleLogIn, facebookLogin, githubLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    // Email Log In
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "Log In Successful",
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

    // Facebook Log In
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
    }

    // Google Log In
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
    }

    // Github Log In
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
    }


    // Captcha Check
    const handleCaptchaValidation = e => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Sign In</title>
            </Helmet>
            <div className="min-h-screen py-8"
                style={{ backgroundImage: `url(${loginbg})` }}
            >
                <div className="shadow-2xl w-3/4 lg:py-20 mx-auto"
                    style={{ backgroundImage: `url(${loginbg})` }}
                >
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left md:w-1/2">
                            <img className="w-full" src={loginimg} alt="" />
                        </div>
                        <div className="card md:w-1/2 max-w-sm">
                            <form onSubmit={handleLogin} className="card-body" >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Type here" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="text-right">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleCaptchaValidation} type="text" name="captcha" placeholder="Type captcha here" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button disabled={disabled} type="submit" className="btn bg-[#dbb984] text-xl font-bold text-white">Sign In</button>
                                </div>
                            </form>
                            <div className="text-center space-y-5">
                                <p className="text-[#D1A054] text-xl">
                                    New here? <Link to="/signUp" className="font-bold">
                                        Create a New Account
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

export default LogIn;