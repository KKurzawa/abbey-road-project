import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer flex flex-col justify-center items-center'>
            <ul className='footer-icons flex flex-row text-5xl gap-10 mt-5 mb-2'>
                <button onClick={() => setTimeout(() => window.open('https://www.facebook.com/profile.php?id=61563049205575', '_blank'), 500)}><FaFacebookSquare className='footer-icon' /></button>
                <button onClick={() => setTimeout(() => window.open('https://www.instagram.com/k_kurzawa/', '_blank'), 500)}><FaInstagramSquare className='footer-icon' /></button>
                <button onClick={() => setTimeout(() => window.open('https://www.youtube.com/channel/UCosE-h5XuXSkR4dG_hBaCUg', '_blank'), 500)}><IoLogoYoutube className='footer-icon' /></button>
            </ul>
            <article className='footer-text-container flex flex-col justify-center items-center mb-5 text-xs md:text-xl'>
                <a href='mailto:kurzawa1@yahoo.com' className='mailto py-[.1rem]'>Email Us</a>
                <a href='tel:12485682806' className='phone py-[.1rem]'>Call Us</a>
                <p className='copyright py-[.1rem]'>Copyright &copy; {today.getFullYear()} The Abbey Road Project - All Rights Reserved</p>
                <button onClick={() => setTimeout(() => window.open('https://www.kriskurzawadev.com/', '_blank'), 500)} className='dev-link py-[.1rem]'>Site Designed and Built by Kris Kurzawa</button>
            </article>

        </footer>
    )
}

export default Footer