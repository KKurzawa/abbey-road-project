import './Shows.css'
import Show from '../Show/Show'

const Shows = () => {
    return (
        <main id='Shows' className='shows-main flex flex-col justify-center items-center'>
            <header className='shows-header flex flex-row justify-center items-center w-full py-3'>
                <h2 className='shows-header-letter'>S</h2>
                <h2 className='shows-header-letter'>H</h2>
                <h2 className='shows-header-letter'>O</h2>
                <h2 className='shows-header-letter'>W</h2>
                <h2 className='shows-header-letter'>S</h2>
            </header>
            <Show />
        </main>
    )
}

export default Shows