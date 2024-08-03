import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-main hidden md:flex justify-center md:gap-10 lg:gap-20 pb-3'>
            <button className='nav-link flex gap-1' onClick={() => setTimeout(() => {
                const element = document.querySelector('#Shows');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>
                <h2 className='nav-link-letter'>S</h2>
                <h2 className='nav-link-letter'>H</h2>
                <h2 className='nav-link-letter'>O</h2>
                <h2 className='nav-link-letter'>W</h2>
                <h2 className='nav-link-letter'>S</h2>
            </button>
            <button className='nav-link flex gap-1' onClick={() => setTimeout(() => {
                const element = document.querySelector('#Band');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>
                <h2 className='nav-link-letter'>B</h2>
                <h2 className='nav-link-letter'>A</h2>
                <h2 className='nav-link-letter'>N</h2>
                <h2 className='nav-link-letter'>D</h2>
            </button>
            <button className='nav-link flex gap-1' onClick={() => setTimeout(() => {
                const element = document.querySelector('#Contact');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>
                <h2 className='nav-link-letter'>C</h2>
                <h2 className='nav-link-letter'>O</h2>
                <h2 className='nav-link-letter'>N</h2>
                <h2 className='nav-link-letter'>T</h2>
                <h2 className='nav-link-letter'>A</h2>
                <h2 className='nav-link-letter'>C</h2>
                <h2 className='nav-link-letter'>T</h2>
            </button>
        </nav>
    )
}

export default Navbar