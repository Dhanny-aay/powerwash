import karo from './assets/pexels-karolina-grabowska-4239039.jpg';
import heroImg from './assets/pexels-matilda-wormwood-4099481.webp';

const About = () => {
    return ( 
        <div className="w-full px-20 py-20 flex flex-col justify-center items-center">
            <p className=" text-base font-medium font-Outfit text-[#a1a1ee]">About Us</p>
            <p className=" text-4xl font-Outfit text-black mt-8 leading-none">What We Do in Detail</p>

            <div className=" w-full flex flex-row justify-between items-center mt-16">
                <div style={{backgroundImage:`url(${heroImg})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-[48%] h-[500px] rounded-md bg-[#f5f5f4d0]">
                    
                </div>
                <div className=" w-[48%] h-full">
                    <p className=" font-Outfit text-sm">Clean Burst is proud to offer the best hot water pressure washing, roof cleaning and exterior window cleaning solutions to the commercial and residential markets of Reston, Herndon, Chantilly, Oakton, Sterling, Ashburn, Broadlands, and Leesburg.<br/><br/>
                    From cottages to mansions, large or small business, we have the knowledge and experience to get the job done right the first time.We only use top of the line equipment and cleaning chemcials guaranteeing a happy clean home!
                    With over 10years of experience, we specialize in.<br/><br/>
                    House Washing<br/>
                    High pressure heated concrete cleaning<br/>
                    Roof Cleaning<br/>
                    Gutter Cleaning and exterior window cleaning<br/>
                    Deck Restoration and Seal<br/>
                    Deck Staining<br/>
                    Fence and Patio Cleaning
                    And More!
                    <br/><br/>
                    We encourage you to fully explore our gallery section and look at before and after photos. As a result, we’re confident you’ll find this information beneficial in choosing us as your cleaner of choice. Your home is the most expensive investment you will most likely have in your lifetime.Wouldn’t you rather use a company that understands this concept when restoring your most precious and valuable investments? Our Mission is to provide excellent service or your money back.
                    Thank You.</p>
                </div>
            </div>
        </div>
     );
}
 
export default About;