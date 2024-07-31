import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-main flex justify-center gap-20 pb-3'>
            <a href='#Shows' className='nav-link flex gap-1'>
                <h2 className='nav-link-letter'>S</h2>
                <h2 className='nav-link-letter'>H</h2>
                <h2 className='nav-link-letter'>O</h2>
                <h2 className='nav-link-letter'>W</h2>
                <h2 className='nav-link-letter'>S</h2>
            </a>
            <a href='#Band' className='nav-link flex gap-1'>
                <h2 className='nav-link-letter'>B</h2>
                <h2 className='nav-link-letter'>A</h2>
                <h2 className='nav-link-letter'>N</h2>
                <h2 className='nav-link-letter'>D</h2>
            </a>
            <a href='#Contact' className='nav-link flex gap-1'>
                <h2 className='nav-link-letter'>C</h2>
                <h2 className='nav-link-letter'>O</h2>
                <h2 className='nav-link-letter'>N</h2>
                <h2 className='nav-link-letter'>T</h2>
                <h2 className='nav-link-letter'>A</h2>
                <h2 className='nav-link-letter'>C</h2>
                <h2 className='nav-link-letter'>T</h2>
            </a>
        </nav>
    )
}

export default Navbar