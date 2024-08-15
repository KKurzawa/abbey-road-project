import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer flex flex-col justify-center items-center'>
            <ul className='footer-icons flex flex-row text-6xl gap-10 mt-5 mb-0'>
                <button onClick={() => setTimeout(() => window.open('https://www.facebook.com/profile.php?id=61563049205575', '_blank'), 500)}><FaFacebookSquare className='footer-icon' /></button>
                <button onClick={() => setTimeout(() => window.open('https://www.instagram.com/k_kurzawa/', '_blank'), 500)}><FaInstagramSquare className='footer-icon' /></button>
                <button onClick={() => setTimeout(() => window.open('https://www.youtube.com/channel/UCosE-h5XuXSkR4dG_hBaCUg', '_blank'), 500)}><IoLogoYoutube className='footer-icon' /></button>
            </ul>
            <article className='footer-text-container flex flex-col justify-center items-center w-full mb-5'>
                <a href='mailto:kurzawa1@yahoo.com' className='mailto flex justify-center py-[.1rem] text-lg md:text-3xl'>Email Us</a>
                <a href='tel:12485682806' className='phone flex justify-center py-[.1rem] text-lg md:text-3xl'>Call Us</a>
                <p className='copyright flex justify-center py-[.1rem] text-xs md:text-xl'>Copyright &copy; {today.getFullYear()} The Abbey Road Project - All Rights Reserved</p>
                <button onClick={() => setTimeout(() => window.open('https://www.kriskurzawadev.com/', '_blank'), 500)} className='dev-link py-[.1rem] text-xs md:text-xl'>Site Designed and Built by Kris Kurzawa</button>
            </article>

        </footer>
    )
}

export default Footer