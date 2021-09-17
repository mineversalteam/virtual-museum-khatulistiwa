import { Canvas } from '@react-three/fiber';
import { useViewer } from '@/hooks/ViewerContext';
import { Suspense } from 'react';
import EventHandlers from './EventHandlers';
import Camera from './Camera';
import Skybox from './Skybox';

const Viewer = () => {
  const data = useViewer();

  return (
    <div>
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
