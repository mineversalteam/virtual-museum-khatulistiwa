import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useEffect, createRef } from 'react';
import { PerspectiveCamera as TPCamera, WebGLRenderer } from 'three';
import { useViewer, ViewerValues } from '@/hooks/ViewerContext';

interface UseThreeTypes {
  camera: TPCamera;
  gl: WebGLRenderer;
}

const EventHandlers = () => {
  const { camera, gl }: UseThreeTypes = useThree();

  useEffect(() => {
    const resizeHandler = () => {
      if (!camera || !gl) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      gl.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', resizeHandler, false);

    // Clean-up
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [camera, gl]);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  return null;
};

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
        target={[1, -0.2, 0]}
        // {...data.orbitConfig}
      />
    </>
  );
};

const Viewer = () => {
  const data = useViewer();

  return (
    <Canvas>
      <Camera data={data} />

      <ambientLight intensity={1} />
      <mesh scale={1} position={[10, 0, 5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='orange' />
      </mesh>

      <EventHandlers />
    </Canvas>
  );
};

export default Viewer;
