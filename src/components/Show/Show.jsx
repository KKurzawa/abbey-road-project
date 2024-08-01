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
                    <article className='date-time flex flex-row gap-2'>
                        <li className='date'>{item.date}</li>
                        <li className='time'>{item.time}</li>
                    </article>
                    <button onClick={() => setTimeout(() =>
                        window.open(item.venueLink, '_blank')
                        , 500)} className='venue'>{item.venue}</button>
                    <button onClick={() => setTimeout(() =>
                        window.open(item.cityLink, '_blank')
                        , 500)} className='city'>{item.city}</button>
                    <li className='tckt-btn'>
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
        </main>
    )
}

export default Show