import './Band.css'
import BandMember from '../BandMember/BandMember'

const Band = () => {
    return (
        <main id='Band' className='band-main'>
            <header className='band-header flex flex-row justify-center items-center w-full py-3'>
                <h2 className='band-header-letter'>B</h2>
                <h2 className='band-header-letter'>A</h2>
                <h2 className='band-header-letter'>N</h2>
                <h2 className='band-header-letter'>D</h2>
            </header>
            <BandMember />
        </main>
    )
}

export default Band