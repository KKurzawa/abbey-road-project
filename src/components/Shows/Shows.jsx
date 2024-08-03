import './Shows.css'
import Show from '../Show/Show'

const Shows = () => {
    return (
        <main id='Shows' className='shows-main flex flex-col justify-center items-center'>
            <header className='shows-header flex flex-row justify-center items-center w-full py-3'>
                <h2 className='shows-header-letter'>SHOWS</h2>
            </header>
            <Show />
        </main>
    )
}

export default Shows