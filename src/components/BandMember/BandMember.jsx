import './BandMember.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { ImSoundcloud2 } from "react-icons/im";
import Michael from '/Michael.jpg'
import Doug from '/Doug3.jpg'
import Kris from '/Kris.jpg'
import Dave from '/Dave.jpg'
import Steve from '/Steve.jpg'
import memberBios from '../Utils/Bios';

const BandMember = () => {
    return (
        <>
            <main className='mobile-member-main flex flex-col items-center md:hidden'>
                <article className='mobile-band-member-name flex flex-col items-center justify-center gap-1 pt-5 pb-2'>
                    <section className='first-name flex flex-row justify-center gap-[.1rem]'>
                        <h2 className='mobile-band-member-letter'>M</h2>
                        <h2 className='mobile-band-member-letter'>I</h2>
                        <h2 className='mobile-band-member-letter'>C</h2>
                        <h2 className='mobile-band-member-letter'>H</h2>
                        <h2 className='mobile-band-member-letter'>A</h2>
                        <h2 className='mobile-band-member-letter'>E</h2>
                        <h2 className='mobile-band-member-letter'>L</h2>
                    </section>
                    <section className='last-name flex flex-row justify-center gap-[.1rem]'>
                        <h2 className='mobile-band-member-letter'>K</h2>
                        <h2 className='mobile-band-member-letter'>I</h2>
                        <h2 className='mobile-band-member-letter'>N</h2>
                        <h2 className='mobile-band-member-letter'>G</h2>
                    </section>
                </article>
                <article className='mobile-member-container grid grid-cols-2'>
                    <section className='flex flex-col items-center'>
                        <img src={Michael} alt='Michael King' className='mobile-member-pic' />
                    </section>
                    <section className='flex flex-col items-center'>
                        <p className='mobile-member-bio'>{memberBios[0].bio}</p>
                    </section>
                </article>
                <article className='mobile-member-icons flex justify-center pt-2 pb-4 w-full'>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('https://www.facebook.com/mkingmusic', '_blank'), 500)}>
                        <FaFacebookSquare className='mobile-member-icon' />
                    </button>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('https://www.michaelkingmusic.com/', '_blank'), 500)}>
                        <TbWorld className='mobile-member-icon' />
                    </button>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('https://open.spotify.com/playlist/0m3ZDzhNi7HfL0xBprGi96?si=8aac0910c92b4132', '_blank'), 500)}>
                        <FaSpotify className='mobile-member-icon' />
                    </button>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('https://open.spotify.com/playlist/762Bo9EUPUrIG9VgTZnn0Q?si=93ea2ba2c17544c9', '_blank'), 500)}>
                        <FaSpotify className='mobile-member-icon' />
                    </button>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('https://soundcloud.com/mk123123', '_blank'), 500)}>
                        <ImSoundcloud2 className='mobile-member-icon' />
                    </button>
                </article>
                <article className='mobile-band-member-name flex flex-col items-center justify-center gap-1 pb-2'>
                    <section className='first-name flex flex-row justify-center gap-[.1rem]'>
                        <h2 className='mobile-band-member-letter'>D</h2>
                        <h2 className='mobile-band-member-letter'>O</h2>
                        <h2 className='mobile-band-member-letter'>U</h2>
                        <h2 className='mobile-band-member-letter'>G</h2>
                    </section>
                    <section className='last-name flex flex-row justify-center gap-[.1rem]'>
                        <h2 className='mobile-band-member-letter'>B</h2>
                        <h2 className='mobile-band-member-letter'>R</h2>
                        <h2 className='mobile-band-member-letter'>O</h2>
                        <h2 className='mobile-band-member-letter'>W</h2>
                        <h2 className='mobile-band-member-letter'>N</h2>
                    </section>
                </article>

                <article className='mobile-member-container grid grid-cols-2'>
                    <section className='flex flex-col items-center'>
                        <p className='mobile-member-bio'>{memberBios[1].bio}</p>
                    </section>
                    <section className='flex flex-col items-center'>
                        <img src={Doug} alt='Doug Brown' className='mobile-member-pic' />
                    </section>
                </article>
                <article className='mobile-member-icons flex justify-center pt-2 pb-4 w-full'>
                    {/* <button className='w-fit' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                        <FaFacebookSquare className='mobile-member-icon' />
                    </button> */}
                    {/* <button className='w-fit' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                        <FaInstagramSquare className='mobile-member-icon' />
                    </button> */}
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('https://douglasbrownmusic.com/', '_blank'), 500)}>
                        <TbWorld className='mobile-member-icon' />
                    </button>
                    {/* <button className='w-fit' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                        <SiApplemusic className='mobile-member-icon' />
                    </button> */}
                    {/* <button className='w-fit' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                        <FaSpotify className='mobile-member-icon' />
                    </button> */}
                </article>
                <article className='mobile-band-member-name flex flex-col items-center justify-center gap-1 pb-2'>
                    <section className='first-name flex flex-row justify-center gap-[.1rem]'>
                        <h2 className='mobile-band-member-letter'>D</h2>
                        <h2 className='mobile-band-member-letter'>A</h2>
                        <h2 className='mobile-band-member-letter'>V</h2>
                        <h2 className='mobile-band-member-letter'>E</h2>
                    </section>
                    <section className='last-name flex flex-row justify-center gap-[.1rem]'>
                        <h2 className='mobile-band-member-letter'>H</h2>
                        <h2 className='mobile-band-member-letter'>E</h2>
                        <h2 className='mobile-band-member-letter'>N</h2>
                        <h2 className='mobile-band-member-letter'>D</h2>
                        <h2 className='mobile-band-member-letter'>E</h2>
                        <h2 className='mobile-band-member-letter'>R</h2>
                        <h2 className='mobile-band-member-letter'>I</h2>
                        <h2 className='mobile-band-member-letter'>C</h2>
                        <h2 className='mobile-band-member-letter'>K</h2>
                        <h2 className='mobile-band-member-letter'>S</h2>
                        <h2 className='mobile-band-member-letter'>O</h2>
                        <h2 className='mobile-band-member-letter'>N</h2>
                    </section>
                </article>
                <article className='mobile-member-container grid grid-cols-2 justify-center'>
                    <section className='flex flex-col items-center'>
                        <img src={Dave} alt='Dave Henderickson' className='mobile-member-pic' />
                    </section>
                    <section className='flex flex-col items-center'>
                        <p className='mobile-member-bio'>{memberBios[2].bio}</p>
                    </section>
                </article>
                <article className='mobile-member-icons flex justify-center w-full pt-2 pb-4'>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('http://davehendricksonmusic.com/', '_blank'), 500)}>
                        <TbWorld className='mobile-member-icon' />
                    </button>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('https://open.spotify.com/artist/3I4q2EF5Q4jXNJzOmIjrZP?si=YIDZDUuvS8aLn1MycMD3Yg&nd=1&dlsi=c12ef38be8194052'), 500)}>
                        <FaSpotify className='mobile-member-icon' />
                    </button>
                </article>
                <article className='mobile-band-member-name flex flex-col items-center justify-center gap-1 pb-2'>
                    <section className='first-name flex flex-row justify-center gap-[.1rem]'>
                        <h2 className='mobile-band-member-letter'>K</h2>
                        <h2 className='mobile-band-member-letter'>R</h2>
                        <h2 className='mobile-band-member-letter'>I</h2>
                        <h2 className='mobile-band-member-letter'>S</h2>
                    </section>
                    <section className='last-name flex flex-row justify-center gap-[.1rem]'>
                        <h2 className='mobile-band-member-letter'>K</h2>
                        <h2 className='mobile-band-member-letter'>U</h2>
                        <h2 className='mobile-band-member-letter'>R</h2>
                        <h2 className='mobile-band-member-letter'>Z</h2>
                        <h2 className='mobile-band-member-letter'>A</h2>
                        <h2 className='mobile-band-member-letter'>W</h2>
                        <h2 className='mobile-band-member-letter'>A</h2>
                    </section>
                </article>
                <article className='mobile-member-container grid grid-cols-2'>
                    <section className='flex flex-col items-center'>
                        <p className='mobile-member-bio'>{memberBios[3].bio}</p>
                    </section>
                    <section className='flex flex-col items-center'>
                        <img src={Kris} alt='Kris Kurzawa' className='mobile-member-pic' />
                    </section>
                </article>
                <article className='mobile-member-icons flex justify-center pt-2 pb-4 w-full'>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('https://www.facebook.com/KrisKurzawaGuitar/', '_blank'), 500)}>
                        <FaFacebookSquare className='mobile-member-icon' />
                    </button>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('https://www.instagram.com/k_kurzawa/', '_blank'), 500)}>
                        <FaInstagramSquare className='mobile-member-icon' />
                    </button>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('https://www.kriskurzawaguitar.com/', '_blank'), 500)}>
                        <TbWorld className='mobile-member-icon' />
                    </button>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('https://music.apple.com/us/artist/kris-kurzawa/1071714493', '_blank'), 500)}>
                        <SiApplemusic className='mobile-member-icon' />
                    </button>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('https://open.spotify.com/artist/6avBe32i2ADGGnJAFnQHYx', '_blank'), 500)}>
                        <FaSpotify className='mobile-member-icon' />
                    </button>
                </article>
                <article className='mobile-band-member-name flex flex-col items-center justify-center gap-1 pb-2'>
                    <section className='first-name flex flex-row justify-center gap-[.1rem]'>
                        <h2 className='mobile-band-member-letter'>S</h2>
                        <h2 className='mobile-band-member-letter'>T</h2>
                        <h2 className='mobile-band-member-letter'>E</h2>
                        <h2 className='mobile-band-member-letter'>V</h2>
                        <h2 className='mobile-band-member-letter'>E</h2>
                    </section>
                    <section className='first-name flex flex-row justify-center gap-[.1rem]'>
                        <h2 className='mobile-band-member-letter'>N</h2>
                        <h2 className='mobile-band-member-letter'>O</h2>
                        <h2 className='mobile-band-member-letter'>L</h2>
                        <h2 className='mobile-band-member-letter'>T</h2>
                        <h2 className='mobile-band-member-letter'>O</h2>
                        <h2 className='mobile-band-member-letter'>N</h2>
                    </section>
                </article>
                <article className='mobile-member-container grid grid-cols-2 justify-center'>
                    <section className='flex flex-col items-center'>
                        <img src={Steve} alt='Steve Nolton' className='mobile-member-pic' />
                    </section>
                    <section className='flex flex-col items-center'>
                        <p className='mobile-member-bio'>{memberBios[4].bio}</p>
                    </section>
                </article>
                <article className='mobile-member-icons flex justify-center w-full pt-2 pb-4'>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                        <FaFacebookSquare className='mobile-member-icon' />
                    </button>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                        <FaInstagramSquare className='mobile-member-icon' />
                    </button>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                        <TbWorld className='mobile-member-icon' />
                    </button>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                        <SiApplemusic className='mobile-member-icon' />
                    </button>
                    <button className='w-fit' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                        <FaSpotify className='mobile-member-icon' />
                    </button>
                </article>
                <button onClick={() => setTimeout(() => {
                    const showTopBtn = document.querySelector('#top');
                    showTopBtn?.scrollIntoView({ behavior: 'smooth' })
                }, 500)} className='mobile-band-top-btn flex justify-center w-fit h-fit gap-[.15rem]'>
                    <h2 className='mobile-band-top-letter'>T</h2>
                    <h2 className='mobile-band-top-letter'>O</h2>
                    <h2 className='mobile-band-top-space'>S</h2>
                    <h2 className='mobile-band-top-letter'>T</h2>
                    <h2 className='mobile-band-top-letter'>H</h2>
                    <h2 className='mobile-band-top-letter'>E</h2>
                    <h2 className='mobile-band-top-space'>S</h2>
                    <h2 className='mobile-band-top-letter'>T</h2>
                    <h2 className='mobile-band-top-letter'>O</h2>
                    <h2 className='mobile-band-top-letter'>P</h2>
                </button>
            </main>
            {/* medium and large */}
            <main className='band-member-main hidden md:flex flex-col items-center'>
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
                        <p className='member-bio'>{memberBios[0].bio}</p>
                        <article className='member-icons flex gap-1'>
                            <button className='w-fit' onClick={() => setTimeout(() => window.open('https://www.facebook.com/mkingmusic', '_blank'), 500)}>
                                <FaFacebookSquare className='member-icon' />
                            </button>
                            <button className='w-fit' onClick={() => setTimeout(() => window.open('https://www.michaelkingmusic.com/', '_blank'), 500)}>
                                <TbWorld className='member-icon' />
                            </button>
                            <button className='w-fit' onClick={() => setTimeout(() => window.open('https://open.spotify.com/playlist/0m3ZDzhNi7HfL0xBprGi96?si=8aac0910c92b4132', '_blank'), 500)}>
                                <FaSpotify className='member-icon' />
                            </button>
                            <button className='w-fit' onClick={() => setTimeout(() => window.open('https://open.spotify.com/playlist/762Bo9EUPUrIG9VgTZnn0Q?si=93ea2ba2c17544c9', '_blank'), 500)}>
                                <FaSpotify className='member-icon' />
                            </button>
                            <button className='w-fit' onClick={() => setTimeout(() => window.open('https://soundcloud.com/mk123123', '_blank'), 500)}>
                                <ImSoundcloud2 className='member-icon' />
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
                        <p className='member-bio'>{memberBios[1].bio}</p>
                        <article className='member-icons flex gap-1'>
                            {/* <button className='member-icon-button' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                                <FaFacebookSquare className='member-icon' />
                            </button> */}
                            {/* <button className='member-icon-button' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                                <FaInstagramSquare className='member-icon' />
                            </button> */}
                            <button className='member-icon-button' onClick={() => setTimeout(() => window.open('https://douglasbrownmusic.com/', '_blank'), 500)}>
                                <TbWorld className='member-icon' />
                            </button>
                            {/* <button className='member-icon-button' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                                <SiApplemusic className='member-icon' />
                            </button> */}
                            {/* <button className='member-icon-button' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                                <FaSpotify className='member-icon' />
                            </button> */}
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
                        <p className='member-bio'>{memberBios[2].bio}</p>
                        <article className='member-icons flex gap-1'>
                            <button className='member-icon-button' onClick={() => setTimeout(() => window.open('http://davehendricksonmusic.com/', '_blank'), 500)}>
                                <TbWorld className='member-icon' />
                            </button>
                            <button className='member-icon-button' onClick={() => setTimeout(() => window.open('https://open.spotify.com/artist/3I4q2EF5Q4jXNJzOmIjrZP?si=YIDZDUuvS8aLn1MycMD3Yg&nd=1&dlsi=c12ef38be8194052', '_blank'), 500)}>
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
                        <p className='member-bio'>{memberBios[3].bio}</p>
                        <article className='member-icons flex gap-1'>
                            <button className='member-icon-button' onClick={() => setTimeout(() => window.open('https://www.facebook.com/KrisKurzawaGuitar/', '_blank'), 500)}>
                                <FaFacebookSquare className='member-icon' />
                            </button>
                            <button className='member-icon-button' onClick={() => setTimeout(() => window.open('https://www.instagram.com/k_kurzawa/', '_blank'), 500)}>
                                <FaInstagramSquare className='member-icon' />
                            </button>
                            <button className='member-icon-button' onClick={() => setTimeout(() => window.open('https://www.kriskurzawaguitar.com', '_blank'), 500)}>
                                <TbWorld className='member-icon' />
                            </button>
                            <button className='member-icon-button' onClick={() => setTimeout(() => window.open('https://music.apple.com/us/artist/kris-kurzawa/1071714493', '_blank'), 500)}>
                                <SiApplemusic className='member-icon' />
                            </button>
                            <button className='member-icon-button' onClick={() => setTimeout(() => window.open('https://open.spotify.com/artist/6avBe32i2ADGGnJAFnQHYx', '_blank'), 500)}>
                                <FaSpotify className='member-icon' />
                            </button>
                        </article>
                    </section>
                    <img src={Kris} alt='Kris Kurzawa' className='member-pic' />
                </article>
                <article className='steve-container grid grid-cols-3 justify-center items-center pb-10'>
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
                        <p className='member-bio'>{memberBios[4].bio}</p>
                        <article className='member-icons flex gap-1'>
                            <button className='member-icon-button' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                                <FaFacebookSquare className='member-icon' />
                            </button>
                            <button className='member-icon-button' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                                <FaInstagramSquare className='member-icon' />
                            </button>
                            <button className='member-icon-button' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                                <TbWorld className='member-icon' />
                            </button>
                            <button className='member-icon-button' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                                <SiApplemusic className='member-icon' />
                            </button>
                            <button className='member-icon-button' onClick={() => setTimeout(() => window.open('http://google.com', '_blank'), 500)}>
                                <FaSpotify className='member-icon' />
                            </button>
                        </article>
                    </section>
                </article>
                <button onClick={() => setTimeout(() => {
                    const showTopBtn = document.querySelector('#top');
                    showTopBtn?.scrollIntoView({ behavior: 'smooth' })
                }, 500)} className='band-top-btn flex justify-center w-fit h-fit gap-[.15rem]'>
                    <h2 className='band-top-letter'>T</h2>
                    <h2 className='band-top-letter'>O</h2>
                    <h2 className='band-top-space'>S</h2>
                    <h2 className='band-top-letter'>T</h2>
                    <h2 className='band-top-letter'>H</h2>
                    <h2 className='band-top-letter'>E</h2>
                    <h2 className='band-top-space'>S</h2>
                    <h2 className='band-top-letter'>T</h2>
                    <h2 className='band-top-letter'>O</h2>
                    <h2 className='band-top-letter'>P</h2>
                </button>
            </main>
        </>
    )
}

export default BandMember