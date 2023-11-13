import { Parallax } from 'react-parallax';

const Cover = ({ bgImage, title, details }) => {
    return (
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={bgImage}
                strength={-200}
            >
                <div className='bg-[url("${bgImage}")] w-full h-[300px] md:h-[500px] lg:h-[700px] flex justify-center items-center'>
                    <div className='bg-[#151515] bg-opacity-60 md:w-3/4 py-10 md:py-20 px-3 md:px-10 text-center text-white space-y-5'>
                        <h2 className='text-3xl md:text-5xl lg:text-7xl uppercase font-bold'>{title}</h2>
                        <p className='text-base md:text-xl uppercase text-center font-bold'>
                            {details}
                        </p>
                    </div>
                </div>
            </Parallax>
    );
};

export default Cover;