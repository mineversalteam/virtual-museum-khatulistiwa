import { ViewerValues } from '@/hooks/ViewerContext';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import { WebGLRenderer, PerspectiveCamera as TPCamera, Matrix4 } from 'three';

interface UseThreeTypes {
  camera: TPCamera;
  gl: WebGLRenderer;
}

interface IProps {
  data: ViewerValues;
}

const System = ({ data }: IProps) => {
  const { camera, gl }: UseThreeTypes = useThree();

  // Handle Resize
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

  useFrame(() => {
    camera.updateMatrix();
    camera.updateProjectionMatrix();

    data.frustum.setFromProjectionMatrix(
      new Matrix4().multiplyMatrices(
        camera.projectionMatrix,
        camera.matrixWorldInverse
      )
    );
  });

  return null;
};

export default System;
