import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { Rating, Star } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const myStyles = {
    itemShapes: Star,
    activeFillColor: '#CD9003',
    inactiveFillColor: '#A1A1A1'
}

const Testimonial = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="my-10">
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={"TESTIMONIALS"}
            />
            <div>
                <Swiper
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper">
                    {
                        reviews?.map(review => <SwiperSlide
                            key={review?._id}
                        >
                            <div className="md:m-24 flex flex-col justify-center items-center space-y-8">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    itemStyles={myStyles}
                                    value={review?.rating}
                                    readOnly
                                />
                                <BiSolidQuoteLeft className="text-7xl font-bold" />
                                <p className="text-center text-xl">
                                    {review?.details}
                                </p>
                                <h2 className="text-[#CD9003] text-3xl font-bold">
                                    {review?.name}
                                </h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;