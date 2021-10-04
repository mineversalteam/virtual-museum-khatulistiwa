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
const NAV = ['hidden', 'block'];
const LINKS: Record<string, string> = {
  Home: '#',
  'About Project': '#about-museum',
  'Get Ticket': 'https://minecraft-id.net/ticket',
  'Map Makers': '#team',
  Tutorials: '#tutorial',
};

const Header = () => {
  const [activeBg, setActiveBg] = useState(0);
  const [isActive, setActive] = useState(0);
  const [lock, setLock] = useState(false);

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
      if (!lock) setActiveBg(index);
    };

    window.addEventListener('scroll', handler, true);
    return () => window.removeEventListener('scroll', handler, true);
  }, [lock]);

  const toggleNav = () => {
    const active = Number(!isActive);
    setActive(active);

    if (active === 0) {
      setLock(false);
      return window.dispatchEvent(new Event('scroll'));
    }

    if (active === 1 && activeBg === 0) return setActiveBg(1);
  };

  return (
    <div
      className={[
        'fixed w-full px-10 py-5 z-20  md:px-24 transition duration-300 ease-in-out',
        COLORS[activeBg]?.[0],
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
              <span className='font-minecraftia pl-3 md:mb-0 relative'>
                3D Viewer
              </span>
            </button>
          </Link>
        </div>
        <button onClick={toggleNav}>
          <FontAwesomeIcon
            icon={faBars}
            className={`w-5 cursor-pointer block lg:hidden filter drop-shadow-lg ${COLORS[activeBg]?.[1]}`}
          />
        </button>
        <div
          className={`${NAV?.[isActive]} fixed py-8 left-0 z-0 right-0 top-20 nav-left flex-wrap flex-col flex items-center lg:py-0 lg:relative lg:top-0 lg:block lg:flex-row lg:block lg:bg-transparent ${COLORS[activeBg][0]}`}
          id='navigation-list'
        >
          {Object.keys(LINKS).map((k, i) => (
            <a
              className={`select-none nav-item cursor-pointer leading-10 mb-4 lg:mb-0 ${COLORS[activeBg]?.[1]} filter drop-shadow transition duration-300 ease-in-out hover:text-secondary-blue`}
              href={LINKS[k]}
              key={i}
            >
              {k}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
