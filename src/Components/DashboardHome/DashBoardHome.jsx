import PropTypes from "prop-types";

const DashBoardHome = ({firstIcon, firstCount,firstName, secondIcon, secondCount, secondName,thirdIcon,thirdCount, thirdName}) => {
    return (
        <div className="grid grid-cols-3 items-center gap-6 my-6">
            <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex justify-center items-center gap-3 text-white py-9 rounded-xl">
                <div className="md:text-5xl text-3xl">
                    {firstIcon}
                </div>
                <div>
                    <p className="md:text-4xl font-bold text-xl">{firstCount}</p>
                    <h2 className="md:text-2xl text-lg">{firstName}</h2>
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] flex justify-center items-center gap-3 text-white py-9 rounded-xl">
                <div className="md:text-5xl text-3xl">
                    {secondIcon}
                </div>
                <div>
                    <p className="md:text-4xl font-bold text-xl">{secondCount}</p>
                    <h2 className="md:text-2xl text-lg">{secondName}</h2>
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] flex justify-center items-center gap-3 text-white py-9 rounded-xl">
                <div className="md:text-5xl text-3xl">
                    {thirdIcon}
                </div>
                <div>
                    <p className="md:text-4xl font-bold text-xl">{thirdCount}</p>
                    <h2 className="md:text-2xl text-lg">{thirdName}</h2>
                </div>
            </div>
        </div>
    );
};

DashBoardHome.propTypes = {
    firstIcon:PropTypes.any,
    firstCount:PropTypes.any,
    firstName:PropTypes.any,
    secondIcon:PropTypes.any,
    secondCount:PropTypes.any, 
    secondName:PropTypes.any,
    thirdIcon:PropTypes.any,
    thirdCount:PropTypes.any, 
    thirdName:PropTypes.any,
}

export default DashBoardHome;