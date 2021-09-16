import { ViewerValues } from '@/hooks/ViewerContext';
import { createRef } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

interface ICamProps {
  data: ViewerValues;
}

// eslint-disable-next-line react/display-name
const Camera = ({ data }: ICamProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cam = createRef<any>();

  return (
    <>
      <PerspectiveCamera makeDefault ref={cam} {...data.cameraConfig} />
      <OrbitControls
        camera={cam.current}
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
        {...data.orbitConfig}
      />
    </>
  );
};

export default Camera;
