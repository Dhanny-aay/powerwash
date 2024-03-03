import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';


const Gallery = () => {
    return ( 
        <>
        <div className=" bg-[#000] w-full px-20 py-20 flex flex-col justify-center items-center">
            <p className=" text-base font-medium font-Outfit text-[#a1a1ee]">Gallery</p>
            <p className=" text-4xl font-Outfit text-white mt-8 leading-none">Explore Our Outstanding Works Today</p>
            <div className=" grid w-full grid-cols-3 gap-[16px] mt-16">
                <div style={{backgroundImage:`url(${img1})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" bg-[#ffffff9e] w-full h-[230px] rounded-md"></div>
                <div style={{backgroundImage:`url(${img2})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" bg-[#ffffff9e] w-full h-[230px] rounded-md"></div>
                <div style={{backgroundImage:`url(${img3})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" bg-[#ffffff9e] w-full h-[230px] rounded-md"></div>
                <div style={{backgroundImage:`url(${img5})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" bg-[#ffffff9e] w-full h-[230px] rounded-md"></div>
                <div style={{backgroundImage:`url(${img4})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" bg-[#ffffff9e] w-full h-[230px] rounded-md"></div>
                <div style={{backgroundImage:`url(${img6})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" bg-[#ffffff9e] w-full h-[230px] rounded-md"></div>
                <div style={{backgroundImage:`url(${img7})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" bg-[#ffffff9e] w-full h-[230px] rounded-md"></div>
                <div style={{backgroundImage:`url(${img8})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" bg-[#ffffff9e] w-full h-[230px] rounded-md"></div>
                <div style={{backgroundImage:`url(${img9})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" bg-[#ffffff9e] w-full h-[230px] rounded-md"></div>
            </div>
        </div>
        </>
     );
}
 
export default Gallery;