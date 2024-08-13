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
        <>
            <main className='mobile-member-main flex flex-col md:hidden'>
                <article className='mobile-band-member-name flex justify-center gap-[.1rem] pt-5 pb-2'>
                    <h2 className='mobile-band-member-letter'>M</h2>
                    <h2 className='mobile-band-member-letter'>I</h2>
                    <h2 className='mobile-band-member-letter'>C</h2>
                    <h2 className='mobile-band-member-letter'>H</h2>
                    <h2 className='mobile-band-member-letter'>A</h2>
                    <h2 className='mobile-band-member-letter'>E</h2>
                    <h2 className='mobile-band-member-letter'>L</h2>
                    <h2 className='mobile-band-member-space'>S</h2>
                    <h2 className='mobile-band-member-letter'>K</h2>
                    <h2 className='mobile-band-member-letter'>I</h2>
                    <h2 className='mobile-band-member-letter'>N</h2>
                    <h2 className='mobile-band-member-letter'>G</h2>
                </article>
                <article className='mobile-michael-container grid grid-cols-2'>
                    <section className='flex flex-col items-center'>
                        <img src={Michael} alt='Michael King' className='mobile-member-pic' />
                    </section>
                    <section className='flex flex-col items-center'>
                        <p className='mobile-member-bio'>Nunc posuere leo eu dui consequat. Aenean posuere ullamcorper orci, ac consectetur lorem aliquet in. Suspendisse sit amet odio varius, gravida dolor vel, euismod mauris. Donec eu massa feugiat, hendrerit tellus euismod, aliquam libero. Mauris lobortis, urna et suscipit tempus, turpis tellus fermentum justo, a iaculis nisl leo et orci.</p>
                    </section>
                </article>
                <article className='mobile-member-icons flex justify-center pt-2 pb-5 gap-1 w-full'>
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
                <article className='mobile-band-member-name flex justify-center gap-[.1rem] pb-2'>
                    <h2 className='mobile-band-member-letter'>D</h2>
                    <h2 className='mobile-band-member-letter'>O</h2>
                    <h2 className='mobile-band-member-letter'>U</h2>
                    <h2 className='mobile-band-member-letter'>G</h2>
                    <h2 className='mobile-band-member-space'>S</h2>
                    <h2 className='mobile-band-member-letter'>B</h2>
                    <h2 className='mobile-band-member-letter'>R</h2>
                    <h2 className='mobile-band-member-letter'>O</h2>
                    <h2 className='mobile-band-member-letter'>W</h2>
                    <h2 className='mobile-band-member-letter'>N</h2>
                </article>
                <article className='mobile-member-container grid grid-cols-2'>
                    <section className='flex justify-center'>
                        <p className='mobile-member-bio'>Nunc posuere leo eu dui consequat. Aenean posuere ullamcorper orci, ac consectetur lorem aliquet in. Suspendisse sit amet odio varius, gravida dolor vel, euismod mauris. Donec eu massa feugiat, hendrerit tellus euismod, aliquam libero. Mauris lobortis, urna et suscipit tempus, turpis tellus fermentum justo, a iaculis nisl leo et orci.</p>
                    </section>
                    <section className='flex justify-center'>
                        <img src={Doug} alt='Doug Brown' className='mobile-member-pic' />
                    </section>
                </article>
                <article className='mobile-member-icons flex justify-center pt-2 pb-5 gap-[.15rem] w-full'>
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
                <article className='mobile-band-member-name flex justify-center gap-[.1rem] pb-2'>
                    <h2 className='mobile-band-member-letter'>D</h2>
                    <h2 className='mobile-band-member-letter'>A</h2>
                    <h2 className='mobile-band-member-letter'>V</h2>
                    <h2 className='mobile-band-member-letter'>E</h2>
                    <h2 className='mobile-band-member-space'>S</h2>
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
                </article>
                <article className='mobile-dave-container grid grid-cols-2 justify-center'>
                    <section className='flex flex-col items-center'>
                        <img src={Dave} alt='Dave Henderickson' className='mobile-member-pic' />
                    </section>
                    <section className='flex flex-col items-center'>
                        <p className='mobile-member-bio'>Nunc posuere leo eu dui consequat.Aenean posuere ullamcorper orci, ac consectetur lorem aliquet in. Suspendisse sit amet odio varius, gravida dolor vel, euismod mauris. Donec eu massa feugiat, hendrerit tellus euismod, aliquam libero. Mauris lobortis, urna et suscipit tempus, turpis tellus fermentum justo, a iaculis nisl leo et orci.</p>
                    </section>
                </article>
                <article className='mobile-member-icons flex justify-center gap-1 w-full pt-2 pb-5'>
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
                <article className='mobile-band-member-name flex justify-center gap-[.1rem] pb-2'>
                    <h2 className='mobile-band-member-letter'>K</h2>
                    <h2 className='mobile-band-member-letter'>R</h2>
                    <h2 className='mobile-band-member-letter'>I</h2>
                    <h2 className='mobile-band-member-letter'>S</h2>
                    <h2 className='mobile-band-member-space'>S</h2>
                    <h2 className='mobile-band-member-letter'>K</h2>
                    <h2 className='mobile-band-member-letter'>U</h2>
                    <h2 className='mobile-band-member-letter'>R</h2>
                    <h2 className='mobile-band-member-letter'>Z</h2>
                    <h2 className='mobile-band-member-letter'>A</h2>
                    <h2 className='mobile-band-member-letter'>W</h2>
                    <h2 className='mobile-band-member-letter'>A</h2>
                </article>
                <article className='mobile-member-container grid grid-cols-2'>
                    <section className='flex justify-center'>
                        <p className='mobile-member-bio'>Nunc posuere leo eu dui consequat. Aenean posuere ullamcorper orci, ac consectetur lorem aliquet in. Suspendisse sit amet odio varius, gravida dolor vel, euismod mauris. Donec eu massa feugiat, hendrerit tellus euismod, aliquam libero. Mauris lobortis, urna et suscipit tempus, turpis tellus fermentum justo, a iaculis nisl leo et orci.</p>
                    </section>
                    <section className='flex justify-center'>
                        <img src={Kris} alt='Kris Kurzawa' className='mobile-member-pic' />
                    </section>
                </article>
                <article className='mobile-member-icons flex justify-center pt-2 pb-5 gap-1 w-full'>
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
                <article className='mobile-band-member-name flex justify-center gap-[.1rem] pb-2'>
                    <h2 className='mobile-band-member-letter'>S</h2>
                    <h2 className='mobile-band-member-letter'>T</h2>
                    <h2 className='mobile-band-member-letter'>E</h2>
                    <h2 className='mobile-band-member-letter'>V</h2>
                    <h2 className='mobile-band-member-letter'>E</h2>
                    <h2 className='mobile-band-member-space'>S</h2>
                    <h2 className='mobile-band-member-letter'>N</h2>
                    <h2 className='mobile-band-member-letter'>O</h2>
                    <h2 className='mobile-band-member-letter'>L</h2>
                    <h2 className='mobile-band-member-letter'>T</h2>
                    <h2 className='mobile-band-member-letter'>O</h2>
                    <h2 className='mobile-band-member-letter'>N</h2>
                </article>
                <article className='mobile-steve-container grid grid-cols-2 justify-center'>
                    <section className='flex flex-col items-center'>
                        <img src={Steve} alt='Steve Nolton' className='mobile-member-pic' />
                    </section>
                    <section className='flex flex-col items-center'>
                        <p className='mobile-member-bio'>Nunc posuere leo eu dui consequat.Aenean posuere ullamcorper orci, ac consectetur lorem aliquet in. Suspendisse sit amet odio varius, gravida dolor vel, euismod mauris. Donec eu massa feugiat, hendrerit tellus euismod, aliquam libero. Mauris lobortis, urna et suscipit tempus, turpis tellus fermentum justo, a iaculis nisl leo et orci.</p>
                    </section>
                </article>
                <article className='mobile-member-icons flex justify-center gap-1 w-full pt-2 pb-5'>
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
            </main>
            {/* medium and large */}
            <main className='band-member-main hidden md:flex flex-col items-center pb-12'>
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
                <a href='#top' className='band-top-btn flex justify-center w-fit h-fit gap-[.15rem]'>
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
                </a>
            </main>
        </>
    )
}

export default BandMember