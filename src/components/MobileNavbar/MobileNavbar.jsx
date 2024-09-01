import './MobileNavbar.css'
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io5";
import { motion } from 'framer-motion';

const MobileNavbar = () => {
    const [isOpen, setOpen] = useState(false)
    // const toggleMenu = () => {
    //     setOpen((prevOpen) => !prevOpen)
    // }

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
                size={35}
                className='hamburger' />
            {isOpen &&
                <motion.nav
                    transition={{ duration: .2, type: 'spring', stiffness: 50 }}
                    initial={{ top: '-15rem' }}
                    animate={{ top: '2.5rem' }}
                    exit={{ top: '-15rem' }}
                    className='mobile-nav-dropdown absolute'
                    id='dropdown'>
                    <ul className='mobile-nav pb-4 pl-2'>
                        <motion.li
                            initial={{ left: '100%', opacity: 0 }}
                            animate={{ left: '0%', opacity: 1 }}
                            exit={{ left: '100%', opacity: 0 }}
                            transition={{ duration: .05, delay: .3 }}
                            className='mobile-nav-link w-fit mt-5 px-2 rounded-xl relative'><button className='w-fit' onClick={navigateToShows}>SHOWS</button></motion.li>
                        <motion.li
                            initial={{ left: '100%', opacity: 0 }}
                            animate={{ left: '0%', opacity: 1 }}
                            transition={{ duration: .05, delay: .4, }}
                            className='mobile-nav-link w-fit px-2 rounded-xl relative'><button className='w-fit' onClick={navigateToBand}>BAND</button></motion.li>
                        <motion.li
                            initial={{ left: '100%', opacity: 0 }}
                            animate={{ left: '0%', opacity: 1 }}
                            transition={{ duration: .05, delay: .5, }}
                            className='mobile-nav-link w-fit px-2 rounded-xl relative'><button onClick={navigateToContact} className='w-fit' >CONTACT</button></motion.li>
                    </ul>
                    <motion.ul
                        initial={{ left: '100%', opacity: 0 }}
                        animate={{ left: '0%', opacity: 1 }}
                        transition={{ duration: .05, delay: .7, }}
                        className='nav-icons flex gap-4 relative pl-2 pb-6'>
                        <button className='nav-icon-btn' onClick={() => setTimeout(() => window.open('https://www.facebook.com/profile.php?id=61563049205575', '_blank'), 500)}><FaFacebookSquare className='mobile-nav-icon' /></button>
                        <button className='nav-icon-btn' onClick={() => setTimeout(() => window.open('https://www.instagram.com/the_abbey_road_project_detroit/', '_blank'), 500)}><FaInstagramSquare className='mobile-nav-icon' /></button>
                    </motion.ul>
                </motion.nav>
            }
        </main>
    )
}

export default MobileNavbar