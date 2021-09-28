import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const COLORS = [
  ['bg-transparent', 'text-white'],
  ['bg-black', 'text-white'],
  ['bg-black', 'text-white'],
  ['bg-white', 'text-black'],
  ['bg-black', 'text-white'],
];
const NAV = ["hidden","block"]

const Header = () => {
  const [activeBg, setActiveBg] = useState(0);

  useEffect(() => {
    const positions: number[] = [];
    document
      .querySelectorAll('section')
      .forEach((e) => positions.push(e.offsetTop));

    const handler = () => {
      const scroll = window.scrollY;
      let num = 0;
      positions.forEach((n) => n <= scroll && (num = n));

      const index = positions.indexOf(num);
      setActiveBg(index);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);


  const [isActive, setActive] = useState(0);
  const toggleNav = () => {
    if(isActive==1){
      setActive(0);    
    }else{
      setActive(1);    
    }    
  };
  

  return (
    <div
      className={[
        'fixed w-full px-10 py-5 z-20  md:px-24 transition duration-300 ease-in-out',
        COLORS[activeBg][0],
      ].join(' ')}
    >
      <nav className='navbar flex justify-between items-center'>
        <div className='nav-right relative z-20'>
          <Link href='/maps' passHref>
            <button className='mv-btn btn-blue flex items-center transition duration-300 ease-in-out hover:bg-dark-blue'>
              <FontAwesomeIcon
                icon={faEye}
                className='w-3 cursor-pointer filter drop-shadow-lg'
              />
              <span className='font-minecraftia pl-3 mb-3 md:mb-0 relative'>3D Viewer</span>
            </button>
          </Link>
        </div>
        <button
          onClick={toggleNav}
        >
          <FontAwesomeIcon
            icon={faBars}
            className={`w-5 cursor-pointer block md:hidden filter drop-shadow-lg ${COLORS[activeBg][1]}`}
          />
        </button>
        <div className={`${NAV[isActive]} fixed py-10 left-0 z-0 right-0 top-20 nav-left flex-wrap flex-col flex items-center md:relative md:top-0 md:block md:flex-row md:block md:bg-transparent ${COLORS[activeBg][0]}`} id="navigation-list">
          <a
            className={`nav-item cursor-pointer ${COLORS[activeBg][1]}`}
            href='#'
          >
            Home
          </a>
          <a
            className={`nav-item cursor-pointer ${COLORS[activeBg][1]}`}
            href='#about-museum'
          >
            About Project
          </a>
          <a
            className={`nav-item cursor-pointer ${COLORS[activeBg][1]}`}
            href='#team'
          >
            Map Makers
          </a>
          <a
            className={`nav-item cursor-pointer ${COLORS[activeBg][1]}`}
            href='#tutorial'
          >
            Tutorials
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
