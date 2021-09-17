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
      {hotspots.map((k, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={k.id}
          src='/assets/icons/clickable.webp'
          alt=''
          width={k?.size?.[0] ?? '50px'}
          height={k?.size?.[1] ?? '50px'}
          className={[
            'absolute top-0 left-0 cursor-pointer transition-opacity duration-300 ease-in-out select-none filter drop-shadow-md',
            data.hideHotspot ? 'pointer-events-none' : 'pointer-events-auto',
            data.hideHotspot || data.offscreened.includes(k.id)
              ? 'opacity-0'
              : 'opacity-100',
          ].join(' ')}
          draggable={false}
          id={k.id}
          onClick={() => data.showInfo(i)}
        />
      ))}
    </div>
  );
};

export default Hotspots;
