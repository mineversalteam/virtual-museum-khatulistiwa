import { ViewerValues } from '@/hooks/ViewerContext';

interface IProps {
  data: ViewerValues;
}

const Menu = ({ data }: IProps) => {
  const region = data.maps[data.activeRegion]?.region;

  return (
    <div className='text-gray-50 text-2xl absolute flex justify-center items-center z-10 bottom-4 w-full'>
      <div className='pointer-events-auto px-3 py-1 bg-black bg-opacity-30'>
        <h1 className='font-minecraftia mt-5'>{region}</h1>
      </div>
    </div>
  );
};

export default Menu;
