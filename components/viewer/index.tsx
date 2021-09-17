import { Canvas } from '@react-three/fiber';
import { useViewer } from '@/hooks/ViewerContext';
import { Suspense } from 'react';
import EventHandlers from './EventHandlers';
import Camera from './Camera';
import Skybox from './Skybox';
import Menu from './Menu';
import Indicator from './Indicator';

const Viewer = () => {
  const data = useViewer();

  // useEffect(() => {
  //   const a = setTimeout(() => data.setActiveMap(1), 3000);
  //   return () => clearTimeout(a);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className='relative'>
      <div className='absolute z-10 h-screen w-full pointer-events-none'>
        <Indicator />

        <Menu data={data} />
      </div>

      <Canvas>
        <Camera data={data} />
        <Suspense fallback={null}>
          <Skybox
            texture={
              data?.maps?.[data.activeRegion]?.maps?.[data.activeMap]?.texture
            }
          />
        </Suspense>

        <EventHandlers />
      </Canvas>
    </div>
  );
};

export default Viewer;
