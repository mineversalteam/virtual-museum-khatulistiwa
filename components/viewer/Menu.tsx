import { ViewerValues } from '@/hooks/ViewerContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  data: ViewerValues;
}

const Menu = ({ data }: IProps) => {
  const region = data.maps[data.activeRegion]?.region;

  return (
    <div className='text-gray-50 text-2xl absolute flex justify-center items-center z-10 bottom-4 w-full'>
      <div className='flex items-center pointer-events-auto px-6 bg-black bg-opacity-30'>
        <FontAwesomeIcon
          icon={faCaretLeft}
          className='w-3 cursor-pointer filter drop-shadow-lg'
          onClick={() => data.prevRegion()}
        />

        <h1 className='w-64 text-center select-none font-minecraftia mt-5 cursor-pointer filter drop-shadow-lg'>
          {region}
        </h1>

        <FontAwesomeIcon
          icon={faCaretRight}
          className='w-3 cursor-pointer filter drop-shadow-lg'
          onClick={() => data.nextRegion()}
        />
      </div>
    </div>
  );
};

export default Menu;
