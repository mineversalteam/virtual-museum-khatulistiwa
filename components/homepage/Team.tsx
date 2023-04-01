import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import TeamMember, { Member } from './TeamMember';

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
        className='w-4 cursor-pointer filter drop-shadow-lg'
      />
    </button>
  ),
  nextArrow: (
    <button className='text-black text-lg'>
      <FontAwesomeIcon
        icon={faCaretRight}
        className='w-4 cursor-pointer filter drop-shadow-lg'
      />
    </button>
  ),
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface IProps {
  data: Member[];
}

const Team = ({ data }: IProps) => {
  return (
    <section id='team' className='py-28'>
      <div className='container mx-auto px-5 relative z-10'>
        <div className='text-center'>
          <h1 className='title'>03. Map Maker</h1>
          <p className='subtitle'>Making the virtual world a little more real, one map at a time.</p>
        </div>

        <div id='mivubi-team' className='py-10 px-5'>
          <Slider {...settings}>
            {data.map((profile, i) => (
              <TeamMember key={i} profile={profile} />
            ))}
          </Slider>
        </div>

        <div className='text-center pt-5'>
          <a
            href='https://minecraft-id.net/about/mivubi'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='w-full md:w-auto md:mx-3 my-2 text-lg mv-btn bg-black text-white font-dmSans font-bold hover:opacity-80'>
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
