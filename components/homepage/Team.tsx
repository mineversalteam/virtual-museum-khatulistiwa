import data from '@/team.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCaretLeft,
  faCaretRight,
  faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: (
    <button className='text-black text-lg'>
      <FontAwesomeIcon
        icon={faCaretLeft}
        className='w-5 cursor-pointer filter drop-shadow-lg'
      />
    </button>
  ),
  nextArrow: (
    <button className='text-black text-lg'>
      <FontAwesomeIcon
        icon={faCaretRight}
        className='w-5 cursor-pointer filter drop-shadow-lg'
      />
    </button>
  ),
  arrows: true,
};

const Team = () => {
  return (
    <section id='team' className='py-28'>
      <div className='container mx-auto px-5 relative z-10'>
        <div className='text-center'>
          <h1 className='title'>03. Map Maker</h1>
          <p className='subtitle'>360 View & Public Minecraft Server</p>
        </div>

        <div id='mivubi-team' className='py-10'>
          <Slider {...settings}>
            {data.map((profile, i) => {
              return (
                <div className='item' key={i}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className='rounded border border-1 border-black overflow-hidden'
                    src={profile.image}
                    width='230px'
                    height='230px'
                    alt=''
                  ></img>

                  <div className='detail text-center absolute bottom-0 w-full'>
                    <button className='h-8 leading-8 mv-btn btn-blue relative top-5 font-minecraftia'>
                      {profile.nickname}
                    </button>
                    <div className='overlay text-white font-dmSans pt-5 pb-2'>
                      <p>{profile.role}</p>
                      <div className='sosmed flex justify-center'>
                        {profile?.sosmed?.facebook && (
                          <a href={profile.sosmed.facebook}>
                            <FontAwesomeIcon
                              icon={faFacebook}
                              className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg'
                            />
                          </a>
                        )}
                        {profile?.sosmed?.instagram && (
                          <a href={profile.sosmed.instagram}>
                            <FontAwesomeIcon
                              icon={faInstagram}
                              className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg'
                            />
                          </a>
                        )}
                        {profile?.sosmed?.twitter && (
                          <a href={profile.sosmed.twitter}>
                            <FontAwesomeIcon
                              icon={faTwitter}
                              className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg'
                            />
                          </a>
                        )}
                        {profile?.sosmed?.planetminecraft && (
                          <a href={profile.sosmed.planetminecraft}>
                            <FontAwesomeIcon
                              icon={faGlobeAmericas}
                              className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg'
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className='text-center pt-5'>
          <button className='mx-3 text-lg mv-btn bg-black text-white font-dmSans font-bold'>
            See Full Team
          </button>

          <a
            href='https://minecraft-id.net/about/mivubi'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='mx-3 text-lg mv-btn bg-none text-black border-black border font-dmSans font-bold'>
              About Mivubi
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
