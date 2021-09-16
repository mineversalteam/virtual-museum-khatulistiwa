import { Canvas } from '@react-three/fiber';
import { useViewer } from '@/hooks/ViewerContext';
import EventHandlers from './EventHandlers';
import Camera from './Camera';

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
