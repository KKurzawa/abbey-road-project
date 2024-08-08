import './MobileNavbar.css'
import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const MobileNavbar = () => {
    const [isOpen, setOpen] = useState(false)

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
                    <ul className='mobile-nav pb-4'>
                        <li className='mobile-nav-link pl-2'>SHOWS</li>
                        <li className='mobile-nav-link pl-2'>BAND</li>
                        <li className='mobile-nav-link pl-2'>CONTACT</li>
                    </ul>
                    <ul className='nav-icons flex gap-6 pl-2 pb-6'>
                        <button className='nav-icon-btn' onClick={() => setTimeout(() => window.open('https://www.facebook.com/profile.php?id=61563049205575', '_blank'), 500)}><FaFacebookSquare className='nav-icon' /></button>
                        <button className='nav-icon-btn' onClick={() => setTimeout(() => window.open('https://www.instagram.com/k_kurzawa/', '_blank'), 500)}><FaInstagramSquare className='nav-icon' /></button>
                        <button className='nav-icon-btn' onClick={() => setTimeout(() => window.open('https://www.youtube.com/channel/UCosE-h5XuXSkR4dG_hBaCUg', '_blank'), 500)}><IoLogoYoutube className='nav-icon' /></button>
                    </ul>
                </nav>
            }
        </main>
    )
}

export default MobileNavbar