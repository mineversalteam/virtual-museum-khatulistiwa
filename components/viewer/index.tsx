import { Canvas } from '@react-three/fiber';
import { useViewer } from '@/hooks/ViewerContext';
import { Suspense } from 'react';
import System from './System';
import Camera from './Camera';
import Skybox from './Skybox';
import Menu from './Menu';
import Indicator from './Indicator';
import Hotspots from './Hotspots';

const Viewer = () => {
  const data = useViewer();

  return (
    <div className='relative'>
      <div className='absolute z-10 overflow-hidden h-screen w-full pointer-events-none'>
        <Indicator />

        <Menu data={data} />
        <Hotspots data={data} />
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

        <System data={data} />
      </Canvas>
    </div>
  );
};

export default Viewer;
