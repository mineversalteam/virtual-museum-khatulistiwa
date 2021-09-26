import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='fixed w-full px-24 py-10 z-20'>
      <nav className='navbar flex justify-between items-center'>
        <div className='nav-right'>
          <button className='mv-btn btn-blue flex items-center'>
            <FontAwesomeIcon
              icon={faEye}
              className='w-3 cursor-pointer filter drop-shadow-lg'
            />
            <span className='font-minecraftia pl-3'>3D Viewer</span>
          </button>
        </div>
        <div className='nav-left flex flex-row items-center'>
          <a className='nav-item'>About Project</a>
          <a className='nav-item'>3D Viewer</a>
          <a className='nav-item'>Map Makers</a>
          <a className='nav-item'>Tutorials</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
