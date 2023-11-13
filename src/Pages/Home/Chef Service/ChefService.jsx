import bgimg from '../../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className='my-10'>
            <div className='relative justify-center flex items-center'>
                <img className='w-full h-[400px] lg:h-auto blur-[1px]' src={bgimg} alt="" />
                <div className='bg-white lg:px-10 lg:py-20 py-2 w-3/4 h-3/4 absolute space-y-5'>
                    <h2 className='text-xl md:text-3xl font-bold text-center text-[#151515] uppercase'>Bistro Boss</h2>
                    <p className='text-center text-[#151515] text-base md:text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChefService;