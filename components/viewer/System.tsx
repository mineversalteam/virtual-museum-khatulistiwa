import { ViewerValues } from '@/hooks/ViewerContext';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import {
  WebGLRenderer,
  PerspectiveCamera as TPCamera,
  Matrix4,
  Vector3,
} from 'three';

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

    const offscreen: string[] = [];
    data.hotspots.forEach(({ id, position }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const vec = new Vector3(...position);
      const isOffscreen = !data.frustum.containsPoint(vec);

      vec.project(camera);
      const x = Math.round((vec.x * 0.5 + 0.5) * window.innerWidth);
      const y = Math.round((vec.y * -0.5 + 0.5) * window.innerHeight);

      if (isOffscreen) offscreen.push(id);

      el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    });

    data.setOffscreened(offscreen);
  });

  return null;
};

export default System;
