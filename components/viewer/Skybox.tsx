import { Box, useTexture } from '@react-three/drei';
import { BackSide, LinearFilter, MeshBasicMaterial, sRGBEncoding } from 'three';

interface IProps {
  texture: string[];
}

const Skybox = ({ texture }: IProps) => {
  const textures = useTexture(texture);

  return (
    <Box
      args={[32768, 32768, 32768]}
      material={textures.map((map) => {
        map.minFilter = LinearFilter;
        map.encoding = sRGBEncoding;

        const mat = new MeshBasicMaterial({
          map,
          side: BackSide,
        });

        return mat;
      })}
    />
  );
};

export default Skybox;
