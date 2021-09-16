import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { Frustum } from 'three';
import Maps from '@/maps.json';
import { Vector3 } from '@react-three/fiber';

const ViewerContext = createContext({});

type State<T> = Dispatch<SetStateAction<T>>;

export interface Hotspot {
  element: HTMLElement;
  position: Vector3;
  id: string;
  name?: string;
}

export interface Map {
  id: string;
  name?: string;
  description?: string;
  hotspots?: Hotspot[];
  texture: [string, string, string, string, string, string];
}

export interface CameraConfig {
  fov?: number;
  aspect?: number;
  near?: number;
  far?: number;
}

export interface OrbitConfig {
  target: Vector3;
}

export interface ViewerValues {
  maps: Map[];
  setMaps: State<Map[]>;
  index: number;
  setIndex: State<number>;
  hotspots: Hotspot[];
  setHotspots: State<Hotspot[]>;
  isShowingInfo: boolean;
  setShowingInfo: State<boolean>;
  disableControl: boolean;
  setDisableControl: State<boolean>;
  cameraConfig: CameraConfig;
  orbitConfig: OrbitConfig;
  frustum: Frustum;
}

export default ViewerContext;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Provider = (props: any) => {
  const [maps, setMaps] = useState<Map[]>(Maps);
  const [index, setIndex] = useState(0);
  const [hotspots, setHotspots] = useState<Hotspot[]>([]);
  const [isShowingInfo, setShowingInfo] = useState(false);
  const [disableControl, setDisableControl] = useState(false);

  const value: ViewerValues = {
    maps,
    setMaps,
    index,
    setIndex,
    hotspots,
    setHotspots,
    isShowingInfo,
    setShowingInfo,
    disableControl,
    setDisableControl,
    frustum: new Frustum(),
    cameraConfig: {
      fov: 65,
      aspect: 1.2,
      far: 75000,
    },
    orbitConfig: {
      target: [1, -0.2, 0],
    },
  };

  return <ViewerContext.Provider {...props} value={value} />;
};

export const useViewer = () => useContext(ViewerContext) as ViewerValues;
