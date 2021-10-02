import Viewer from '@/components/viewer';
import { MapRegion, Provider as ViewerProvider } from '@/hooks/ViewerContext';

interface IProps {
  maps: MapRegion[];
}

const Home = ({ maps }: IProps) => {
  return (
    <ViewerProvider data={maps}>
      <Viewer />
    </ViewerProvider>
  );
};

export const getServerSideProps = async () => {
  const [maps] = await Promise.all([
    fetch('https://api.minecraft-id.net/museum/?data=maps').then((res) =>
      res.json()
    ),
  ]);

  return {
    props: {
      maps,
    },
  };
};

export default Home;
