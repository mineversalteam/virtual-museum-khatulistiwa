import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { WebGLRenderer, PerspectiveCamera as TPCamera } from 'three';

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

export default EventHandlers;
