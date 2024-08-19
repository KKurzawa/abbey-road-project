import './Landing.css'

const Landing = () => {
    return (
        <main className='landing-main flex flex-col justify-center items-center gap-10'>
            <article className='logo flex flex-col justify-center items-center gap-1'>
                <article className='title-container flex flex-row justify-center gap-1'>
                    <h2 className='landing-title'>T</h2>
                    <h2 className='landing-title'>H</h2>
                    <h2 className='landing-title'>E</h2>
                </article>
                <article className='title-container flex flex-row justify-center gap-1'>
                    <h2 className='landing-title'>A</h2>
                    <h2 className='landing-title'>B</h2>
                    <h2 className='landing-title'>B</h2>
                    <h2 className='landing-title'>E</h2>
                    <h2 className='landing-title'>Y</h2>
                    <h2 className='landing-space'>S</h2>
                    <h2 className='landing-title'>R</h2>
                    <h2 className='landing-title'>O</h2>
                    <h2 className='landing-title'>A</h2>
                    <h2 className='landing-title'>D</h2>
                </article>
                <article className='title-container flex flex-row justify-center gap-1'>
                    <h2 className='landing-title'>P</h2>
                    <h2 className='landing-title'>R</h2>
                    <h2 className='landing-title'>O</h2>
                    <h2 className='landing-title'>J</h2>
                    <h2 className='landing-title'>E</h2>
                    <h2 className='landing-title'>C</h2>
                    <h2 className='landing-title'>T</h2>
                </article>
            </article>
        </main>
    )
}

export default Landing