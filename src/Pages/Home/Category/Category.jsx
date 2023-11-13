import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

// Image Import 
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='max-w-[1920px] mx-auto my-10'>
            <SectionTitle 
            heading={"ORDER ONLINE"}
            subHeading={"From 11:00am to 10:00pm"}
            ></SectionTitle>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full' src={slider1} alt="" />
                    <h2 className='text-3xl font-bold text-white -mt-12 pb-5 uppercase text-center'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slider2} alt="" />
                    <h2 className='text-3xl font-bold text-white -mt-12 pb-5 uppercase text-center'>pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slider5} alt="" />
                    <h2 className='text-3xl font-bold text-white -mt-12 pb-5 uppercase text-center'>desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slider3} alt="" />
                    <h2 className='text-3xl font-bold text-white -mt-12 pb-5 uppercase text-center'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slider4} alt="" />
                    <h2 className='text-3xl font-bold text-white -mt-12 pb-5 uppercase text-center'>Cake</h2>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;