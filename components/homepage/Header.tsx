import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const COLORS = [
  ['bg-transparent', 'text-white'],
  ['bg-black', 'text-white'],
  ['bg-black', 'text-white'],
  ['bg-white', 'text-black'],
  ['bg-black', 'text-white'],
];

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

  return (
    <div
      className={[
        'fixed w-full px-24 py-10 z-20 transition duration-300 ease-in-out',
        COLORS[activeBg][0],
      ].join(' ')}
    >
      <nav className='navbar flex justify-between items-center'>
        <div className='nav-right'>
          <Link href='/maps' passHref>
            <button className='mv-btn btn-blue flex items-center transition duration-300 ease-in-out hover:bg-dark-blue'>
              <FontAwesomeIcon
                icon={faEye}
                className='w-3 cursor-pointer filter drop-shadow-lg'
              />
              <span className='font-minecraftia pl-3'>3D Viewer</span>
            </button>
          </Link>
        </div>
        <div className='nav-left flex flex-row items-center'>
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
