import { Helmet } from "react-helmet-async";
import loginbg from "../../../assets/others/authentication.png"
import loginimg from "../../../assets/others/authentication1.png"
import { VscGithub } from "react-icons/vsc";
import { PiFacebookLogoBold } from "react-icons/pi";
import { AiFillGoogleCircle } from "react-icons/ai";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";

const LogIn = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [validation, setValidation] = useState('Validation')
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    const handleCaptchaValidation = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
            setValidation('Validation Successfull')
        }
   
        else {
            setValidation('Wrong Chaptcha')
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
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
                                    <input type="email" name="email" placeholder="Enter YOur Email" className="input input-bordered" required />
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
                                    <input ref={captchaRef} type="text" name="captcha" placeholder="Type captcha here" className="input input-bordered" required />
                                    <button onClick={handleCaptchaValidation} className="btn btn-outline btn-xs mt-4">{validation}</button>
                                </div>
                                <div className="form-control mt-6">
                                    <button disabled={disabled} type="submit" className="btn bg-[#dbb984] text-xl font-bold text-white">Sign In</button>
                                </div>
                            </form>
                            <div className="text-center space-y-5">
                                <p className="text-[#D1A054] text-xl">
                                    New here? <span className="font-bold">
                                        Create a New Account
                                    </span>
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

export default LogIn;