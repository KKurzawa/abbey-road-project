import './BandMember.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import Michael from '/Michael.jpg'
import Doug from '/Doug3.jpg'
import Kris from '/Kris.jpg'
import Dave from '/Dave.jpg'
import Steve from '/Steve.jpg'

const BandMember = () => {
    return (
        <main className='band-member-main pb-12'>
            <article className='michael-container grid grid-cols-3 justify-center items-center'>
                <img src={Michael} alt='Michael King' className='member-pic' />
                <section className='michael-text flex flex-col gap-4 col-span-2'>
                    <article className='band-member-name flex gap-1'>
                        <h2 className='band-member-letter'>M</h2>
                        <h2 className='band-member-letter'>I</h2>
                        <h2 className='band-member-letter'>C</h2>
                        <h2 className='band-member-letter'>H</h2>
                        <h2 className='band-member-letter'>A</h2>
                        <h2 className='band-member-letter'>E</h2>
                        <h2 className='band-member-letter'>L</h2>
                        <h2 className='band-member-space'>S</h2>
                        <h2 className='band-member-letter'>K</h2>
                        <h2 className='band-member-letter'>I</h2>
                        <h2 className='band-member-letter'>N</h2>
                        <h2 className='band-member-letter'>G</h2>
                    </article>
                    <p className='member-bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit non leo a aliquam. Etiam feugiat quam nisl, et tincidunt nunc luctus tempor. Nunc posuere leo eu dui consequat, ut aliquet urna condimentum. Aenean posuere ullamcorper orci, ac consectetur lorem aliquet in. Suspendisse sit amet odio varius, gravida dolor vel, euismod mauris. Donec eu massa feugiat, hendrerit tellus euismod, aliquam libero. Mauris lobortis, urna et suscipit tempus, turpis tellus fermentum justo, a iaculis nisl leo et orci.</p>
                    <article className='member-icons flex gap-3'>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <FaFacebookSquare className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <FaInstagramSquare className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <TbWorld className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <SiApplemusic className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <FaSpotify className='member-icon' />
                        </button>
                    </article>
                </section>
            </article>
            <article className='doug-container grid grid-cols-3 justify-center items-center'>
                <section className='doug-text flex flex-col gap-4 col-span-2'>
                    <article className='band-member-name flex gap-1'>
                        <h2 className='band-member-letter'>D</h2>
                        <h2 className='band-member-letter'>O</h2>
                        <h2 className='band-member-letter'>U</h2>
                        <h2 className='band-member-letter'>G</h2>
                        <h2 className='band-member-space'>S</h2>
                        <h2 className='band-member-letter'>B</h2>
                        <h2 className='band-member-letter'>R</h2>
                        <h2 className='band-member-letter'>O</h2>
                        <h2 className='band-member-letter'>W</h2>
                        <h2 className='band-member-letter'>N</h2>
                    </article>
                    <p className='member-bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit non leo a aliquam. Etiam feugiat quam nisl, et tincidunt nunc luctus tempor. Nunc posuere leo eu dui consequat, ut aliquet urna condimentum. Aenean posuere ullamcorper orci, ac consectetur lorem aliquet in. Suspendisse sit amet odio varius, gravida dolor vel, euismod mauris. Donec eu massa feugiat, hendrerit tellus euismod, aliquam libero. Mauris lobortis, urna et suscipit tempus, turpis tellus fermentum justo, a iaculis nisl leo et orci.</p>
                    <article className='member-icons flex gap-3'>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <FaFacebookSquare className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <FaInstagramSquare className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <TbWorld className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <SiApplemusic className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <FaSpotify className='member-icon' />
                        </button>
                    </article>
                </section>
                <img src={Doug} alt='Doug Brown' className='member-pic' />
            </article>
            <article className='dave-container grid grid-cols-3 justify-center items-center'>
                <img src={Dave} alt='Dave Henderickson' className='member-pic' />
                <section className='dave-text flex flex-col gap-4 col-span-2'>
                    <article className='band-member-name flex gap-1'>
                        <h2 className='band-member-letter'>D</h2>
                        <h2 className='band-member-letter'>A</h2>
                        <h2 className='band-member-letter'>V</h2>
                        <h2 className='band-member-letter'>E</h2>
                        <h2 className='band-member-space'>S</h2>
                        <h2 className='band-member-letter'>H</h2>
                        <h2 className='band-member-letter'>E</h2>
                        <h2 className='band-member-letter'>N</h2>
                        <h2 className='band-member-letter'>D</h2>
                        <h2 className='band-member-letter'>E</h2>
                        <h2 className='band-member-letter'>R</h2>
                        <h2 className='band-member-letter'>I</h2>
                        <h2 className='band-member-letter'>C</h2>
                        <h2 className='band-member-letter'>K</h2>
                        <h2 className='band-member-letter'>S</h2>
                        <h2 className='band-member-letter'>O</h2>
                        <h2 className='band-member-letter'>N</h2>
                    </article>
                    <p className='member-bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit non leo a aliquam. Etiam feugiat quam nisl, et tincidunt nunc luctus tempor. Nunc posuere leo eu dui consequat, ut aliquet urna condimentum. Aenean posuere ullamcorper orci, ac consectetur lorem aliquet in. Suspendisse sit amet odio varius, gravida dolor vel, euismod mauris. Donec eu massa feugiat, hendrerit tellus euismod, aliquam libero. Mauris lobortis, urna et suscipit tempus, turpis tellus fermentum justo, a iaculis nisl leo et orci.</p>
                    <article className='member-icons flex gap-3'>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <FaFacebookSquare className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <FaInstagramSquare className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <TbWorld className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <SiApplemusic className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <FaSpotify className='member-icon' />
                        </button>
                    </article>
                </section>
            </article>
            <article className='kris-container grid grid-cols-3 justify-center items-center'>
                <section className='kris-text flex flex-col gap-4 col-span-2'>
                    <article className='band-member-name flex gap-1'>
                        <h2 className='band-member-letter'>K</h2>
                        <h2 className='band-member-letter'>R</h2>
                        <h2 className='band-member-letter'>I</h2>
                        <h2 className='band-member-letter'>S</h2>
                        <h2 className='band-member-space'>S</h2>
                        <h2 className='band-member-letter'>K</h2>
                        <h2 className='band-member-letter'>U</h2>
                        <h2 className='band-member-letter'>R</h2>
                        <h2 className='band-member-letter'>Z</h2>
                        <h2 className='band-member-letter'>A</h2>
                        <h2 className='band-member-letter'>W</h2>
                        <h2 className='band-member-letter'>A</h2>
                    </article>
                    <p className='member-bio'>Kris Kurzawa&apos;s versatility has led him to become one of Detroit area&apos;s most in demand guitarists since the early 2000&apos;s; crossing multiple genres including jazz, fusion, rock, world music and R+B. He released his first album &apos;Sly&apos; in 2016 earning him his fifth Detroit Music Award. He earned his bachelors degree in 2003 and his masters in 2012 with a concentration in jazz studies from Wayne State University. Kris has over 20 years teaching experience and is adjunct faculty in Wayne State Universities jazz studies program.</p>
                    <article className='member-icons flex gap-3'>
                        <button onClick={() => setTimeout(() => window.open('https://www.facebook.com/KrisKurzawaGuitar/', '_blank'), 500)}>
                            <FaFacebookSquare className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('https://www.instagram.com/k_kurzawa/', '_blank'), 500)}>
                            <FaInstagramSquare className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('https://www.kriskurzawaguitar.com', '_blank'), 500)}>
                            <TbWorld className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('https://music.apple.com/us/artist/kris-kurzawa/1071714493', '_blank'), 500)}>
                            <SiApplemusic className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('https://open.spotify.com/artist/6avBe32i2ADGGnJAFnQHYx', '_blank'), 500)}>
                            <FaSpotify className='member-icon' />
                        </button>
                    </article>
                </section>
                <img src={Kris} alt='Kris Kurzawa' className='member-pic' />
            </article>
            <article className='steve-container grid grid-cols-3 justify-center items-center'>
                <img src={Steve} alt='Steve Nolton' className='member-pic' />
                <section className='steve-text flex flex-col gap-4 col-span-2'>
                    <article className='band-member-name flex gap-1'>
                        <h2 className='band-member-letter'>S</h2>
                        <h2 className='band-member-letter'>T</h2>
                        <h2 className='band-member-letter'>E</h2>
                        <h2 className='band-member-letter'>V</h2>
                        <h2 className='band-member-letter'>E</h2>
                        <h2 className='band-member-space'>S</h2>
                        <h2 className='band-member-letter'>N</h2>
                        <h2 className='band-member-letter'>O</h2>
                        <h2 className='band-member-letter'>L</h2>
                        <h2 className='band-member-letter'>T</h2>
                        <h2 className='band-member-letter'>O</h2>
                        <h2 className='band-member-letter'>N</h2>
                    </article>
                    <p className='member-bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit non leo a aliquam. Etiam feugiat quam nisl, et tincidunt nunc luctus tempor. Nunc posuere leo eu dui consequat, ut aliquet urna condimentum. Aenean posuere ullamcorper orci, ac consectetur lorem aliquet in. Suspendisse sit amet odio varius, gravida dolor vel, euismod mauris. Donec eu massa feugiat, hendrerit tellus euismod, aliquam libero. Mauris lobortis, urna et suscipit tempus, turpis tellus fermentum justo, a iaculis nisl leo et orci.</p>
                    <article className='member-icons flex gap-3'>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <FaFacebookSquare className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <FaInstagramSquare className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <TbWorld className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <SiApplemusic className='member-icon' />
                        </button>
                        <button onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                            <FaSpotify className='member-icon' />
                        </button>
                    </article>
                </section>
            </article>
        </main>
    )
}

export default BandMember