import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import About from './About';
import Join from './Join';
import Tutorial from './Tutorial';
import Team from './Team';
import Footer from './Footer';
import { Member } from './TeamMember';

interface IProps {
  team: Member[];
}

const Homepage = ({ team }: IProps) => {
  return (
    <div>
      <Header />
      <section id='home' className='relative h-screen'>
        <div className='slide-show bg-scroll'></div>
        <div className='container mx-auto px-5 relative z-10'>
          <div className='h-screen flex flex-col items-center justify-center'>
            <p className='sub-title text-white text-center'>
              Minecraft Indonesia &times; Unibuild Indonesia &times; Riyan
              Kresnandi
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/assets/logos/red-museum-khatulistiwa.png'
              alt=''
              draggable={false}
            ></img>
            <p className='sub-title text-gray-50 text-center'>
              Ketika Minecraft Bertemu Kesenian
            </p>
            <div className='pt-5'>
              <a href="https://minecraft-id.net/ticket">
                <button className='font-bold mv-btn btn-blue flex items-center transition duration-300 ease-in-out hover:bg-dark-blue'>
                  Get Ticket
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='text-center bottom-2 absolute w-full z-10'>
          <a href='#about-museum'>
            <FontAwesomeIcon
              icon={faCaretDown}
              className='w-6 lg:w-8 m-auto text-7xl cursor-pointer filter text-white drop-shadow-lg'
            />
          </a>
        </div>
      </section>
      <About />
      <Join />
      <Team data={team} />
      <Tutorial />
      <Footer />
    </div>
  );
};

export default Homepage;
