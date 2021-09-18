import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { createRef, Suspense } from 'react';

interface IProps {
  url: string;
}

const GLTF = ({ url }: IProps) => {
  const { scene } = useThree();
  const { scene: gltfScene } = useGLTF(url, true);

  gltfScene.scale.set(5, 5, 5);
  gltfScene.position.y = -40;
  gltfScene.traverse((node) => {
    // @ts-expect-error Type
    if (node.isMesh) {
      // @ts-expect-error Type
      node.material.transparent = true;
      // @ts-expect-error Type
      node.material.alphaTest = 0.2;
      node.castShadow = true;
    }
  });

  scene.add(gltfScene);

  return null;
};

const Model = ({ url }: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cam = createRef<any>();

  return (
    <Canvas className='filter drop-shadow-md'>
      <PerspectiveCamera makeDefault position={[-180, 80, 180]} ref={cam} />
      <OrbitControls
        camera={cam.current}
        enablePan={false}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
        maxDistance={200}
        minDistance={100}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 3}
      />

      <Suspense fallback={null}>
        <GLTF url={url} />
      </Suspense>
    </Canvas>
  );
};

export default Model;
