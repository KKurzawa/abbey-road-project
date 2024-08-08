import './MobileNavbar.css'
import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'

const MobileNavbar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <main className='mobile-nav-main flex items-center'>
            <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                direction="right"
                size={35} />
        </main>
    )
}

export default MobileNavbar