import { createContext, useState, useContext, useEffect } from 'react';
import { Frustum } from 'three';
import Maps from '@/maps.json';
import { Vector3 } from '@react-three/fiber';
import clamp from '@/utils/clamp';
import State from '@/utils/state';
import { useProgress } from '@react-three/drei';
import EventEmitter from 'eventemitter3';

const ViewerContext = createContext({});
const emitter = new EventEmitter();

export interface HotspotObject {
  element: HTMLElement;
  position: Vector3;
  id: string;
  name?: string;
}

export interface HotspotInfo {
  title: string;
  subtitle?: string;
  description?: string;
  model?: string;
}
export interface Hotspot {
  position: number[];
  id: string;
  name: string;
  size?: string[];
  info?: HotspotInfo;
}

export interface Map {
  id: string;
  name: string;
  hotspots: Hotspot[];
  texture: string[];
}

export interface MapRegion {
  region: string;
  id: string;
  maps: Map[];
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
  emitter: EventEmitter;
  maps: MapRegion[];
  setMaps: State<MapRegion[]>;
  activeMap: number;
  setActiveMap: State<number>;
  activeRegion: number;
  setActiveRegion: State<number>;
  index: number;
  setIndex: State<number>;
  hotspots: Hotspot[];
  setHotspots: State<Hotspot[]>;
  isShowingInfo: boolean;
  setShowingInfo: State<boolean>;
  activeInfo: number;
  setActiveInfo: State<number>;
  disableControl: boolean;
  setDisableControl: State<boolean>;
  cameraConfig: CameraConfig;
  orbitConfig: OrbitConfig;
  loading: boolean;
  setLoading: State<boolean>;
  hideHotspot: boolean;
  setHideHotspot: State<boolean>;
  offscreened: string[];
  setOffscreened: State<string[]>;
  show360: boolean;
  setShow360: State<boolean>;
  frustum: Frustum;
  update: () => boolean;
  reset: (counterOnly?: boolean) => void;
  nextRegion: () => void;
  prevRegion: () => void;
  showInfo: (index: number) => void;
  hideInfo: () => void;
  setRegion: (index: number) => void;
  setMap: (index: number) => void;
}

export default ViewerContext;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Provider = (props: any) => {
  const [maps, setMaps] = useState<MapRegion[]>(Maps);
  const [activeRegion, setActiveRegion] = useState(0);
  const [activeMap, setActiveMap] = useState(0);

  const [hotspots, setHotspots] = useState<Hotspot[]>([]);
  const [index, setIndex] = useState(0);

  const [activeInfo, setActiveInfo] = useState(0);
  const [isShowingInfo, setShowingInfo] = useState(false);

  const [disableControl, setDisableControl] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hideHotspot, setHideHotspot] = useState(false);
  const [offscreened, setOffscreened] = useState<string[]>([]);
  const [show360, setShow360] = useState(true);

  const { progress } = useProgress();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let timeout: NodeJS.Timeout;
    // if (!loading && Math.floor(progress) !== 100) setLoading(true);
    if (loading && Math.floor(progress) === 100) {
      timeout = setTimeout(() => {
        setLoading(false);
        if (show360) setShow360(false);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [loading, progress, show360]);

  const value: ViewerValues = {
    emitter,
    maps,
    setMaps,
    activeMap,
    setActiveMap,
    activeRegion,
    setActiveRegion,
    index,
    setIndex,
    hotspots,
    setHotspots,
    isShowingInfo,
    setShowingInfo,
    activeInfo,
    setActiveInfo,
    disableControl,
    setDisableControl,
    loading,
    setLoading,
    hideHotspot,
    setHideHotspot,
    offscreened,
    setOffscreened,
    show360,
    setShow360,
    frustum: new Frustum(),
    cameraConfig: {
      fov: 65,
      aspect: 1.2,
      far: 75000,
    },
    orbitConfig: {
      target: [1, -0.2, 0],
    },
    reset(counterOnly = true) {
      setActiveMap(0);
      setIndex(0);
      if (counterOnly) return;

      setActiveRegion(0);
      setShowingInfo(false);
      setDisableControl(false);
      setHotspots([]);
      setMaps([]);
    },
    update() {
      const { maps: activeMapObj } = maps[activeRegion];
      if (!activeMapObj) return false;

      const { hotspots } = activeMapObj[activeMap];
      if (!hotspots) return false;

      setHotspots(hotspots);
      return true;
    },
    nextRegion() {
      this.setRegion(clamp(activeRegion + 1, 0, maps.length - 1));
    },
    prevRegion() {
      this.setRegion(clamp(activeRegion - 1, 0, maps.length - 1));
    },
    setRegion(index) {
      emitter.once('loader:close', () => {
        this.reset();
        setActiveRegion(index);
      });
      setLoading(true);
    },
    setMap(index) {
      emitter.once('loader:close', () => setActiveMap(index));
      setLoading(true);
    },
    showInfo(index) {
      setActiveInfo(index);
      setShowingInfo(true);
      setHideHotspot(true);
    },
    hideInfo() {
      setShowingInfo(false);
      setHideHotspot(false);
    },
  };

  return <ViewerContext.Provider {...props} value={value} />;
};

export const useViewer = () => useContext(ViewerContext) as ViewerValues;
