import './Show.css'
import showList from '../Utils/ShowList'

const Show = () => {
    function notYetAvailable() {
        setTimeout(() =>
            alert("Either tickets are not yet available for purchase or they will be made available at the door.  Please check back later or contact the venue.")
            , 500)
    }

    function noCover() {
        setTimeout(() =>
            alert("This is a free show!")
            , 500)
    }

    return (
        <main className='single-show-main w-full h-auto flex flex-col items-center'>
            {showList.map((item) => (
                <ol key={item.index} className='single-show flex flex-col items-center w-fit'>
                    <article className='date-time w-fit flex flex-row m-0 md:mb-2 pb-1 gap-2'>
                        <li className='date w-fit'>{item.date}</li>
                        <li className='time w-fit'>{item.time}</li>
                    </article>
                    <button onClick={() => setTimeout(() =>
                        window.open(item.venueLink, '_blank')
                        , 500)} className='venue m-0 md:mb-2 px-1 md:px-2 pb-1 pt-[.15rem]'>{item.venue}</button>
                    <button onClick={() => setTimeout(() =>
                        window.open(item.cityLink, '_blank')
                        , 500)} className='city m-0 md:mb-2 px-1 md:px-2 pb-1 pt-[.15rem]'>{item.city}</button>
                    <li className='tckt-btn mb-1 px-1 md:px-2 pb-1 pt-[.15rem]'>
                        {item.ticketLink === 1 ? (
                            <button onClick={notYetAvailable}>Get Tickets</button>
                        ) :
                            item.ticketLink === 2 ? (
                                <button onClick={noCover}>Get Tickets</button>
                            ) :
                                <button onClick={() => setTimeout(() => window.open(item.ticketLink, '_blank'), 500)}>Get Tickets</button>
                        }
                    </li>
                </ol>
            ))}
            <button onClick={() => setTimeout(() => {
                const showTopBtn = document.querySelector('#top');
                showTopBtn?.scrollIntoView({ behavior: 'smooth' })
            }, 500)} className='shows-top-btn flex w-fit h-fit gap-[.15rem]'>
                <h2 className='show-top-letter'>T</h2>
                <h2 className='show-top-letter'>O</h2>
                <h2 className='show-top-space'>S</h2>
                <h2 className='show-top-letter'>T</h2>
                <h2 className='show-top-letter'>H</h2>
                <h2 className='show-top-letter'>E</h2>
                <h2 className='show-top-space'>S</h2>
                <h2 className='show-top-letter'>T</h2>
                <h2 className='show-top-letter'>O</h2>
                <h2 className='show-top-letter'>P</h2>
            </button>
        </main>
    )
}

export default Show