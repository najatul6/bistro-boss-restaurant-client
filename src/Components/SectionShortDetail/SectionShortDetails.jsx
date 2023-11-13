
const SectionShortDetails = ({backgroundImage, title, details}) => {
    return (
        <div className='my-10'>
            <div className='relative justify-center flex items-center'>
                <img className='w-full blur-[1px]' src={backgroundImage} alt="" />
                <div className='bg-[#151515] bg-opacity-[60%] px-10 py-20 w-3/4 absolute space-y-5'>
                    <h2 className='text-3xl font-bold text-center text-white uppercase'>{title}</h2>
                    <p className='text-center text-white text-xl'>
                        {details}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionShortDetails;