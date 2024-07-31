import './Header.css'
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <main className='header-main w-full h-auto'>
            <header className='page-title flex flex-col  w-full h-auto'>
                <article className='flex h-auto justify-center items-center gap-1 my-5'>
                    <h2 className='title'>T</h2>
                    <h2 className='title'>H</h2>
                    <h2 className='title'>E</h2>
                    <h2 className='space'>S</h2>
                    {/* </article>
        <article className='flex flex-row justify-center mb-4'> */}
                    <h2 className='title'>A</h2>
                    <h2 className='title'>B</h2>
                    <h2 className='title'>B</h2>
                    <h2 className='title'>E</h2>
                    <h2 className='title'>Y</h2>
                    <h2 className='space'>S</h2>
                    <h2 className='title'>R</h2>
                    <h2 className='title'>O</h2>
                    <h2 className='title'>A</h2>
                    <h2 className='title'>D</h2>
                </article>
                <article className='flex flex-row justify-center gap-1 mb-5'>
                    <h2 className='title'>P</h2>
                    <h2 className='title'>R</h2>
                    <h2 className='title'>O</h2>
                    <h2 className='title'>J</h2>
                    <h2 className='title'>E</h2>
                    <h2 className='title'>C</h2>
                    <h2 className='title'>T</h2>
                </article>
            </header>
            <Navbar className='my-20' />
        </main>
    )
}

export default Header