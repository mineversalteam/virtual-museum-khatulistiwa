import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCaretDown, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <button className="text-black text-lg"><FontAwesomeIcon icon={faCaretLeft} className='w-5 cursor-pointer filter drop-shadow-lg' /></button>,
    nextArrow: <button className="text-black text-lg"><FontAwesomeIcon icon={faCaretRight} className='w-5 cursor-pointer filter drop-shadow-lg' /></button>,
    arrows: true
};

const Home = () => {
    return (
        <div id="homepage">
            <div className="fixed w-full px-24 py-10 z-20">
                <nav className="navbar flex justify-between items-center">
                    <div className="nav-right">
                        <button className="mv-btn btn-blue flex items-center">
                            <FontAwesomeIcon icon={faEye} className='w-3 cursor-pointer filter drop-shadow-lg' />
                            <span className="font-minecraftia pl-3">3D Viewer</span>
                        </button>
                    </div>
                    <div className="nav-left flex flex-row items-center">
                        <a className="nav-item">About Project</a>
                        <a className="nav-item">3D Viewer</a>
                        <a className="nav-item">Map Makers</a>
                        <a className="nav-item">Tutorials</a>
                    </div>
                </nav>
            </div>

            <section id="home" className="relative h-screen">
                <div className="slide-show bg-scroll"></div>
                <div className="container mx-auto px-5 relative z-10">
                    <div className="h-screen flex flex-col items-center justify-center">
                        <p className="sub-title text-white">Minecraft Indonesia x Unibuild Indonesia x Riyan Kresnandi</p>
                        <img src="/assets/logos/red-museum-khatulistiwa.png"></img>
                        <p className="sub-title text-white">Ketika Minecraft Bertemu Kesenian</p>
                    </div>
                </div>
                <div className="text-center bottom-2 absolute w-full z-10">
                    <a href="#about-museum"><FontAwesomeIcon icon={faCaretDown} className='w-10 m-auto text-7xl cursor-pointer filter text-white drop-shadow-lg' /></a>
                </div>
            </section>

            <section id="about-museum" className="bg-black py-28">
                <div className="container mx-auto px-5 relative z-10">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="detail text-white">
                            <div className="flex h-full justify-center flex-col">
                                <h1 className="title">01. About Museum</h1>
                                <p className="subtitle">Virtual Museum Khatulistiwa</p>
                                <p className="description py-7">Sebuah projek pembuatan map museum di minecraft dengan 3 tema besar yaitu, budaya khatulistiwa sebagai konteks, <mark>khatulistiwa dan konteks sosial politik global</mark>, dan dekolonisasi seni.  intinya tema projek museum ini berhubungan dengan pembuatan karya seni/sejarah yang ada di negara garis katulistiwa. projek ini tercipta dengan bekerjasama dengan yayasan seni <mark>Biennale Yogyakarta</mark>.<br /><br /> Museum virtual ini di bangun oleh <mark>MIVUBI</mark> , yang merupakan team kolaborasi dari Mineversal dan Unibuild Indonesia yang bergerak dalam komunitas Minecraft di Indonesia. </p>
                                <div className="pt-2">
                                    <button className="mr-4 mv-btn btn-blue font-dmSans text-xl">Biennale Jogja</button>
                                    <button className="mv-btn btn-outline-blue font-dmSans text-xl">Mivubi</button>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="m-auto" width="451px" height="596px" src="https://media.discordapp.net/attachments/445232632679235595/889818744422027264/unknown.png?width=425&height=559">
                            </img>
                        </div>
                    </div>
                </div>
            </section>

            <section id="join" className="bg-black pt-16 pb-24">
                <div className="container mx-auto px-5 relative z-10">
                    <div className="text-center text-white">
                        <h1 className="title">02. Enter Museum</h1>
                        <p className="subtitle">360 View & Public Minecraft Server</p>
                    </div>
                    <a href="/maps">
                        <div className="bg-360 w-full flex items-center justify-center my-10">
                            <img src="/assets/icons/360deg.webp" width="143px" height="auto"></img>
                        </div>
                    </a>
                    <button className="mv-btn text-3xl h-14 font-minecraftia btn-blue w-full">museum.minecraft-id.net</button>
                </div>
            </section>

            <section id="team" className="py-28">
                <div className="container mx-auto px-5 relative z-10">
                    <div className="text-center">
                        <h1 className="title">03. Map Maker</h1>
                        <p className="subtitle">360 View & Public Minecraft Server</p>
                    </div>


                    <div id="mivubi-team" className="py-10">
                        <Slider {...settings}>
                            <div className="item">
                                <img className="rounded border border-1 border-black" src="https://media.discordapp.net/attachments/666160887513612329/825408170586800128/IMG-20180317-WA0055-01-01.jpeg" width="230px" height="230"></img>
                                <div className="detail text-center absolute bottom-0 w-full">
                                    <button className="h-8 leading-8 mv-btn btn-blue relative top-5 font-minecraftia">Archanee</button>
                                    <div className="overlay text-white font-dmSans pt-5 pb-2">
                                        <p>Project Leader</p>
                                        <div className="sosmed flex justify-center">
                                            <a href="#facebook">
                                                <FontAwesomeIcon icon={faFacebook} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                            <a href="#instagram">
                                                <FontAwesomeIcon icon={faInstagram} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                            <a href="#instagram">
                                                <FontAwesomeIcon icon={faTwitter} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <img className="rounded border border-1 border-black" src="https://media.discordapp.net/attachments/666160887513612329/825408170586800128/IMG-20180317-WA0055-01-01.jpeg" width="230px" height="230"></img>
                                <div className="detail text-center absolute bottom-0 w-full">
                                    <button className="h-8 leading-8 mv-btn btn-blue relative top-5 font-minecraftia">Archanee</button>
                                    <div className="overlay text-white font-dmSans pt-5 pb-2">
                                        <p>Project Leader</p>
                                        <div className="sosmed flex justify-center">
                                            <a href="#facebook">
                                                <FontAwesomeIcon icon={faFacebook} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                            <a href="#instagram">
                                                <FontAwesomeIcon icon={faInstagram} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                            <a href="#instagram">
                                                <FontAwesomeIcon icon={faTwitter} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <img className="rounded border border-1 border-black" src="https://media.discordapp.net/attachments/666160887513612329/825408170586800128/IMG-20180317-WA0055-01-01.jpeg" width="230px" height="230"></img>
                                <div className="detail text-center absolute bottom-0 w-full">
                                    <button className="h-8 leading-8 mv-btn btn-blue relative top-5 font-minecraftia">Archanee</button>
                                    <div className="overlay text-white font-dmSans pt-5 pb-2">
                                        <p>Project Leader</p>
                                        <div className="sosmed flex justify-center">
                                            <a href="#facebook">
                                                <FontAwesomeIcon icon={faFacebook} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                            <a href="#instagram">
                                                <FontAwesomeIcon icon={faInstagram} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                            <a href="#instagram">
                                                <FontAwesomeIcon icon={faTwitter} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <img className="rounded border border-1 border-black" src="https://media.discordapp.net/attachments/666160887513612329/825408170586800128/IMG-20180317-WA0055-01-01.jpeg" width="230px" height="230"></img>
                                <div className="detail text-center absolute bottom-0 w-full">
                                    <button className="h-8 leading-8 mv-btn btn-blue relative top-5 font-minecraftia">Archanee</button>
                                    <div className="overlay text-white font-dmSans pt-5 pb-2">
                                        <p>Project Leader</p>
                                        <div className="sosmed flex justify-center">
                                            <a href="#facebook">
                                                <FontAwesomeIcon icon={faFacebook} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                            <a href="#instagram">
                                                <FontAwesomeIcon icon={faInstagram} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                            <a href="#instagram">
                                                <FontAwesomeIcon icon={faTwitter} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <img className="rounded border border-1 border-black" src="https://media.discordapp.net/attachments/666160887513612329/825408170586800128/IMG-20180317-WA0055-01-01.jpeg" width="230px" height="230"></img>
                                <div className="detail text-center absolute bottom-0 w-full">
                                    <button className="h-8 leading-8 mv-btn btn-blue relative top-5 font-minecraftia">Archanee</button>
                                    <div className="overlay text-white font-dmSans pt-5 pb-2">
                                        <p>Project Leader</p>
                                        <div className="sosmed flex justify-center">
                                            <a href="#facebook">
                                                <FontAwesomeIcon icon={faFacebook} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                            <a href="#instagram">
                                                <FontAwesomeIcon icon={faInstagram} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                            <a href="#instagram">
                                                <FontAwesomeIcon icon={faTwitter} className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <div className="text-center pt-5">
                        <button className="mx-3 text-lg mv-btn bg-black text-white font-dmSans font-bold">See Full Team</button>
                        <button className="mx-3 text-lg mv-btn bg-none text-black border-black border font-dmSans font-bold">About Mivubi</button>
                    </div>
                </div>
            </section>

            <section id="tutorial" className="bg-black py-28">
                <div className="container mx-auto px-5 relative z-10">
                    <div className="grid grid-cols-2">
                        <div className="grid grid-cols-1 gap-y-6 pr-10">
                            <a href="#">
                                <div className="relative flex items-center justify-center w-full h-28 border border-white bg-white rounded bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(https://media.discordapp.net/attachments/854941249831043082/889836738393026560/unknown.png?width=1080&height=276)' }}>
                                    <h1 className="absolute top-10 left-5 font-minecraftia text-white opacity-70 text-6xl">01</h1>
                                    <h1 className="text-5xl font-dmSans font-bold text-center text-white">Install Minecraft</h1>
                                </div>
                            </a>

                            <a href="#">
                                <div className="relative flex items-center justify-center w-full h-28  border border-white bg-white rounded bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(https://media.discordapp.net/attachments/445232632679235595/889896106853564466/unknown.png?width=900&height=207)' }}>
                                    <h1 className="absolute top-10 left-5 font-minecraftia text-white opacity-70 text-6xl">02</h1>
                                    <h1 className="text-5xl font-dmSans font-bold text-center text-white">Minecraft Map</h1>
                                </div>
                            </a>

                            <a href="#">
                                <div className="relative flex items-center justify-center w-full h-28  border border-white bg-white rounded bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(https://media.discordapp.net/attachments/445232632679235595/889896522756522064/unknown.png?width=913&height=220)' }}>
                                    <h1 className="absolute top-10 left-5 font-minecraftia text-white opacity-70 text-6xl">03</h1>
                                    <h1 className="text-5xl font-dmSans font-bold text-center text-white">Resource Pack</h1>
                                </div>
                            </a>

                            <a href="#">
                                <div className="relative flex items-center justify-center w-full h-28  border border-white bg-white rounded bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(https://media.discordapp.net/attachments/445232632679235595/889897481276645426/unknown.png?width=1010&height=232)' }}>
                                    <h1 className="absolute top-10 left-5 font-minecraftia text-white opacity-70 text-6xl">04</h1>
                                    <h1 className="text-5xl font-dmSans font-bold text-center text-white">Import World</h1>
                                </div>
                            </a>


                        </div>
                        <div className="flex flex-col h-100 justify-center text-white pl-10">
                            <h1 className="title">Tutorials Offline</h1>
                            <p className="subtitle">How to playing this maps</p>
                            <p className="description py-7">Tutorial berikut diperuntukan untuk kamu yang ingin mengaksesnya melalui offline dengan menekan setiap step ya!, namun jika kamu ingin mengunjunginya secara online kamu dapat mengikuti step 1 dan membuka menu multiplayer saat pada game dan menambah server dengan ip <mark>museum.minecraft-id.net</mark></p>
                            <div className="pt-2">
                                <button className="mr-4 mv-btn btn-blue font-dmSans text-xl">Tutorial Offline</button>
                                <button className="mv-btn btn-outline-blue font-dmSans text-xl">Tutorial Online</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="pt-20 pb-32 bg-primary-blue relative">
                <div className="container mx-auto px-5 relative z-10">
                    <h1 className="text-lg text-white font-dmSans">Presented by </h1>
                    <div className="flex justify-center items-center pt-5">
                        <img className="mx-5" height="135px" width="135px" src="/assets/logos/mineversal.png"></img>
                        <img className="mx-5" height="135px" width="135px" src="/assets/logos/mcindo.png"></img>
                        <img className="mx-5" height="135px" width="428px" src="https://media.discordapp.net/attachments/445232632679235595/889901118811938816/unknown.png?width=771&height=238"></img>
                        <img className="mx-5" height="135px" width="135px" src="/assets/logos/unibuild.png"></img>
                        <img className="mx-5" height="135px" width="135px" src="https://media.discordapp.net/attachments/445232632679235595/889901867918839818/unknown.png?width=238&height=238"></img>
                    </div>                    
                </div>
                
                <p className="text-center text-white text-lg absolute w-full bottom-8">Copyright © 2021 Mineversal Team. All rights reserved.</p>                
            </footer>
        </div>
    );
};

export default Home;
