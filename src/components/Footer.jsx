import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return(
        <>
            <div className="w-full flex flex-col items-center justify-center gap-6 py-10">
                <div className="icon gap-5 md:gap-8 w-full flex justify-center text-2xl">
                    <a href="#"><FaFacebookSquare/></a>
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaTwitter/></a>
                    <a href="#"><FaYoutube/></a>
                </div>
                <div className="page text-sm md:text-base font-semibold flex gap-6 md:gap-8">
                    <a href="#">Conditions of Use</a>
                    <a href="#">Privacy & Policy</a>
                    <a href="#">Press Room</a>
                </div>
                <div>
                    &copy; {new Date().getFullYear()} FilmFind by Wellshub  
                </div>
            </div>
        </>
    )
}

export default Footer;