const Testimony = () => {
    return ( 
        <>
        <div className=" py-4 px-20 mt-[250px] w-full">
            <p className=" font-Outfit text-[#a1a1ee]">Testimonials</p>
            <div className=" w-full flex flex-row mt-3 justify-between">
                <p className=" font-Outfit font-medium text-4xl text-black">Our Works<br/> Speaks for itself</p>
                <p className=" w-[350px] text-[#000000b6] font-Outfit text-base"> We work hard to provide exceptional service, because Customer Satisfaction is our number one priority and we GUARANTEE everything we do</p>
            </div>
            <div className=" mt-16 grid grid-cols-3 gap-[32px]">
                <div className=" w-full h-[300px] bg-[#f5f5f4d0] flex relative px-6 py-8 rounded-md">
                    <p className=" font-normal font-Outfit text-sm text-black">
                        "Gary and his partner went above and beyond cleaning my home. I think it’s also important to note how well they communicated the process and set the proper expectations before the job started. Given that, they still went above my expectations. 100% recommend."
                    </p>
                    <p className=" absolute bottom-6 right-6 text-base font-Outfit font-medium text-[#a1a1ee]">- Sam K</p>
                </div>
                <div className=" w-full h-[300px] bg-[#f5f5f4d0] flex relative px-6 py-8 rounded-md">
                    <p className=" font-normal font-Outfit text-sm text-black">
                        "Fast, friendly, and efficient communication and they did a fantastic job on my house. Very thorough. It looks sparkling and new! I'll be using them again for sure!"
                    </p>
                    <p className=" absolute bottom-6 right-6 text-base font-Outfit font-medium text-[#a1a1ee]">- Bobby M</p>
                </div>
                <div className=" w-full h-[300px] bg-[#f5f5f4d0] flex relative px-6 py-8 rounded-md">
                    <p className=" font-normal font-Outfit text-sm text-black">
                        "Clean Burst Powerwash LLC sent reminders of the appointment, arrived on time, Very professional, courteous, took extra care to ensure the job was done right. My Father's home was spotless as if it were staged to sell. Great price compared to the competition. Perfect Husband/Wife team got this project completed and was off to the next job. Highly recommend his services to anyone that asks.."
                    </p>
                    <p className=" absolute bottom-6 right-6 text-base font-Outfit font-medium text-[#a1a1ee]">- Kevin S</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Testimony;