import { ViewerValues } from '@/hooks/ViewerContext';
import { useEffect } from 'react';

interface IProps {
  data: ViewerValues;
}

const Hotspots = ({ data }: IProps) => {
  const hotspots = data.maps[data.activeRegion].maps[data.activeMap].hotspots;

  useEffect(() => {
    data.setHotspots(hotspots);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotspots]);

  return (
    <div className='absolute top-0 w-full h-screen pointer-events-none'>
      {hotspots.map((k) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={k.id}
          src='/assets/icons/clickable.webp'
          alt=''
          width={k?.size?.[0] ?? '50px'}
          height={k?.size?.[1] ?? '50px'}
          className='absolute top-0 left-0 pointer-events-auto'
          draggable={false}
          id={k.id}
        />
      ))}
    </div>
  );
};

export default Hotspots;
