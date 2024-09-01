import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    const today = new Date();

    return (
        <footer className='footer flex flex-col justify-center items-center'>
            <ul className='footer-icons flex flex-row text-6xl gap-10 mt-5 mb-0'>
                <button onClick={() => setTimeout(() => window.open('https://www.facebook.com/profile.php?id=61563049205575', '_blank'), 500)}><FaFacebookSquare className='footer-icon' /></button>
                <button onClick={() => setTimeout(() => window.open('https://www.instagram.com/the_abbey_road_project_detroit/', '_blank'), 500)}><FaInstagramSquare className='footer-icon' /></button>
            </ul>
            <article className='footer-text-container flex flex-col items-center w-fit mb-5'>
                <a href='mailto:steve.nolton@gmail.com' className='mailto w-fit flex justify-center items-center px-1 mb-1 text-lg md:text-3xl'>Email Us</a>
                <a href='tel:15865563325' className='phone w-fit flex justify-center items-center px-1 mb-3 text-lg md:text-3xl'>Call Us</a>
                <button onClick={() => setTimeout(() => window.open('https://www.kriskurzawadev.com/', '_blank'), 500)} className='dev-link py-[.1rem] text-xs md:text-xl'>Site Designed and Built by Kris Kurzawa</button>
                <p className='copyright flex justify-center py-[.1rem] text-xs md:text-xl'>Copyright &copy; {today.getFullYear()} The Abbey Road Project - All Rights Reserved</p>
            </article>

        </footer>
    )
}

export default Footer