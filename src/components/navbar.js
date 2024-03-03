const Navbar = () => {
    return ( 
        <div className=" h-[100px] w-full bg-transparent top-0 left-0 px-20 flex flex-row justify-between items-center">
            <p className=" text-2xl font-Outfit font-semibold text-[#a1a1ee]">Clean Burst Powerwash LLC</p>
            <span className=" flex flex-row items-center space-x-6 font-Outfit text-[#f1f1f1] font-medium text-base">
                <p>Get Quote</p>
                <button className=" px-4 py-2 text-[#000] rounded-lg bg-[#a1a1ee]">Call Now</button>
            </span>
        </div>
     );
}
 
export default Navbar;