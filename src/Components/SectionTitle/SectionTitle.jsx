
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='space-y-5 mb-10'>
                <p className='text-[#D99904] text-xl italic text-center'>
                    --- {subHeading} ---
                </p>
                <hr className='w-[300px] bg-[#E8E8E8] mx-auto h-1 border-0 rounded-full'/>
                <p className='text-3xl text-center text-[#000000] font-semibold'>
                    {heading}
                </p>
                <hr className='w-[300px] bg-[#E8E8E8] mx-auto h-1 border-0 rounded-full'/>
            </div>
    );
};

export default SectionTitle;