import { Canvas } from '@react-three/fiber';
import { useViewer } from '@/hooks/ViewerContext';
import React, { Suspense } from 'react';
import System from './System';
import Camera from './Camera';
import Skybox from './Skybox';
import Menu from './Menu';
import Indicator from './Indicator';
import Hotspots from './Hotspots';
import Loader from './Loader';
import Popup from './Popup';

const Viewer = () => {
  const data = useViewer();

  return (
    <div className='relative overflow-hidden'>
      <div className='absolute z-10 h-screen w-full pointer-events-none'>
        <Indicator data={data} />

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

      <Popup data={data} />
      <Loader data={data} />
    </div>
  );
};

export default Viewer;
