
import { VscGithub } from "react-icons/vsc";
import { PiFacebookLogoBold } from "react-icons/pi";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const SocialLogIn = () => {
    const { googleLogIn, facebookLogin, githubLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const axiosPublic = useAxiosPublic();

    // Facebook Sign In
    const handleFacebookLogIn = e => {
        e.preventDefault();
        facebookLogin()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data) {
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
                        }
                    })

            })
    };

    // Google Sign In
    const handleGoogleLogIn = e => {
        e.preventDefault();
        googleLogIn()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data) {
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
                        }
                    })
            })
    };

    // Github Sign In
    const handleGithubLogIn = e => {
        e.preventDefault();
        githubLogIn()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data) {
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
                        }
                    })
            })
    };
    return (
        <div className="flex justify-center gap-6">
            <button onClick={handleFacebookLogIn} className="md:text-4xl text-3xl text-[#444444]"><PiFacebookLogoBold /></button>
            <button onClick={handleGoogleLogIn} className="md:text-4xl text-3xl text-[#444444]"><AiFillGoogleCircle /></button>
            <button onClick={handleGithubLogIn} className="md:text-4xl text-3xl text-[#444444]"><VscGithub /></button>
        </div>
    );
};

export default SocialLogIn;