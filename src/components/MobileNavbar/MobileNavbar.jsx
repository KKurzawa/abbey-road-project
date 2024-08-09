import './MobileNavbar.css'
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const MobileNavbar = () => {
    const [isOpen, setOpen] = useState(false)

    function navigateToShows() {
        setTimeout(() => {
            setOpen(false)
            const element = document.querySelector('#Shows');
            element?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
    }

    function navigateToBand() {
        setTimeout(() => {
            setOpen(false)
            const element = document.querySelector('#Band');
            element?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
    }

    function navigateToContact() {
        setTimeout(() => {
            setOpen(false)
            const element = document.querySelector('#Contact');
            element?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
    }

    return (
        <main className='mobile-nav-main flex items-center'>
            <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                direction="right"
                size={35} />
            {isOpen &&
                <nav className='absolute z-10 top-[3.3rem]'
                >
                    <ul className='mobile-nav pb-4 pl-2'>
                        <li className='mobile-nav-link w-fit px-2 rounded-xl'><button className='w-fit' onClick={navigateToShows}>SHOWS</button></li>
                        <li className='mobile-nav-link w-fit px-2 rounded-xl'><button className='w-fit' onClick={navigateToBand}>BAND</button></li>
                        <li className='mobile-nav-link w-fit px-2 rounded-xl'><button onClick={navigateToContact} className='w-fit' >CONTACT</button></li>
                    </ul>
                    <ul className='nav-icons flex gap-4 pl-2 pb-6'>
                        <button className='nav-icon-btn' onClick={() => setTimeout(() => window.open('https://www.facebook.com/profile.php?id=61563049205575', '_blank'), 500)}><FaFacebookSquare className='mobile-nav-icon' /></button>
                        <button className='nav-icon-btn' onClick={() => setTimeout(() => window.open('https://www.instagram.com/k_kurzawa/', '_blank'), 500)}><FaInstagramSquare className='mobile-nav-icon' /></button>
                        <button className='nav-icon-btn' onClick={() => setTimeout(() => window.open('https://www.youtube.com/channel/UCosE-h5XuXSkR4dG_hBaCUg', '_blank'), 500)}><IoLogoYoutube className='mobile-nav-icon' /></button>
                    </ul>
                </nav>
            }
        </main>
    )
}

export default MobileNavbar