import heroImg from './assets/pexels-matilda-wormwood-4099481.webp';
import Navbar from './navbar';
import tima from './assets/pexels-tima-miroshnichenko-6197122.jpg';


const Hero = () => {
    return ( 
        <>
        <div className=" w-full relative h-[100vh] bg-[#000]" >
            <Navbar/>
            <div className=' w-full pl-20 flex justify-between'>
                <div className='w-[40%] mt-16'>
                    <p className=' text-white text-6xl leading-none font-medium font-Outfit'>Providing Top Quality Service in your area.</p>
                    <p className=' text-[#e8e8e8] text-sm absolute bottom-10 w-[300px] font-Outfit'>Clean Burst is a family owned pressure washing company in Reston VA. We are fully insured, licensed, and focused solely on providing you the best possible service.</p>
                </div>
                <div className='w-[50%] mt-16'>
                    <p className=' text-[#e8e8e8] font-Outfit w-[300px]'>Brand New Hot Water Exterior Cleaning Service serving Fairfax and Loudoun County.</p>
                    <div style={{backgroundImage:`url(${tima})`, backgroundPosition:'center', backgroundSize:'cover'}} className=' bg-[#f4f4f4] mt-10 w-full h-[450px]'></div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Hero;