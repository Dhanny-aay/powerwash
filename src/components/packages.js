import basic from './assets/basic.svg';
import deluxe from './assets/deluxe.svg';
import premium from './assets/premium.svg';

const Packages = () => {
    return ( 
        <>
        <div className="px-20 mt-24">
            <div className=" relative flex flex-row items-center text-center">
                <p className=" text-base font-medium font-Outfit text-[#a1a1ee]">Packages</p>
                <span className=" px-[10%]">
                    <p className=" text-4xl font-Outfit leading-none">Explore Our Exciting Packages Today</p>
                    <p className=" text-[#000000b6] mt-8 font-medium font-Outfit text-base">Discover our exclusive package deals, tailored to meet your needs and enhance your experience. Explore our wide range of offerings and unlock incredible value today</p>
                </span>
            </div>
            <div className=" mt-16 w-full grid grid-cols-3 gap-[32px]">
                <div className=" flex flex-col items-center justify-center w-full h-[300px] bg-transparent">
                    <img src={basic} className=' w-12' alt="" />
                    <p className=" font-Outfit font-medium mt-6 text-black text-xl h-7">Basic House Wash</p>
                    <p className=' font-Outfit text-sm mt-4 text-[#000000b6] h-[200px]'>Our Basic House wash is a thorough cleaning of the entire outside of your home from foundation to gutter-line. Our machine uses low pressure, cold water, and biodegradable detergents to safely, yet effectively clean your home of all mold, mildew, and dirt.</p>
                </div>
                <div className=" flex flex-col items-center justify-center w-full h-[300px] bg-transparent">
                    <img src={deluxe} className=' w-12' alt="" />
                    <p className=" font-Outfit font-medium mt-6 text-black text-xl h-7">Deluxe House Wash</p>
                    <p className=' font-Outfit text-sm mt-4 text-[#000000b6] h-[200px]'>"Our Deluxe House Wash, with Hot Water, eliminates mold, mildew, grime, and nests. Includes gutter polishing, removing streaks, and Hot Wax Protection for vinyl siding, delaying mold and mildew growth."</p>
                </div>
                <div className=" flex flex-col items-center justify-center w-full h-[300px] bg-transparent">
                    <img src={premium} className=' w-12' alt="" />
                    <p className=" font-Outfit font-medium mt-6 text-black text-xl h-7">Premium House Wash</p>
                    <p className=' font-Outfit text-sm mt-4 text-[#000000b6] h-[200px]'>Our Premium House Wash includes all mentioned services plus concrete cleaning using hot water, biodegradable detergents, and proper pressure for ultimate curb appeal.</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Packages;